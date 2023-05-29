import ReviewsHeader from "@/components/reviews/reviews-header"
import ReviewsStatic from "@/components/reviews/reviews-static"
import { IncomingData } from "@/types"
import fakeData from "../../mocks/data.json"

/**
 * Component for home page (alternative, static version)
 */
export default function HomeStatic({ data }: { data: IncomingData }) {
  return (
    <>
      <main>
        <div className="max-w-screen-xl mx-auto p-2">
          <ReviewsHeader />
          <ReviewsStatic chunkId="575" data={data} />
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  // Fetching data from internal Next.js API is not available during the static build time
  // const response = await fetch(`/api/fake-data`)
  // const data = await response.json()
  const data = fakeData

  return {
    props: {
      data,
    },
  }
}
