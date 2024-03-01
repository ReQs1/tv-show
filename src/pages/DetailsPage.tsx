import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { getMovieDetails, getShowDetails } from "@/services/themoviedbAPI";
import useScrollToTopOnMount from "@/hooks/useScrollToTopOnMount";
import useChangeDocTitle from "@/hooks/useChangeDocTitle";
import DetailsHeader from "@/components/DetailsHeader";
import EpisodesComponent from "@/components/EpisodesComponent";
import GenericCarousel from "@/components/GenericCarousel";

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

  useChangeDocTitle(data);
  useScrollToTopOnMount();

  if (isLoading && type)
    return (
      <div className="flex items-center justify-center h-full">
        <div className="w-12 h-12 border-t-2 border-b-2 border-yellow-400 rounded-full animate-spin" />
      </div>
    );

  if (error instanceof Error)
    return (
      <div className="flex items-center justify-center">
        <p>{error.message}</p>
      </div>
    );

  const { seasons, credits, similar } = data;
  return (
    <>
      <DetailsHeader data={data} />

      {seasons && seasons.length > 0 && <EpisodesComponent data={data} />}

      {credits.cast.length > 0 && (
        <GenericCarousel
          data={credits.cast}
          title="Cast"
          variant="sm"
          hasArrows={false}
          className={seasons ? "" : "mt-16"}
        />
      )}

      {similar.results && (
        <GenericCarousel
          data={similar.results}
          title="People also watched"
          variant="md"
          hasArrows={true}
          type={type}
        />
      )}
    </>
  );
}

export default MoviePage;
