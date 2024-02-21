import { useParams } from "react-router-dom";

function DiscoverPage() {
  const { type } = useParams();
  return <div className="px-6 my-12 md:px-20 md:my-20">Siema</div>;
}

export default DiscoverPage;
