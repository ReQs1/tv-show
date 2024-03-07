import { Dispatch, SetStateAction, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useQuery } from "react-query";

import SearchInput from "./SearchInput";
import { ChevronDown, ChevronUp } from "lucide-react";
import { getGenres } from "@/services/themoviedbAPI";
import { mergeGenres } from "@/lib/utils";
import { GenreType } from "@/lib/types";
import { useOutsideClick } from "@/hooks/useOutsideClick";

type NavigationProps = {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
};

function NavLinks({ setIsOpen }: NavigationProps) {
  const [isGenresOpen, setIsGenresOpen] = useState(false);
  const ref = useOutsideClick(() => setIsGenresOpen(false));

  const { data: movieGenres } = useQuery({
    queryKey: "movieGenres",
    queryFn: () => getGenres("movie"),
  });
  const { data: tvShowGenres } = useQuery({
    queryKey: "tvShowGenres",
    queryFn: () => getGenres("tv"),
  });

  const mergedGenres = mergeGenres(movieGenres, tvShowGenres);
  return (
    <>
      <SearchInput setIsOpen={setIsOpen} />
      <ul className="flex flex-col items-center gap-6 text-xl md:gap-8 xl:flex-row xl:text-xl xl:gap-14">
        <li className="relative flex items-center gap-1">
          Genres
          {isGenresOpen ? (
            <ChevronUp
              size={26}
              className="cursor-pointer"
              onClick={() => setIsGenresOpen((isOpen) => !isOpen)}
            />
          ) : (
            <ChevronDown
              size={26}
              className="cursor-pointer"
              onClick={() => setIsGenresOpen((isOpen) => !isOpen)}
            />
          )}
          <span className="sr-only">Genres Dropdown</span>
          {isGenresOpen && (
            <div
              ref={ref}
              className="rounded-md absolute top-[50px] bg-yellow-400 columns-2 left-1/2 -translate-x-1/2 w-screen px-2 py-4 space-y-2 sm:w-fit sm:columns-3 sm:px-8 sm:gap-12 z-50  md:columns-4"
            >
              {mergedGenres.map((genre: GenreType) => (
                <div
                  key={genre.id}
                  onClick={() => {
                    if (setIsOpen) setIsOpen(false);
                    setIsGenresOpen(false);
                  }}
                >
                  <Link to={`genres/${genre.id}?view=${genre.type}`}>
                    {genre.name}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </li>

        <li
          onClick={() => {
            if (setIsOpen) setIsOpen(false);
          }}
        >
          <NavLink to="/tv">Shows</NavLink>
          <span className="sr-only">Link to Tv Shows</span>
        </li>

        <li
          onClick={() => {
            if (setIsOpen) setIsOpen(false);
          }}
        >
          <NavLink to="/movie">Movies</NavLink>
          <span className="sr-only">Link to Movies</span>
        </li>

        <li
          onClick={() => {
            if (setIsOpen) setIsOpen(false);
          }}
        >
          <NavLink to="/watchlist">Watch List</NavLink>
          <span className="sr-only">Link to Watch List</span>
        </li>
      </ul>
    </>
  );
}

export default NavLinks;
