function SearchInput() {
  return (
    <form className="flex items-center">
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
          id="search_input"
          type="text"
          className="py-1 text-xl bg-transparent outline-none placeholder:text-stone-600"
          placeholder="Search titles"
        />
      </div>
    </form>
  );
}

export default SearchInput;
