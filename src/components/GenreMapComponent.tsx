import { GenreType } from "@/lib/types";

type Props = {
  genres: GenreType[];
};

function GenreMapComponent({ genres }: Props) {
  return (
    <p className="text-lg">
      {genres.map((genre: GenreType) => genre.name).join(", ")}
    </p>
  );
}

export default GenreMapComponent;
