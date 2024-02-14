import { type GenresType } from "@/lib/types";
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

const MotionLink = motion(Link);

function GenresList() {
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
    <div className="flex flex-col items-center py-8 md:px-6 md:pb-20 bg-gray-50 mt-28 2xl:px-80">
      <h2 className="text-3xl font-semibold">Genres</h2>
      <motion.div
        animate={{
          transition: {
            staggerChildren: 0.05,
          },
        }}
        className="flex flex-wrap justify-center gap-4 mt-12 lg:gap-6"
      >
        {mergedGenres?.map((genre: GenresType) => (
          <MotionLink
            to={`genres/${genre.id}?view=${genre.type}`}
            key={genre.id}
            className="px-4 py-2 text-white transition-colors bg-yellow-400 rounded-full cursor-pointer hover:bg-yellow-500"
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            {genre.name}
          </MotionLink>
        ))}
      </motion.div>
    </div>
  );
}

export default GenresList;
