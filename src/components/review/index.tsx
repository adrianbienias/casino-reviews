import Casino from "@/components/review/casino"
import Features from "@/components/review/features"
import Play from "@/components/review/play"
import Rating from "@/components/review/rating"
import { Review } from "@/types"

/**
 * Component for single review
 *
 * @example
 * <Review review={reviewDataObject} />
 */
export default function Review({ review }: { review: Review }) {
  return (
    <>
      <li
        key={review.brand_id}
        data-position={review.position}
        className="py-4"
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 place-items-center">
          <Casino review={review} />
          <Rating review={review} />
          <Features review={review} />
          <Play review={review} />
        </div>
      </li>
    </>
  )
}
