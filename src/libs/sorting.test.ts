import { describe, expect, test } from "vitest"
import { comparePositions } from "./sorting"

describe("comparePositions()", () => {
  test("should return proper order", () => {
    expect(comparePositions({ position: 1 }, { position: 2 })).toBe(-1)
    expect(comparePositions({ position: 2 }, { position: 1 })).toBe(1)
    expect(comparePositions({ position: 1 }, { position: 1 })).toBe(0)

    expect(comparePositions({ position: 42 }, { position: 831 })).toBe(-1)
    expect(comparePositions({ position: 95 }, { position: 0 })).toBe(1)
    expect(comparePositions({ position: 56 }, { position: 56 })).toBe(0)
  })
})
