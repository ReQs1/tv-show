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
