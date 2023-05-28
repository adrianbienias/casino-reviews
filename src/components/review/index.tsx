import { Review } from "@/types"
import Image from "next/image"
import Link from "next/link"

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
          <div className="text-center">
            <Link
              href={`/${review.brand_id}`}
              className="text-sky-600 underline hover:no-underline"
            >
              <Image src={review.logo} alt="Logo" width={195} height={75} />

              <span>Review</span>
            </Link>
          </div>

          <div className="text-center ">
            <p>Rating: {review.info.rating} out of 5 stars</p>
            <p className="mt-2">{review.info.bonus}</p>
          </div>

          <ul>
            {review.info.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  className="rotate-45"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m.5 11H11V7h1.5v6Z"
                  />
                </svg>

                <p className="ml-1">{feature}</p>
              </li>
            ))}
          </ul>

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
        </div>
      </li>
    </>
  )
}
