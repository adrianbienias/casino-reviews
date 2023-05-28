import { PositionParam } from "@/types"

/**
 * Callback function to Array.prototype.sort() for handling sorting by position number
 */
export function comparePositions(a: PositionParam, b: PositionParam) {
  if (a.position < b.position) {
    return -1
  }
  if (a.position > b.position) {
    return 1
  }

  return 0
}
