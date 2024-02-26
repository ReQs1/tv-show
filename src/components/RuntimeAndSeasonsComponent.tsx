import { formatTime } from "@/lib/utils";

type Props = {
  runtime?: number;
  number_of_seasons?: number;
};

function RuntimeAndSeasonsComponent(props: Props) {
  if (props.runtime)
    return <p className="text-base">Runtime: {formatTime(props.runtime)}</p>;
  if (props.number_of_seasons)
    return (
      <p className="text-lg">
        {props.number_of_seasons === 1
          ? `${props.number_of_seasons} season`
          : `${props.number_of_seasons} seasons`}
      </p>
    );
}

export default RuntimeAndSeasonsComponent;
