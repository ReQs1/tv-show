import { Play, Plus } from "lucide-react";

function StatusButtons() {
  return (
    <>
      <button className="flex items-center justify-center gap-1 px-8 py-3 font-bold text-yellow-400 uppercase transition-all bg-transparent border-2 border-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black w-72">
        <Plus />
        Add To Watchlist
      </button>
      <button className="flex items-center justify-center gap-1 px-8 py-3 font-bold text-yellow-400 uppercase transition-all bg-transparent border-2 border-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black w-72">
        <Play size={22} />
        Watch Trailer
      </button>
    </>
  );
}

export default StatusButtons;
