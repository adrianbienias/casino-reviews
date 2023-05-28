import { Review } from "@/types"
import Image from "next/image"
import Link from "next/link"

/**
 * Component for casino logo and review link
 */
export default function Casino({ review }: { review: Review }) {
  return (
    <>
      <div className="text-center">
        <Link
          href={`/${review.brand_id}`}
          className="text-sky-600 underline hover:no-underline"
        >
          <Image src={review.logo} alt="Logo" width={195} height={75} />

          <span>Review</span>
        </Link>
      </div>
    </>
  )
}
