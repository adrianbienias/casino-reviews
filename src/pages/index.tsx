import Review from "@/components/review"
import fakeData from "../../mocks/data.json"

const tempReviewData = fakeData.toplists[575][0]

export default function Home() {
  return (
    <>
      <ul>
        <Review review={tempReviewData} />
      </ul>
    </>
  )
}
