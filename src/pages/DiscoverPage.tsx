import { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import InfiniteScrollCard from "@/components/InfiniteScrollCard";
import { Skeleton } from "@/components/skeleton";
import ScrollToTopBtn from "@/components/ScrollToTopBtn";
import { discoverMovies } from "@/services/themoviedbAPI";
import { MovieType, ShowType } from "@/lib/types";
import { getUniqueData } from "@/lib/utils";
import useScrollToTopOnMount from "@/hooks/useScrollToTopOnMount";

function DiscoverPage() {
  const { type = "" } = useParams();
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    isSuccess,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["discover", type],
    queryFn: ({ pageParam = 1 }) => discoverMovies(type, pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });

  const uniqueData = getUniqueData(data);

  useScrollToTopOnMount();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <div className="px-6 my-12 md:px-20 md:my-20">
      <div className="mb-8">
        {type === "movie" && (
          <h1 className="text-3xl font-bold md:text-4xl">Discover / Movies</h1>
        )}
        {type === "tv" && (
          <h1 className="text-3xl font-bold md:text-4xl">
            Discover / Tv Shows
          </h1>
        )}
      </div>
      <section>
        <div className="flex flex-wrap md:gap-6 gap-9">
          {isLoading &&
            Array(20)
              .fill(0)
              .map((_, i) => {
                return (
                  <div
                    className="flex flex-col flex-1 space-y-2 basis-48 lg:max-w-[200px]"
                    key={i}
                  >
                    <Skeleton className="h-[288px] w-[100%]" />
                    <Skeleton className="h-[30px] w-[100%]" />
                  </div>
                );
              })}

          {error ? (
            <p>{`Couldn't fetch ${type === "tv" ? "TV Shows" : "Movies"}`}</p>
          ) : null}

          {isSuccess &&
            uniqueData.map((entry: MovieType | ShowType, i: number) => {
              if (i + 1 === uniqueData.length) {
                return (
                  <InfiniteScrollCard
                    entry={entry}
                    lastRef={ref}
                    key={entry.id}
                    type={type}
                  />
                );
              }
              return (
                <InfiniteScrollCard entry={entry} key={entry.id} type={type} />
              );
            })}

          {isFetchingNextPage &&
            Array(20)
              .fill(0)
              .map((_, i) => {
                return (
                  <div
                    className="flex flex-col flex-1 space-y-2 basis-48 lg:max-w-[200px]"
                    key={i}
                  >
                    <Skeleton className="h-[288px] w-[100%]" />
                    <Skeleton className="h-[30px] w-[100%]" />
                  </div>
                );
              })}
        </div>

        {isSuccess && !hasNextPage && (
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

export default DiscoverPage;
