import Review from "@/components/review"
import matchers from "@testing-library/jest-dom/matchers"
import { cleanup, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, test } from "vitest"

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers)

afterEach(() => {
  // runs a cleanup after each test case (e.g. clearing jsdom)
  cleanup()
})

const reviewMock = {
  brand_id: "14164",
  position: 2,
  info: {
    rating: 4,
    bonus: "Free $25 bonus and 100% deposit up to $1000",
    features: [
      "Easy cash back options",
      "Good payment options",
      "Exclusive games",
    ],
  },
  terms_and_conditions:
    '21+ | <a href="https://generator.lorem-ipsum.info/terms-and-conditions">T&CS Apply</a> | Gamble Responsibly',
  logo: "https://picsum.photos/195/75",
  play_url: "https://example.com/amazing-offer/2134",
}

describe("Review component", () => {
  test("should render children components", () => {
    render(<Review review={reviewMock} />)

    const reviewLink = screen.getAllByRole("link")[0] as HTMLAnchorElement
    expect(reviewLink).toHaveTextContent("Review")
    expect(reviewLink.href).toContain("/14164")

    expect(screen.getByAltText("Logo")).toBeInTheDocument()

    expect(
      screen.getByText("Free $25 bonus and 100% deposit up to $1000")
    ).toBeInTheDocument()
    expect(screen.getByText("Easy cash back options")).toBeInTheDocument()
    expect(screen.getByText("Good payment options")).toBeInTheDocument()
    expect(screen.getByText("Exclusive games")).toBeInTheDocument()
  })
})
