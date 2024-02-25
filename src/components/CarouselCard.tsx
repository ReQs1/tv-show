import type { MovieType, ShowType, CastType, EpisodeType } from "@/lib/types";
import { Link } from "react-router-dom";

type PropType = {
  entry: ShowType | MovieType | CastType | EpisodeType;
  type?: "movie" | "tv";
  variant?: "big" | "md" | "sm";
};

function CarouselCard({ entry, type, variant = "big" }: PropType) {
  if (variant === "md" && "episode_type" in entry)
    return (
      <div
        className="flex items-end h-40 p-3 bg-center bg-no-repeat bg-cover rounded-lg cursor-pointer w-60 md:w-72 md:h-40"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0) 0%, rgba(0,0,0,0.8) 85%), url('https://image.tmdb.org/t/p/w500${entry.still_path}')`,
        }}
      >
        <h3 className="text-lg font-bold text-white">{entry.name}</h3>
      </div>
    );

  if (variant === "sm" && "cast_id" in entry)
    return (
      <div
        className="flex items-end w-32 p-3 bg-center bg-no-repeat bg-cover rounded-lg cursor-pointer h-44 md:h-52 md:w-36 "
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0) 0%, rgba(0,0,0,0.8) 85%), url('https://image.tmdb.org/t/p/w500${entry.profile_path}')`,
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
            backgroundImage: `linear-gradient(rgba(255,255,255,0) 0%, rgba(0,0,0,0.8) 85%), url('https://image.tmdb.org/t/p/w500${entry.poster_path}')`,
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
