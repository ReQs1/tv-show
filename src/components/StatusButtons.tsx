import { useWatchlist } from "@/context/watchListContext";
import { VideoType, fullMovieDetails, fullShowDetails } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Minus, Play, Plus } from "lucide-react";
import { useParams } from "react-router-dom";
type Props = {
  data: fullMovieDetails | fullShowDetails;
};

const btnClasses =
  "flex items-center justify-center px-8 py-3 font-bold text-yellow-400 uppercase transition-all bg-transparent border-2 border-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black w-72";

function StatusButtons({ data }: Props) {
  const { type = "" } = useParams();
  const { videos } = data;
  const video = videos.results.find(
    (video: VideoType) => video.name === "Official Trailer"
  );
  const officialTrailer = video ? video.key : undefined;

  const { movies, onRemoveFromWatchList, onAddToWatchList } = useWatchlist();

  const isStored =
    movies.find(
      (movie: fullMovieDetails | fullShowDetails) =>
        movie.uniqueId === `${data.id}-${type}`
    ) !== undefined;

  return (
    <>
      <button
        onClick={() =>
          isStored
            ? onRemoveFromWatchList(data, type)
            : onAddToWatchList(data, type)
        }
        className={cn(btnClasses, "text-base px-4 gap-2")}
      >
        {isStored ? <Minus /> : <Plus />}
        {isStored ? "Remove from Watchlist" : "Add To Watchlist"}
      </button>
      <a
        href={
          officialTrailer &&
          `https://www.youtube.com/watch?v=${officialTrailer}`
        }
        target="_blank"
        rel="noopener noreferrer"
        className={cn(btnClasses, "gap-2", {
          ["opacity-50 pointer-events-none"]: !officialTrailer,
        })}
      >
        <Play size={22} />
        {officialTrailer ? "Watch Trailer" : "No Trailer Available"}
      </a>
    </>
  );
}

export default StatusButtons;
