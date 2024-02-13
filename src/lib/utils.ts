import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { GenresType } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const mergeGenres = (
  movieGenres: GenresType[] | undefined,
  tvShowGenres: GenresType[] | undefined
) => {
  if (!movieGenres || !tvShowGenres) return [];

  const mergedGenres: GenresType[] = [
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
