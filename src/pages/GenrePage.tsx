import { useInfiniteQuery, useQuery } from "react-query";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import { getGenreById, getGenreMovies } from "@/services/themoviedbAPI";
import { MovieType, ShowType } from "@/lib/types";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

function GenrePage() {
  const { ref, inView } = useInView();
  const [searchParams] = useSearchParams();
  const { genreId = "" } = useParams();
  const type = searchParams.get("view") || "";

  const { data: genre } = useQuery({
    queryKey: "genres",
    queryFn: () => getGenreById(genreId, type),
    staleTime: Infinity,
  });

  const { data: genreMovies } = useQuery({
    queryKey: ["genreMovies"],
    queryFn: () => getGenreMovies(genreId, "movie", 1),
  });

  const { data: genreTv } = useQuery({
    queryKey: ["genreTv"],
    queryFn: () => getGenreMovies(genreId, "tv", 1),
    staleTime: Infinity,
  });

  const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
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
            to={`?view=tv`}
            className={cn(
              "cursor-pointer border-yellow-400 text-lg font-semibold",
              {
                ["border-b-2"]: type === "tv",
                ["pointer-events-none text-stone-400"]:
                  genreTv?.results?.length === 0,
              },
            )}
          >
            Shows
          </Link>
          <Link
            to={`?view=movie`}
            className={cn(
              "cursor-pointer border-yellow-400 text-lg font-semibold",
              {
                ["border-b-2"]: type === "movie",
                ["pointer-events-none text-stone-400"]:
                  genreMovies?.results?.length === 0,
              },
            )}
          >
            Movies
          </Link>
        </div>
      </div>
      {/* */}
      <section>
        <div className="flex flex-wrap gap-6">
          {isSuccess &&
            data?.pages.map((page) =>
              page.results.map((movie: MovieType | ShowType, i: number) => {
                if (i + 1 === page.results.length) {
                  return (
                    <div
                      ref={ref}
                      key={i}
                      className="flex items-end w-40 p-3 bg-center bg-no-repeat bg-cover rounded-lg cursor-pointer h-52 md:h-64 md:w-52 bg-gradient-to-b from-transparent to-black"
                      style={{
                        backgroundImage:
                          `linear-gradient(rgba(255,255,255,0) 0%, rgba(0,0,0,0.8) 85%), url('https://image.tmdb.org/t/p/original${movie.poster_path}')`,
                      }}
                    >
                      <h3 className="text-lg font-bold text-white">
                        {movie.title || ("name" in movie ? movie.name : "")}
                      </h3>
                    </div>
                  );
                }
                return (
                  <div
                    key={i}
                    className="flex items-end w-40 p-3 bg-center bg-no-repeat bg-cover rounded-lg cursor-pointer h-52 md:h-64 md:w-52 bg-gradient-to-b from-transparent to-black"
                    style={{
                      backgroundImage:
                        `linear-gradient(rgba(255,255,255,0) 0%, rgba(0,0,0,0.8) 85%), url('https://image.tmdb.org/t/p/original${movie.poster_path}')`,
                    }}
                  >
                    <h3 className="text-lg font-bold text-white">
                      {movie.title || ("name" in movie ? movie.name : "")}
                    </h3>
                  </div>
                );
              })
            )}
        </div>
        {isFetchingNextPage && (
          <div className="flex justify-center my-8">
            <div className="w-6 h-6 border-t-2 border-b-2 border-yellow-500 rounded-full animate-spin" />
          </div>
        )}
        {!hasNextPage && (
          <div className="flex justify-center my-8">
            <p className="text-lg font-semibold">No more movies to show</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default GenrePage;
