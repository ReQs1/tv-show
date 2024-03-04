import { NavLink } from "react-router-dom";

import SearchInput from "./SearchInput";
import { Dispatch, SetStateAction } from "react";

type NavigationProps = {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
};

function NavLinks({ setIsOpen }: NavigationProps) {
  return (
    <>
      <SearchInput />
      <ul className="relative flex flex-col items-center gap-6 text-xl md:gap-8 xl:flex-row xl:text-xl xl:gap-14">
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
