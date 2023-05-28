import { NextApiRequest, NextApiResponse } from "next"
import fakeData from "../../../mocks/data.json"

/**
 * API handler function for fake data
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(fakeData)
}
