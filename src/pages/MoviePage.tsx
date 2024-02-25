import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Play, Plus, Star } from "lucide-react";

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
    status,
    popularity,
  } = data;

  if (error instanceof Error)
    return (
      <div className="flex items-center justify-center">
        <p>{error.message}</p>
      </div>
    );

  return (
    data && (
      <div>
        <header
          className="px-4 py-8 text-white bg-[top_center] bg-no-repeat bg-cover shadow-lg sm:px-8 md:px-10 xl:px-20 md:py-12 lg:py-16 xl:py-20"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,212,255,0) 0%, #000000 100%), url('https://image.tmdb.org/t/p/original${backdrop_path}')`,
          }}
        >
          {/* poster */}

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

            {/*  h1  */}

            <div className="flex flex-col flex-1 gap-2">
              <h1 className="text-2xl font-bold md:text-3xl">
                {name || title}
              </h1>

              {/* Rating and genres */}

              <div className="flex items-center gap-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => {
                    if (i + 1 <= Math.ceil(data.vote_average / 2))
                      return (
                        <Star
                          className="w-6 h-6 sm:w-7 sm:h-7"
                          key={i}
                          fill="#ffc800"
                          color="#ffc800"
                        />
                      );

                    return (
                      <Star
                        className="w-6 h-6 sm:w-7 sm:h-7"
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

              {/* PC overview section  */}

              <div className="hidden mt-8 md:block md:max-w-[600px] md:max-h-48">
                <p className="overflow-auto text-lg">{overview}</p>
              </div>
            </div>

            {/* PC status watchlist trailer section  */}

            <div className="hidden xl:block">
              <div className="flex flex-col items-center">
                <div className="py-2 space-y-1 text-center bg-black rounded-md w-72">
                  <p className="text-xl">Status</p>
                  <p className="text-2xl font-bold">{status}</p>
                </div>

                {/* popularity  */}

                <div className="py-2 mt-8 space-y-1 text-center bg-black rounded-md w-72">
                  <p className="text-xl">TheMovieDB Popularity</p>
                  <p className="text-2xl font-bold">{Math.floor(popularity)}</p>
                </div>

                {/* buttons  */}

                <div className="mt-16 space-y-5 ">
                  <button className="flex items-center justify-center gap-1 px-8 py-3 font-bold text-yellow-400 uppercase transition-all bg-transparent border-2 border-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black w-72">
                    <Plus />
                    Add To Watchlist
                  </button>
                  <button className="flex items-center justify-center gap-1 px-8 py-3 font-bold text-yellow-400 uppercase transition-all bg-transparent border-2 border-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black w-72">
                    <Play size={22} />
                    Watch Trailer
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE overview section  */}

          <div className="block mt-10 text-base sm:text-lg md:hidden">
            <p>{overview}</p>
          </div>

          {/* MOBILE status watchlist trailer section  */}

          <div className="flex flex-col items-center mt-10 xl:hidden">
            <div className="flex flex-col items-center gap-2 sm:flex-row">
              <div className="w-48 px-4 py-3 space-y-2 flex flex-col justify-center items-center text-white bg-black rounded-md h-[108px]">
                <p>Status</p>
                <p className="text-lg font-bold">{status}</p>
              </div>

              {/* popularity  */}

              <div className="w-48 px-4 py-3 space-y-2 text-center text-white bg-black rounded-md h-[108px]">
                <p>TheMovieDB Popularity</p>
                <p className="text-lg font-bold">{Math.floor(popularity)}</p>
              </div>
            </div>

            {/* buttons  */}

            <div className="space-y-4 mt-14">
              <button className="flex items-center justify-center gap-1 px-8 py-3 font-bold text-yellow-400 uppercase transition-all bg-transparent border-2 border-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black w-72">
                <Plus />
                Add To Watchlist
              </button>
              <button className="flex items-center justify-center gap-1 px-8 py-3 font-bold text-yellow-400 uppercase transition-all bg-transparent border-2 border-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black w-72">
                <Play size={22} />
                Watch Trailer
              </button>
            </div>
          </div>
        </header>
      </div>
    )
  );
}

export default MoviePage;
