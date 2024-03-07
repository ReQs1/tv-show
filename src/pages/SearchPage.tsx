import InfiniteScrollCard from "@/components/InfiniteScrollCard";
import InfiniteScrollLoader from "@/components/InfiniteScrollLoader";
import ScrollToTopBtn from "@/components/ScrollToTopBtn";
import useScrollToTopOnMount from "@/hooks/useScrollToTopOnMount";
import { MovieType, ShowType } from "@/lib/types";
import { searchFetch } from "@/services/themoviedbAPI";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";
import { useParams } from "react-router-dom";

function SearchPage() {
  const { query } = useParams();
  if (query) query.replace(" ", "+");

  const { ref, inView } = useInView({
    threshold: 1,
  });

  const {
    data,
    error,
    isLoading,
    isSuccess,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["search", query],
    queryFn: ({ pageParam = 1 }) => {
      if (query) {
        return searchFetch(query, pageParam);
      }
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });

  const mergedData = data?.pages.reduce((acc, page) => {
    const filteredPage = page.results
      .filter((entry: MovieType | ShowType) => entry.media_type !== "person")
      .map((entry: MovieType | ShowType) => ({
        ...entry,
        uniqueId: `${entry.id}-${entry.media_type}`,
      }));
    return [...acc, ...filteredPage];
  }, []);

  const filteredData = mergedData?.filter(
    (
      entry: MovieType | ShowType,
      index: number,
      self: MovieType[] | ShowType[]
    ) => index === self.findIndex((e) => e.uniqueId === entry.uniqueId)
  );

  useScrollToTopOnMount();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (error instanceof Error) return <div>{error.message}</div>;

  return (
    <div className="px-6 my-12 md:px-20 md:my-20">
      <div className="flex flex-col gap-4 mb-8 md:gap-8 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold md:text-4xl">
          Search for {query && query.replace("+", " ")}
        </h1>
      </div>
      <section>
        <div className="flex flex-wrap md:gap-6 gap-9">
          {isLoading && <InfiniteScrollLoader />}

          {isSuccess && filteredData.length === 0 && (
            <div>
              <p className="text-lg text-bold">No Movies Founds</p>
            </div>
          )}

          {isSuccess &&
            filteredData.map((entry: MovieType | ShowType, i: number) => {
              if (i + 1 === filteredData.length) {
                return (
                  <InfiniteScrollCard
                    entry={entry}
                    lastRef={ref}
                    key={entry.id}
                    type={entry.media_type}
                  />
                );
              }
              return (
                <InfiniteScrollCard
                  entry={entry}
                  key={entry.id}
                  type={entry.media_type}
                />
              );
            })}

          {isFetchingNextPage && <InfiniteScrollLoader />}
        </div>

        {isSuccess && filteredData.length > 20 && !hasNextPage && (
          <div className="flex justify-center my-8">
            <p className="text-lg font-semibold">Nothing more to show</p>
          </div>
        )}

        {isFetchingNextPage && (
          <div className="flex justify-center my-8">
            <div className="w-6 h-6 border-t-2 border-b-2 border-yellow-400 rounded-full animate-spin" />
          </div>
        )}
      </section>
      <ScrollToTopBtn />
    </div>
  );
}

export default SearchPage;
