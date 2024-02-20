import { useEffect } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import InfiniteScrollCard from "@/components/InfiniteScrollCard";
import { Skeleton } from "@/components/skeleton";
import ScrollToTopBtn from "@/components/ScrollToTopBtn";

import { getGenreById, getGenreMovies } from "@/services/themoviedbAPI";
import { MovieType, ShowType } from "@/lib/types";
import { cn } from "@/lib/utils";

function GenrePage() {
  const { ref, inView } = useInView();
  const [searchParams] = useSearchParams();
  const { genreId = "" } = useParams();
  const type = searchParams.get("view") || "";

  const { data: genre } = useQuery({
    queryKey: "genres",
    queryFn: () => getGenreById(genreId, type),
  });

  const { data: genreMovies } = useQuery({
    queryKey: ["genreMovies", genreId],
    queryFn: () => getGenreMovies(genreId, "movie", 1),
    staleTime: Infinity,
  });

  const { data: genreTv } = useQuery({
    queryKey: ["genreTv", genreId],
    queryFn: () => getGenreMovies(genreId, "tv", 1),
    staleTime: Infinity,
  });

  const {
    data,
    isLoading,
    isSuccess,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["genre", genreId, type],
    queryFn: ({ pageParam = 1 }) => getGenreMovies(genreId, type, pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <div className="px-6 my-12 md:px-20 md:my-20">
      <div className="flex flex-col gap-4 mb-8 md:gap-8 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold md:text-4xl">
          Genres / {genre?.name}
        </h1>
        <div className="space-x-4 md:space-x-8">
          <Link
            replace={true}
            to={`?view=tv`}
            className={cn(
              "cursor-pointer border-yellow-400 text-lg font-semibold",
              {
                ["border-b-2"]: type === "tv",
                ["pointer-events-none text-stone-400"]:
                  genreTv?.results.length === 0,
              }
            )}
          >
            Shows
          </Link>
          <Link
            replace={true}
            to={`?view=movie`}
            className={cn(
              "cursor-pointer border-yellow-400 text-lg font-semibold",
              {
                ["border-b-2"]: type === "movie",
                ["pointer-events-none text-stone-400"]:
                  genreMovies?.results.length === 0,
              }
            )}
          >
            Movies
          </Link>
        </div>
      </div>
      {/* */}
      <section>
        <div className="flex flex-wrap gap-6">
          {isLoading &&
            Array(15)
              .fill(0)
              .map((_, i) => {
                return (
                  <div className="w-48 space-y-2" key={i}>
                    <Skeleton className="h-[288px] w-[100%]" />
                    <Skeleton className="h-[30px] w-[100%]" />
                  </div>
                );
              })}
          {isSuccess &&
            data?.pages.map((page) =>
              page.results.map((movie: MovieType | ShowType, i: number) => {
                if (i + 1 === page.results.length) {
                  return (
                    <InfiniteScrollCard
                      lastRef={ref}
                      movie={movie}
                      key={movie.id}
                    />
                  );
                }
                return <InfiniteScrollCard movie={movie} key={movie.id} />;
              })
            )}
          {isFetchingNextPage &&
            Array(15)
              .fill(0)
              .map((_, i) => {
                return (
                  <div className="w-48 space-y-4" key={i}>
                    <Skeleton className="h-[288px] w-[100%]" />
                    <Skeleton className="h-[30px] w-[100%]" />
                  </div>
                );
              })}
        </div>

        {isSuccess && !hasNextPage && (
          <div className="flex justify-center my-8">
            <p className="text-lg font-semibold">No more movies to show</p>
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

export default GenrePage;
