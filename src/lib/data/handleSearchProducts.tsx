"use server"

import { sdk } from "@lib/config"
import { getCacheOptions } from "./cookies"

export type Product = {
  id: string
  title: string
  description: string
  price: number
  // Add other product fields if needed
}

export type ProductResponse = {
  products: Product[]
  count: number
}

export const handleSearchProducts = async (
  query: string
): Promise<ProductResponse> => {
  const next = {
    ...(await getCacheOptions("products")),
  }

  if (!query.trim()) {
    return {
      products: [],
      count: 0,
    }
  }

  return sdk.client
    .fetch<any>(
      `/store/products`, // ✅ Correct endpoint
      {
        query: {
          q: query, // ✅ Pass search term
        },
        next,
      }
    )
    .then((response) => {
      console.log("Searched products:", response)
      return {
        products: response.products || [],
        count: response.products?.length || 0,
      }
    })
}
