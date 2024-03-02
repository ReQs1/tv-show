import { fullMovieDetails, fullShowDetails } from "@/lib/types";
import StatusButtons from "./StatusButtons";

type Props = {
  data: fullMovieDetails | fullShowDetails;
};

function StatusTrailerComponent({ data }: Props) {
  const { popularity, status } = data;
  return (
    <div className="flex flex-col items-center mt-10 xl:mt-0 xl:ml-10">
      <div className="flex flex-col items-center gap-6 sm:flex-row xl:flex-col">
        <div className="w-72 sm:w-60 xl:w-72 px-4 py-3 space-y-2 flex flex-col justify-center items-center text-white bg-black rounded-md h-[108px]">
          <p>Status</p>
          <p className="text-lg font-bold">{status}</p>
        </div>

        {/* popularity */}

        <div className="w-72 sm:w-60 xl:w-72 px-4 py-3 space-y-2 flex items-center justify-center flex-col text-white bg-black rounded-md h-[108px]">
          <p>TheMovieDB Popularity</p>
          <p className="text-lg font-bold">{Math.floor(popularity)}</p>
        </div>
      </div>

      <div className="space-y-4 mt-14">
        <StatusButtons data={data} />
      </div>
    </div>
  );
}

export default StatusTrailerComponent;
