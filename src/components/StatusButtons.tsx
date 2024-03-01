import { VideoType } from "@/lib/types";
import { Play, Plus } from "lucide-react";
type Props = {
  videos: VideoType[];
};

function StatusButtons({ videos }: Props) {
  const video = videos.find((video) => video.name === "Official Trailer");
  const officialTrailer = video ? video.key : undefined;

  return (
    <>
      <button className="flex items-center justify-center gap-1 px-8 py-3 font-bold text-yellow-400 uppercase transition-all bg-transparent border-2 border-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black w-72">
        <Plus />
        Add To Watchlist
      </button>
      <a
        href={
          officialTrailer &&
          `https://www.youtube.com/watch?v=${officialTrailer}`
        }
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1 px-8 py-3 font-bold text-yellow-400 uppercase transition-all bg-transparent border-2 border-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black w-72"
      >
        <Play size={22} />
        {officialTrailer ? "Watch Trailer" : "No Trailer Available"}
      </a>
    </>
  );
}

export default StatusButtons;
