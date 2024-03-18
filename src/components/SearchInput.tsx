import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
};

function SearchInput({ setIsOpen }: Props) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) return;

    setQuery("");
    setIsOpen && setIsOpen(false);
    navigate(`/search/${query}`);
  };

  return (
    <form className="flex items-center" onSubmit={onSubmit}>
      <div className="flex items-center gap-4 border-b border-black ">
        <label htmlFor="search_input" className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </label>
        <input
          autoComplete="off"
          id="search_input"
          type="text"
          className="py-1 text-xl bg-transparent outline-none placeholder:text-stone-600"
          placeholder="Search titles"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </form>
  );
}

export default SearchInput;
