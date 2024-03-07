import { MovieType, ShowType } from "@/lib/types";
import { useContext, useState, createContext } from "react";

type Props = {
  children: React.ReactElement;
};

type WatchListContextType = {
  movies: (ShowType | MovieType)[];
  onAddToWatchList: (data: ShowType | MovieType, type: string) => void;
  onRemoveFromWatchList: (
    data: ShowType | MovieType,
    type: string | undefined
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

  const onAddToWatchList = (data: ShowType | MovieType, type: string) => {
    const newMovies = [...movies, { ...data, uniqueId: `${data.id}-${type}` }];
    localStorage.setItem("toWatchList", JSON.stringify(newMovies));
    setMovies(newMovies);
  };

  const onRemoveFromWatchList = (
    data: ShowType | MovieType,
    type: string | undefined
  ) => {
    if (type === undefined) return;
    const newMovies = movies.filter(
      (movie: ShowType | MovieType) => movie.uniqueId !== `${data.id}-${type}`
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
