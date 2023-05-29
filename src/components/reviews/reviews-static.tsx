import Review from "@/components/review"
import ReviewsEmpty from "@/components/reviews/reviews-empty"
import { comparePositions } from "@/libs/sorting"
import { IncomingData, Reviews, ReviewsProps } from "@/types"

/**
 * Component for list of reviews (alternative, static version)
 *
 * @example
 * <Reviews chunkId="575" data={incomingData} />
 */
export default function ReviewsStatic({
  chunkId,
  data,
}: ReviewsProps & { data: IncomingData }) {
  const reviews = data?.toplists as Reviews | undefined
  if (!reviews) return <ReviewsEmpty />

  const lang = `${data.language}-${data.country}`
  const key = data.key
  const reviewsChunk = reviews[chunkId]
  reviewsChunk.sort(comparePositions)

  return (
    <>
      <ul lang={lang} data-key={key} className="divide-y-2 divide-gray-300">
        {reviewsChunk.map((review) => (
          <Review key={review.brand_id} review={review} />
        ))}
      </ul>
    </>
  )
}
