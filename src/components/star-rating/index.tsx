import StarFilled from "@/components/star-rating/star-filled"
import StarUnfilled from "@/components/star-rating/star-unfilled"
import { StarRatingProps } from "@/types"

/**
 * Component for star rating
 *
 * @example
 * <StarRating rating={4} max={5} />
 */
export default function StarRating({ rating, max }: StarRatingProps) {
  const stars = []
  for (let i = 0; i < max; i++) {
    if (i < rating) {
      stars.push(1)
    } else {
      stars.push(0)
    }
  }

  return (
    <>
      <div className="text-yellow-500 inline-flex">
        {stars.map((isFilled, index) =>
          isFilled ? <StarFilled key={index} /> : <StarUnfilled key={index} />
        )}
        <span className="sr-only">{rating} out of 5 stars</span>
      </div>
    </>
  )
}
