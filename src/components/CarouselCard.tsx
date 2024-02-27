import type { MovieType, ShowType, CastType, EpisodeType } from "@/lib/types";
import { Link } from "react-router-dom";

type PropType = {
  entry: ShowType | MovieType | CastType | EpisodeType;
  type?: "movie" | "tv";
  variant?: "big" | "md" | "sm";
};

function CarouselCard({ entry, type, variant = "big" }: PropType) {
  console.log(entry);
  if (variant === "md" && "episode_type" in entry)
    return (
      <div
        className="flex items-end h-40 p-3 bg-center bg-no-repeat bg-cover rounded-lg cursor-pointer w-60 md:w-72 md:h-40"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0) 0%, rgba(0,0,0,0.8) 85%), url('${
            entry.still_path
              ? `https://image.tmdb.org/t/p/w500${entry.still_path}`
              : "https://placehold.co/500x750?text=No+Episode+Poster"
          }')`,
        }}
      >
        <div className="text-lg font-bold text-white">
          <p>{`S0${entry.season_number}E${entry.episode_number}`}</p>
          <h3>{entry.name}</h3>
        </div>
      </div>
    );

  if (variant === "sm" && "cast_id" in entry)
    return (
      <div
        className="flex items-end w-32 p-3 bg-center bg-no-repeat bg-cover rounded-lg cursor-pointer h-44 md:h-52 md:w-36 "
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0) 0%, rgba(0,0,0,0.8) 85%), url('${
            entry.profile_path
              ? `https://image.tmdb.org/t/p/w500${entry.profile_path}`
              : "https://placehold.co/500x750?text=No+Actor+Image"
          }')`,
        }}
      >
        <h3 className="text-lg font-bold text-white">{entry.name}</h3>
      </div>
    );

  return (
    "poster_path" in entry && (
      <Link to={`/${type}/${entry.id}`}>
        <div
          className="flex items-end w-40 p-3 bg-center bg-no-repeat bg-cover rounded-lg cursor-pointer h-52 md:h-64 md:w-52"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0) 0%, rgba(0,0,0,0.8) 85%), url('${
              entry.poster_path
                ? `https://image.tmdb.org/t/p/w500${entry.poster_path}`
                : "https://placehold.co/500x750?text=No+Poster"
            }')`,
          }}
        >
          <h3 className="text-lg font-bold text-white">
            {entry.title || ("name" in entry ? entry.name : "")}
          </h3>
        </div>
      </Link>
    )
  );
}

export default CarouselCard;
