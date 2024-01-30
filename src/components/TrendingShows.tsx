import { useQuery } from "react-query";
import { getTrendingShows } from "../services/themoviedbAPI";

function TrendingShows() {
  const { data: trendingShows } = useQuery("trendingShows", getTrendingShows);

  return <div>Lorem</div>;
}

export default TrendingShows;
