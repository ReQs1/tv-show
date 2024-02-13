import { getGenreById } from "@/services/themoviedbAPI";
import { useQuery } from "react-query";
import { useParams, useSearchParams } from "react-router-dom";

function GenrePage() {
  const [searchParams] = useSearchParams();
  const { genreId = "" } = useParams();
  const type = searchParams.get("view") || "";

  const { data: genre } = useQuery({
    queryKey: "genres",
    queryFn: () => getGenreById(genreId, type),
  });

  console.log(genre);

  return <h1>siema</h1>;
}

export default GenrePage;
