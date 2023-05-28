/**
 * Component for error state of reviews
 */
export default function ReviewsError() {
  return (
    <>
      <div className="flex justify-center">
        <p className="bg-red-50 text-red-900 px-6 py-4 m-4">
          ❌ Failed to load reviews. Please refresh the page.
        </p>
      </div>
    </>
  )
}
