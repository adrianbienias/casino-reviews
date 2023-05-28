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
