import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "HitlerAbi",
  description:
    "A performant frontend ecommerce starter template.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  console.log("collections", collections)
  return (
    <>
      <Hero />
      <div className="max-w-[1440px] mx-auto px-4 py-12 overflow-hidden">
        <ul className="">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}
