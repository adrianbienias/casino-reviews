/**
 * Component for empty state of reviews
 */
export default function ReviewsEmpty() {
  return (
    <>
      <div className="flex justify-center">
        <p className="bg-gray-100 text-gray-900 px-6 py-4 m-4">
          ℹ️ No reviews so far. Please come back later.
        </p>
      </div>
    </>
  )
}
