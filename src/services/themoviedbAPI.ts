import type {
  GenresType,
  MovieDetails,
  MovieType,
  ShowType,
} from "@/lib/types";

const BASE_URL = "https://api.themoviedb.org";
const VERSION = "3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`,
  },
};

export async function getTrending(
  type: string
): Promise<ShowType[] | MovieType[]> {
  try {
    const res = await fetch(
      `${BASE_URL}/${VERSION}/trending/${type}/week?language=en-US`,
      options
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getNowPlayingMovies(): Promise<ShowType[] | MovieType[]> {
  try {
    const res = await fetch(
      `${BASE_URL}/${VERSION}/movie/now_playing?language=en-US&page=1`,
      options
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getAiringShows(): Promise<ShowType[] | MovieType[]> {
  try {
    const res = await fetch(
      `${BASE_URL}/${VERSION}/tv/airing_today?language=en-US&page=1`,
      options
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getGenres(type: string): Promise<GenresType[]> {
  try {
    const res = await fetch(
      `${BASE_URL}/${VERSION}/genre/${type}/list?language=en-US`,
      options
    );
    const data = await res.json();
    return data.genres;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getGenreById(
  id: string,
  type: string
): Promise<GenresType | undefined> {
  try {
    const res = await fetch(
      `${BASE_URL}/${VERSION}/genre/${type}/list?language=en-US`,
      options
    );

    const data = await res.json();

    const genre = data.genres.find((obj: GenresType) => {
      return String(obj.id) === id;
    });

    return genre;
  } catch (error) {
    console.error(error);
  }
}

export async function getGenreMovies(id: string, type: string, page: number) {
  try {
    const res = await fetch(
      `${BASE_URL}/${VERSION}/discover/${type}?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${id}`,
      options
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieDetails(
  id: number,
  type: string
): Promise<MovieDetails | undefined> {
  try {
    const res = await fetch(
      `${BASE_URL}/${VERSION}/${type}/${id}?language=en-US`,
      options
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
