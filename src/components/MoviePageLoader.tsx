import LoadingCarousel from "./LoadingCarousel";
import { Skeleton } from "./skeleton";

type Props = {
  type: "movie" | "tv";
};

function MoviePageLoader({ type }: Props) {
  return (
    <div className="pb-10 overflow-hidden bg-gray-50">
      {/* main part */}
      <Skeleton className="w-full h-[900px] sm:h-[440px]" />

      {/* episodes part */}
      {type === "tv" && (
        <div className="mt-20">
          <LoadingCarousel kind="showpage" />
        </div>
      )}

      {/* cast part */}
      <div className="mt-28">
        <LoadingCarousel kind="cast" />
      </div>

      {/* images part */}
      <div className="mt-32">
        <Skeleton className="w-full m-auto h-96 md:w-2/3 lg:w-5/12 " />
        <div className="flex justify-center gap-3 mt-6 overflow-hidden md:gap-5">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <Skeleton
                key={i}
                className="w-28 h-28 md:w-24 md:h-24 aspect-square"
              />
            ))}
        </div>
      </div>

      <div className="pl-10 mt-28">
        <Skeleton className="w-40 h-[35px] mb-10 md:w-60 md:h-[45px]" />
        <div className="flex flex-wrap gap-10 md:gap-20">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex flex-col gap-4">
                <Skeleton className="w-32 h-10 " />
                <Skeleton className="h-20 w-80 md:w-96" />
              </div>
            ))}
        </div>
      </div>

      <div className="pl-10 mt-28">
        <Skeleton className="w-48 h-12 md:w-60" />
        <div className="flex flex-wrap gap-6 mt-12 md:gap-8">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Skeleton
                key={i}
                className="w-12 h-12 md:w-16 md:h-16 aspect-square"
              />
            ))}
        </div>
      </div>

      <div className="mt-28">
        <LoadingCarousel kind="showpage" />
      </div>
    </div>
  );
}

export default MoviePageLoader;
