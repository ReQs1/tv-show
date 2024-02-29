import type { GenreType } from "@/lib/types";

const BASE_URL = "https://api.themoviedb.org";
const VERSION = "3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`,
  },
};

export async function getTrending(type: string) {
  try {
    const res = await fetch(
      `${BASE_URL}/${VERSION}/trending/${type}/week?language=en-US`,
      options
    );
    const data = await res.json();
    return data.results;
  } catch (e: any) {
    console.error(`Error fetching trending ${type} movies: ${e}`);
    throw new Error(e);
  }
}

export async function getNowPlayingMovies() {
  try {
    const res = await fetch(
      `${BASE_URL}/${VERSION}/movie/now_playing?language=en-US&page=1`,
      options
    );
    const data = await res.json();
    return data.results;
  } catch (e: any) {
    console.error(`Error fetching now playing movies: ${e}`);
    throw new Error(e);
  }
}

export async function getAiringShows() {
  try {
    const res = await fetch(
      `${BASE_URL}/${VERSION}/tv/airing_today?language=en-US&page=1`,
      options
    );
    const data = await res.json();
    return data.results;
  } catch (e: any) {
    console.error(`Error fetching airing shows: ${e}`);
    throw new Error(e);
  }
}

export async function getGenres(type: string) {
  try {
    const res = await fetch(
      `${BASE_URL}/${VERSION}/genre/${type}/list?language=en-US`,
      options
    );
    const data = await res.json();
    return data.genres;
  } catch (e: any) {
    console.error(`Error fetching ${type} genres: ${e}`);
    throw new Error(e);
  }
}

export async function getGenreById(id: string, type: string) {
  try {
    const res = await fetch(
      `${BASE_URL}/${VERSION}/genre/${type}/list?language=en-US`,
      options
    );

    const data = await res.json();

    const genre = data.genres.find((obj: GenreType) => {
      return String(obj.id) === id;
    });

    return genre;
  } catch (error) {
    console.error(`Error fetching ${type} genres: ${error}`);
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
  } catch (e: any) {
    console.error(`Error fetching genre movies: ${e}`);
    throw new Error(e);
  }
}

export async function getBasicMovieInfo(id: number, type: string) {
  try {
    const res = await fetch(
      `${BASE_URL}/${VERSION}/${type}/${id}?language=en-US`,
      options
    );
    const data = await res.json();
    return data;
  } catch (e: any) {
    console.error(`Error fetching movie details: ${e}`);
    throw new Error(e);
  }
}

export async function discoverMovies(type: string, page: number) {
  try {
    const res = await fetch(
      `${BASE_URL}/${VERSION}/discover/${type}?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
      options
    );
    const data = await res.json();
    return data;
  } catch (e: any) {
    console.error(`Error fetching discover movies: ${e}`);
    throw new Error(e);
  }
}

export async function getMovieDetails(id: string) {
  try {
    const res = await fetch(
      `${BASE_URL}/${VERSION}/movie/${id}?append_to_response=videos%2Cwatch%2Fproviders%2Csimilar%2Ccredits%2C&language=en-US`,
      options
    );
    const data = await res.json();
    return data;
  } catch (e: any) {
    console.error(`Error fetching movie details: ${e}`);
    throw new Error(e);
  }
}

export async function getShowDetails(id: string) {
  try {
    const res = await fetch(
      `${BASE_URL}/${VERSION}/tv/${id}?append_to_response=videos%2Cwatch%2Fproviders%2Csimilar%2Ccredits%2Cseason%2F1%2Cseason%2F2%2Cseason%2F3%2C&language=en-US`,
      options
    );
    const data = await res.json();
    return data;
  } catch (e: any) {
    console.error(`Error fetching show details: ${e}`);
    throw new Error(e);
  }
}
