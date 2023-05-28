import { Review } from "@/types"

/**
 * Component for play button and terms and conditions
 */
export default function Play({ review }: { review: Review }) {
  return (
    <>
      <div className="text-center">
        <a
          href={review.play_url}
          className="inline-block font-semibold text-lg bg-green-700 hover:scale-105 text-white px-10 py-4 uppercase underline hover:no-underline rounded-lg"
        >
          Play now
        </a>

        <p
          className="text-sm mt-2 [&>a]:text-red-800 [&>a]:underline [&>a]:hover:no-underline"
          dangerouslySetInnerHTML={{
            __html: review.terms_and_conditions,
          }}
        />
      </div>
    </>
  )
}
