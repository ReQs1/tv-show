import { formatTime } from "@/lib/utils";

type Props = {
  runtime?: number;
  number_of_seasons?: number;
};

function RuntimeAndSeasonsComponent(props: Props) {
  if (props.runtime)
    return (
      <p className="mt-4 text-base md:mt-2">
        Runtime: {formatTime(props.runtime)}
      </p>
    );

  if (props.number_of_seasons)
    return (
      <p className="mt-4 text-lg md:mt-2">
        {props.number_of_seasons === 1
          ? `${props.number_of_seasons} season`
          : `${props.number_of_seasons} seasons`}
      </p>
    );
}

export default RuntimeAndSeasonsComponent;
