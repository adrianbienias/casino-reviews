export type IncomingData = {
  key: string
  toplists: Reviews
  autoload: boolean
  language: string
  country: string
}

export type Reviews = {
  [key: string]: Review[]
}

export type Review = {
  brand_id: string
  position: number
  info: {
    rating: number
    bonus: string
    features: string[]
  }
  terms_and_conditions: string
  logo: string
  play_url: string
}

export type StarRatingProps = {
  rating: number
  max: number
}

export type ReviewsProps = {
  chunkId: string
}

export type PositionParam = {
  position: number
}
