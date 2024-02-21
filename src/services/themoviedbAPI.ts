import { GenresType } from "@/lib/types";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`,
  },
};

export async function getTrendingMovies() {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
      options
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getNowPlayingMovies() {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getTrendingShows() {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/trending/tv/week?language=en-US",
      options
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getAiringShows() {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
      options
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getGenres(type: string) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/${type}/list?language=en-US`,
      options
    );
    const data = await res.json();
    return data.genres;
  } catch (error) {
    console.error(error);
  }
}

export async function getGenreById(id: string, type: string) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/${type}/list?language=en-US`,
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
      `https://api.themoviedb.org/3/discover/${type}?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${id}`,
      options
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieDetails(id: number, type: string) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}?language=en-US`,
      options
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
