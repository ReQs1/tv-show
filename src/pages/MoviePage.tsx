import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Star } from "lucide-react";

import { getMovieDetails, getShowDetails } from "@/services/themoviedbAPI";
import MoviePageLoader from "@/components/MoviePageLoader";

import { GenreType } from "@/lib/types";
import { formatTime, truncate } from "@/lib/utils";

import useScrollToTopOnMount from "@/hooks/useScrollToTopOnMount";
import useChangeDocTitle from "@/hooks/useChangeDocTitle";

function MoviePage() {
  const { type, id = "" } = useParams<{ type: "movie" | "tv"; id: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ["movieDetails", id, type],
    queryFn: () => {
      if (id && type === "movie") return getMovieDetails(id);
      else if (id && type === "tv") return getShowDetails(id);
    },
  });

  console.log(data);

  useChangeDocTitle(data);
  useScrollToTopOnMount();

  if (isLoading && type) return <MoviePageLoader type={type} />;

  const {
    name,
    title,
    backdrop_path,
    poster_path,
    genres,
    runtime,
    number_of_seasons,
    overview,
  } = data;

  if (error)
    return (
      <div>
        <p>There was an error while fetching data</p>
      </div>
    );

  return (
    data && (
      <div>
        <header
          className="px-4 py-8 text-white bg-[top_center] bg-no-repeat bg-cover shadow-lg sm:px-8 md:px-16 lg:px-24 xl:px-32 md:py-12 lg:py-16 xl:py-20"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,212,255,0) 0%, #000000 100%), url('https://image.tmdb.org/t/p/original${backdrop_path}')`,
          }}
        >
          <div className="flex gap-4 md:gap-10 sm:gap-6">
            <div className="max-w-36 sm:max-w-48 lg:max-w-56 xl:max-w-72">
              <img
                className="rounded-lg lg:w-full"
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : "https://placehold.co/500x750?text=No+Movie+Poster"
                }
                alt={`${truncate(name) || truncate(title)}`}
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold md:text-3xl">
                {name || title}
              </h1>
              <div className="flex items-center gap-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => {
                    if (i + 1 < Math.ceil(data.vote_average) / 2)
                      return (
                        <Star
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                          key={i}
                          fill="#ffc800"
                          color="#ffc800"
                        />
                      );

                    return (
                      <Star
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        key={i}
                        color="#ffc800"
                        strokeWidth={1.5}
                      />
                    );
                  })}
              </div>
              <p className="text-lg">
                {genres.map((genre: GenreType) => genre.name).join(", ")}
              </p>
              {runtime && (
                <p className="text-base">Runtime: {formatTime(runtime)}</p>
              )}
              {number_of_seasons && (
                <p className="text-lg">
                  {number_of_seasons === 1
                    ? `${number_of_seasons} season`
                    : `${number_of_seasons} seasons`}
                </p>
              )}
              <div className="hidden mt-8 md:block md:max-w-[600px] md:max-h-48">
                <p className="overflow-auto text-lg">{overview}</p>
              </div>
            </div>
          </div>
          <div className="block mt-10 text-base sm:text-lg md:hidden">
            <p>{overview}</p>
          </div>
        </header>
      </div>
    )
  );
}

export default MoviePage;
