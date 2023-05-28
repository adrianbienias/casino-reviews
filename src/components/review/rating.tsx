import StarRating from "@/components/star-rating"
import { Review } from "@/types"

/**
 * Component for rating and bonus info
 */
export default function Rating({ review }: { review: Review }) {
  return (
    <>
      <div className="text-center ">
        <StarRating rating={review.info.rating} max={5} />
        <p className="mt-2">{review.info.bonus}</p>
      </div>
    </>
  )
}
