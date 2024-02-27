import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import MoviePageLoader from "@/components/MoviePageLoader";

import { getMovieDetails, getShowDetails } from "@/services/themoviedbAPI";
import useScrollToTopOnMount from "@/hooks/useScrollToTopOnMount";
import useChangeDocTitle from "@/hooks/useChangeDocTitle";
import DetailsHeader from "@/components/DetailsHeader";
import EpisodesAccordion from "@/components/EpisodesAccordion";

function MoviePage() {
  const { type, id = "" } = useParams<{ type: "movie" | "tv"; id: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ["movieDetails", id, type],
    queryFn: () => {
      if (id && type === "movie") return getMovieDetails(id);
      else if (id && type === "tv") return getShowDetails(id);
    },
    staleTime: Infinity,
  });

  console.log(data);

  useChangeDocTitle(data);
  useScrollToTopOnMount();

  if (isLoading && type) return <MoviePageLoader type={type} />;

  const { seasons } = data;

  if (error instanceof Error)
    return (
      <div className="flex items-center justify-center">
        <p>{error.message}</p>
      </div>
    );

  return (
    <>
      <DetailsHeader data={data} />

      {seasons && seasons.length > 0 && (
        <div>
          <EpisodesAccordion
            title="Season 1"
            data={data["season/1"].episodes}
            vartiant="md"
            className="mt-16"
            defaultValue={true}
          />
          {data["season/2"] && (
            <EpisodesAccordion
              title="Season 2"
              data={data["season/2"].episodes}
              vartiant="md"
              className="mt-16"
              defaultValue={false}
            />
          )}
          {data["season/3"] && (
            <EpisodesAccordion
              title="Season 3"
              data={data["season/3"].episodes}
              vartiant="md"
              className="mt-16"
              defaultValue={false}
            />
          )}
        </div>
      )}
    </>
  );
}

export default MoviePage;
