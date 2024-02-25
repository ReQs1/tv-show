import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { GenreType, MovieType, ShowType } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const mergeGenres = (
  movieGenres: GenreType[] | undefined,
  tvShowGenres: GenreType[] | undefined
) => {
  if (!movieGenres || !tvShowGenres) return [];

  const mergedGenres: GenreType[] = [
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

export function truncate(str: string, n = 50) {
  return str?.length > n ? str.slice(0, n - 1) + "..." : str;
}

export function formatTime(minutes: number) {
  if (isNaN(minutes) || minutes < 0) {
    return "Invalid input";
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  let formattedTime = "";

  if (hours > 0) {
    formattedTime += hours + "h";
  }

  if (remainingMinutes > 0) {
    if (formattedTime !== "") {
      formattedTime += " ";
    }
    formattedTime += remainingMinutes + "min";
  }

  return formattedTime !== "" ? formattedTime : "0min";
}

export function getUniqueData(data: any = []) {
  if (data.length === 0) return [];
  const uniqueData = data.pages.reduce((acc: any, page: any) => {
    if (page) {
      const uniqueMovies = page.results.filter(
        (movie: MovieType | ShowType) => {
          return !acc.find(
            (accMovie: MovieType | ShowType) => accMovie.id === movie.id
          );
        }
      );
      return [...acc, ...uniqueMovies];
    }
    return acc;
  }, []);
  return uniqueData;
}
