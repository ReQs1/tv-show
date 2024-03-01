import { type GenreType } from "@/lib/types";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { getGenres } from "@/services/themoviedbAPI";

import { mergeGenres } from "@/lib/utils";

const variants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function GenresList() {
  const { data: movieGenres, error: moviesError } = useQuery({
    queryKey: "movieGenres",
    queryFn: () => getGenres("movie"),
  });
  const { data: tvShowGenres, error: showsError } = useQuery({
    queryKey: "tvShowGenres",
    queryFn: () => getGenres("tv"),
  });

  const mergedGenres = mergeGenres(movieGenres, tvShowGenres);
  return (
    <div className="flex flex-col items-center px-6 py-8 md:pb-20 bg-gray-50 mt-28 2xl:px-80">
      <h2 className="text-3xl font-semibold">Genres</h2>
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="flex flex-wrap justify-center gap-4 mt-12 lg:gap-6"
      >
        {moviesError || showsError ? (
          <p>Couldn't load genres</p>
        ) : (
          mergedGenres.map((genre: GenreType) => (
            <Link
              to={`genres/${genre.id}?view=${genre.type}`}
              key={genre.id}
              className="px-4 py-2 text-white transition-colors bg-yellow-400 rounded-full cursor-pointer hover:bg-yellow-500"
            >
              {genre.name}
            </Link>
          ))
        )}
      </motion.div>
    </div>
  );
}

export default GenresList;
