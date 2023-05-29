import Review from "@/components/review"
import ReviewsEmpty from "@/components/reviews/reviews-empty"
import ReviewsError from "@/components/reviews/reviews-error"
import ReviewsMock from "@/components/reviews/reviews-mock"
import { useFakeData } from "@/components/use-fake-data"
import { comparePositions } from "@/libs/sorting"
import { IncomingData, Reviews, ReviewsProps } from "@/types"

/**
 * Component for list of reviews
 *
 * @example
 * <Reviews chunkId="575" />
 */
export default function Reviews({ chunkId }: ReviewsProps) {
  const { data, isLoading, isError } = useFakeData<IncomingData>()

  if (isLoading) return <ReviewsMock />
  if (isError) return <ReviewsError />
  if (!data || !data.toplists) return <ReviewsEmpty />

  const reviews = data.toplists
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
