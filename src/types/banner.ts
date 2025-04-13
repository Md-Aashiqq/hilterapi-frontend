export interface Banner {
  id: number
  heading: string
  subHeading: string
  imageUrl: string
  featured?: boolean
}

export interface BannersResponse {
  banners: Banner[]
}
