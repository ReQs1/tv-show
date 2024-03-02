import { fullMovieDetails, fullShowDetails } from "@/lib/types";
import { useContext, useState, createContext } from "react";

type Props = {
  children: React.ReactElement;
};

type WatchListContextType = {
  movies: (fullMovieDetails | fullShowDetails)[];
  onAddToWatchList: (
    data: fullMovieDetails | fullShowDetails,
    type: string
  ) => void;
  onRemoveFromWatchList: (
    data: fullMovieDetails | fullShowDetails,
    type: string
  ) => void;
};

const WatchListContext = createContext<WatchListContextType>({
  movies: [],
  onAddToWatchList: () => {},
  onRemoveFromWatchList: () => {},
});

function WatchListProvider({ children }: Props) {
  const [movies, setMovies] = useState(() => {
    const toWatchList = localStorage.getItem("toWatchList");
    return toWatchList ? JSON.parse(toWatchList) : [];
  });

  const onAddToWatchList = (
    data: fullMovieDetails | fullShowDetails,
    type: string
  ) => {
    const newMovies = [...movies, { ...data, uniqueId: `${data.id}-${type}` }];
    localStorage.setItem("toWatchList", JSON.stringify(newMovies));
    setMovies(newMovies);
  };

  const onRemoveFromWatchList = (
    data: fullMovieDetails | fullShowDetails,
    type: string
  ) => {
    const newMovies = movies.filter(
      (movie: fullMovieDetails | fullShowDetails) =>
        movie.uniqueId !== `${data.id}-${type}`
    );
    localStorage.setItem("toWatchList", JSON.stringify(newMovies));
    setMovies(newMovies);
  };

  return (
    <WatchListContext.Provider
      value={{ movies, onAddToWatchList, onRemoveFromWatchList }}
    >
      {children}
    </WatchListContext.Provider>
  );
}

function useWatchlist() {
  const context = useContext(WatchListContext);

  if (!context) {
    throw new Error("useWatchlist must be used within a WatchListProvider");
  }
  return context;
}

export { WatchListProvider, useWatchlist };
