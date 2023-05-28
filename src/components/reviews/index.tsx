import Review from "@/components/review"
import ReviewsEmpty from "@/components/reviews/reviews-empty"
import ReviewsError from "@/components/reviews/reviews-error"
import ReviewsHeader from "@/components/reviews/reviews-header"
import ReviewsMock from "@/components/reviews/reviews-mock"
import { useFakeData } from "@/components/use-fake-data"
import { comparePositions } from "@/libs/sorting"
import { Reviews, ReviewsProps } from "@/types"

/**
 * Component for list of reviews
 *
 * @example
 * <Reviews chunkId="575" />
 */
export default function Reviews({ chunkId }: ReviewsProps) {
  const { data, isLoading, isError } = useFakeData()
  const reviews = data?.toplists as Reviews | undefined

  if (isLoading) return <ReviewsMock />
  if (isError) return <ReviewsError />
  if (!reviews) return <ReviewsEmpty />

  const lang = `${data.language}-${data.country}`
  const key = data.hub_toplists_order
  const reviewsChunk = reviews[chunkId]
  reviewsChunk.sort(comparePositions)

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-2">
        <ReviewsHeader />

        <ul lang={lang} data-key={key} className="divide-y-2 divide-gray-300">
          {reviewsChunk.map((review) => (
            <Review key={review.brand_id} review={review} />
          ))}
        </ul>
      </div>
    </>
  )
}
