import StatusButtons from "./StatusButtons";

type Props = {
  popularity: number;
  status: string;
  variant: "mobile" | "desktop";
};

function StatusTrailerComponent({ popularity, status, variant }: Props) {
  if (variant === "mobile")
    return (
      // status
      <div className="flex flex-col items-center mt-10 xl:hidden">
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <div className="w-72 sm:w-60 px-4 py-3 space-y-2 flex flex-col justify-center items-center text-white bg-black rounded-md h-[108px]">
            <p>Status</p>
            <p className="text-lg font-bold">{status}</p>
          </div>

          {/* popularity */}

          <div className="w-72 sm:w-60 px-4 py-3 space-y-2 flex items-center justify-center flex-col text-white bg-black rounded-md h-[108px]">
            <p>TheMovieDB Popularity</p>
            <p className="text-lg font-bold">{Math.floor(popularity)}</p>
          </div>
        </div>

        <div className="space-y-4 mt-14">
          <StatusButtons />
        </div>
      </div>
    );

  if (variant === "desktop")
    return (
      <div className="hidden xl:block">
        <div className="flex flex-col items-center">
          <div className="py-3 space-y-1 text-center bg-black rounded-md w-72">
            <p className="text-xl">Status</p>
            <p className="text-2xl font-bold">{status}</p>
          </div>

          {/* popularity  */}

          <div className="py-3 mt-8 space-y-1 text-center bg-black rounded-md w-72">
            <p className="text-xl">TheMovieDB Popularity</p>
            <p className="text-2xl font-bold">{Math.floor(popularity)}</p>
          </div>

          <div className="mt-16 space-y-5 ">
            <StatusButtons />
          </div>
        </div>
      </div>
    );
}

export default StatusTrailerComponent;
