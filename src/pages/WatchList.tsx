import CarouselCard from "@/components/CarouselCard";
import { useWatchlist } from "@/context/watchListContext";
// import { MovieType, ShowType } from "@/lib/types";

function WatchList() {
  const { movies } = useWatchlist();
  console.log(movies);
  return (
    <div className="px-6 my-12 md:px-20 md:my-20">
      <div className="mb-12">
        <h1 className="text-3xl font-bold md:text-4xl">Your Watch List:</h1>
      </div>

      {movies.length === 0 && (
        <div className="flex items-center justify-center h-screen">
          <p>There are no movies in your watchlist</p>
        </div>
      )}

      {movies.length > 0 && (
        <div className="flex flex-wrap gap-6">
          {movies.map((entry: any) => (
            <CarouselCard
              key={entry.uniqueId}
              entry={entry}
              type={entry.uniqueId.replace("-", " ").split(" ").at(1)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default WatchList;
