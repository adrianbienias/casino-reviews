import { Review } from "@/types"

/**
 * Component for rating and bonus info
 */
export default function Rating({ review }: { review: Review }) {
  return (
    <>
      <div className="text-center ">
        <p>Rating: {review.info.rating} out of 5 stars</p>
        <p className="mt-2">{review.info.bonus}</p>
      </div>
    </>
  )
}
