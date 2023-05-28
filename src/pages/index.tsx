import Reviews from "@/components/reviews"
import ReviewsHeader from "@/components/reviews/reviews-header"

/**
 * Component for home page
 */
export default function Home() {
  return (
    <>
      <main>
        <div className="max-w-screen-xl mx-auto p-2">
          <ReviewsHeader />
          <Reviews chunkId="575" />
        </div>
      </main>
    </>
  )
}
