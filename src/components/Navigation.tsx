import { NavLink } from "react-router-dom";

import SearchInput from "./SearchInput";

function Navigation() {
  return (
    <>
      <SearchInput />

      <ul className="flex flex-col gap-6 text-xl md:gap-8 md:text-base md:flex-row xl:text-xl xl:gap-14">
        <li>
          <NavLink to="/shows">Shows</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
        <li className="relative">
          <NavLink to="/genres">Genres</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navigation;
