import { NavLink } from "react-router-dom";

import SearchInput from "./SearchInput";
import { Dispatch, SetStateAction } from "react";

type NavigationProps = {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
};

function Navigation({ setIsOpen }: NavigationProps) {
  return (
    <>
      <SearchInput />
      <ul className="relative flex flex-col gap-6 text-xl md:gap-8 md:text-base md:flex-row xl:text-xl xl:gap-14">
        <li
          onClick={() => {
            if (setIsOpen) setIsOpen(false);
          }}
        >
          <NavLink
            to="/tv"
            onClick={() => {
              if (setIsOpen) setIsOpen(false);
            }}
          >
            Shows
          </NavLink>
          <span className="sr-only">Link to Tv Shows</span>
        </li>
        <li>
          <NavLink
            to="/movie"
            onClick={() => {
              if (setIsOpen) setIsOpen(false);
            }}
          >
            Movies
          </NavLink>
          <span className="sr-only">Link to Movies</span>
        </li>
      </ul>
    </>
  );
}

export default Navigation;
