import { NavLink } from "react-router-dom";

import SearchInput from "./SearchInput";

function Navigation() {
  return (
    <>
      <SearchInput />

      <ul className="flex flex-col gap-6 text-xl md:gap-8 md:text-base md:flex-row xl:text-xl xl:gap-14">
        <li>
          <NavLink to="/shows">Shows</NavLink>
          <span className="sr-only">Link to Tv Shows</span>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
          <span className="sr-only">Link to Movies</span>
        </li>
        <li className="relative">
          <NavLink to="/genres">Genres</NavLink>
          <span className="sr-only">Link to Genres</span>
        </li>
      </ul>
    </>
  );
}

export default Navigation;
