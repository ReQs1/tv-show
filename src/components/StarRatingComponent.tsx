import { Star } from "lucide-react";

type Props = {
  vote_average: number;
  className: string;
};

function StarRatingComponent({ vote_average, className }: Props) {
  return (
    <div className={className}>
      {Array(5)
        .fill(0)
        .map((_, i) => {
          if (i + 1 <= Math.ceil(vote_average / 2))
            return (
              <Star
                className="w-6 h-6 sm:w-7 sm:h-7"
                key={i}
                fill="#ffc800"
                color="#ffc800"
              />
            );

          return (
            <Star
              className="w-6 h-6 sm:w-7 sm:h-7"
              key={i}
              color="#ffc800"
              strokeWidth={1.5}
            />
          );
        })}
    </div>
  );
}

export default StarRatingComponent;
