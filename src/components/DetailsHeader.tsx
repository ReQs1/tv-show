import { truncate } from "@/lib/utils";
import StarRatingComponent from "./StarRatingComponent";
import GenreMapComponent from "./GenreMapComponent";
import RuntimeAndSeasonsComponent from "./RuntimeAndSeasonsComponent";
import OverviewComponent from "./OverviewComponent";
import StatusTrailerComponent from "./StatusTrailerComponent";

function DetailsHeader({ data }: any) {
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
    vote_average,
    tagline,
  } = data;

  return (
    <header
      className="px-4 py-8 text-white bg-[top_center] bg-no-repeat bg-cover shadow-lg sm:px-8 md:px-10 xl:px-12 md:py-12 lg:py-16 xl:py-20"
      style={{
        backgroundImage: `linear-gradient(180deg, #0000004d 0%, #000000 100%), url('https://image.tmdb.org/t/p/original${backdrop_path}')`,
      }}
    >
      {/* poster */}
      <div className="flex flex-col xl:flex-row">
        <div className="flex flex-1 gap-4 md:gap-10 sm:gap-6">
          <div className="max-w-40 sm:max-w-48 lg:max-w-56 xl:max-w-72">
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

          <div className="flex flex-col flex-1 gap-2">
            <h1 className="text-2xl font-bold md:text-3xl">{name || title}</h1>

            <p className="mt-1 mb-4 ">{tagline}</p>

            <StarRatingComponent
              vote_average={vote_average}
              className="flex items-center gap-1"
            />

            <GenreMapComponent genres={genres} />

            <RuntimeAndSeasonsComponent runtime={runtime} />

            <RuntimeAndSeasonsComponent number_of_seasons={number_of_seasons} />

            <OverviewComponent overview={overview} variant="desktop" />
          </div>
        </div>

        <OverviewComponent overview={overview} variant="mobile" />

        <StatusTrailerComponent popularity={popularity} status={status} />
      </div>
    </header>
  );
}

export default DetailsHeader;
