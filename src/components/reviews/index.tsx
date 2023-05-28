import Review from "@/components/review"
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

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  if (!reviews) return <div>No reviews</div>

  const lang = `${data.language}-${data.country}`
  const key = data.hub_toplists_order
  const reviewsChunk = reviews[chunkId]
  reviewsChunk.sort(comparePositions)

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-2">
        <header className="bg-yellow-500 text-yellow-950 hidden lg:block">
          <div className="grid gap-8 grid-cols-4 place-items-center p-3">
            <h2>Casino</h2>
            <h2>Bonus</h2>
            <h2>Features</h2>
            <h2>Play</h2>
          </div>
        </header>

        <ul lang={lang} data-key={key} className="divide-y-2 divide-gray-300">
          {reviewsChunk.map((review) => (
            <Review key={review.brand_id} review={review} />
          ))}
        </ul>
      </div>
    </>
  )
}
