import { useQuery } from "react-query";

import { getGenres } from "@/services/themoviedbAPI";

import { Link } from "react-router-dom";

type GenresType = {
  id: number;
  name: string;
  type: string;
};

const mergeGenres = (
  movieGenres: GenresType[] | undefined,
  tvShowGenres: GenresType[] | undefined
) => {
  if (!movieGenres || !tvShowGenres) return [];

  const mergedGenres = [
    ...movieGenres.map((genre) => ({ ...genre, type: "movie" })),
    ...tvShowGenres
      .map((genre) => ({ ...genre, type: "tv" }))
      .filter(
        (tvGenre) =>
          !movieGenres.find((movieGenre) => movieGenre.name === tvGenre.name)
      ),
  ];
  return mergedGenres;
};

function GenresList() {
  const { data: movieGenres } = useQuery({
    queryKey: "movieGenres",
    queryFn: () => getGenres("movie"),
  });
  const { data: tvShowGenres } = useQuery({
    queryKey: "tvShowGenres",
    queryFn: () => getGenres("tv"),
  });

  const mergedGenres = mergeGenres(movieGenres, tvShowGenres);
  console.log(mergedGenres);
  return (
    <div className="flex flex-col items-center py-6 md:px-6 md:py-10 bg-gray-50 mt-28 2xl:px-80">
      <h2 className="text-3xl font-semibold">Genres</h2>
      <div className="flex flex-wrap justify-center gap-4 mt-12 lg:gap-6">
        {mergedGenres?.map((genre: GenresType) => (
          <Link
            to={`genres/${genre.id}?view=${genre.type}`}
            key={genre.id}
            className="px-4 py-2 text-white transition-all bg-yellow-400 rounded-full cursor-pointer hover:bg-yellow-500"
          >
            {genre.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default GenresList;
