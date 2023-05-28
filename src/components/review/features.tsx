import { Review } from "@/types"

/**
 * Component for features
 */
export default function Features({ review }: { review: Review }) {
  return (
    <>
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
    </>
  )
}
