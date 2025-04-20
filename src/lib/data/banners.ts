"use server"

import { sdk } from "@lib/config"
import { getCacheOptions } from "./cookies"

export type Banner = {
  id: string
  heading: string
  subHeading: string
  url: string
  featured?: boolean
}

export type BannerResponse = {
  banners: Banner[]
  count: number
}

export const retrieveBanner = async (id: string) => {
  const next = {
    ...(await getCacheOptions("banners")),
  }

  return sdk.client
    .fetch<{ banner: Banner }>(
      `/store/banners/${id}`,
      {
        next,
      }
    )
    .then(({ banner }) => banner)
}

export const listBanners = async (
  queryParams: Record<string, string> = {}
): Promise<any> => {
  const next = {
    ...(await getCacheOptions("banners")),
  }

  queryParams.limit = queryParams.limit || "100"
  queryParams.offset = queryParams.offset || "0"

  return sdk.client
    .fetch<any>(
      "/store/banners",
      {
        query: queryParams,
        next,
        // cache: "force-cache",
      }
    )
    .then((response) => {
      console.log("banners", response)
      return {
        banners: response.banners,
        count: response.banners.length,
      }
    })
}
