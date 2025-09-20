// import { listProducts } from "@lib/data/products"
// import { HttpTypes } from "@medusajs/types"
// import { Text } from "@medusajs/ui"

// import InteractiveLink from "@modules/common/components/interactive-link"
// import ProductPreview from "@modules/products/components/product-preview"

// export default async function ProductRail({
//   collection,
//   region,
// }: {
//   collection: HttpTypes.StoreCollection
//   region: HttpTypes.StoreRegion
// }) {
//   const {
//     response: { products: pricedProducts },
//   } = await listProducts({
//     regionId: region.id,
//     queryParams: {
//       collection_id: collection.id,
//       fields: "*variants.calculated_price",
//     },
//   })

//   if (!pricedProducts) {
//     return null
//   }
 
//   return (
//     <div className="py-8">
//       <div className="flex justify-between items-center mb-6">
//         <Text className="text-xl font-medium">{collection.title}</Text>
//         <InteractiveLink href={`/collections/${collection.handle}`}>
//           View all
//         </InteractiveLink>
//       </div>
//       <ul className="gridScreen:!flex gridScreen:overflow-x-auto xsmall:grid sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 hide-scrollbar">

//         {pricedProducts &&
//           pricedProducts.map((product) => (
//             <li key={product.id} className="animate-fadeIn gridScreen:!h-[30%]">
//               <ProductPreview product={product} region={region} isFeatured />
//             </li>
//           ))}
//       </ul>
//     </div>
//   )
// }


import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"

export default async function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  console.log('ProductRail - Collection:', collection?.title)
  console.log('ProductRail - Region:', region?.id)

  let pricedProducts;
  
  try {
    const response = await listProducts({
      regionId: region.id,
      queryParams: {
        collection_id: collection.id,
        fields: "*variants.calculated_price",
      },
    })
    
    pricedProducts = response?.response?.products;
    console.log('ProductRail - Products fetched:', pricedProducts?.length || 0)
  } catch (error) {
    console.error('ProductRail - Error fetching products:', error)
    return null
  }

  if (!pricedProducts || pricedProducts.length === 0) {
    console.log('ProductRail - No products found')
    // Show a fallback UI instead of returning null for debugging
    return (
      <div className="py-8">
        <div className="flex justify-between items-center mb-6">
          <Text className="text-xl font-medium">{collection.title}</Text>
          <InteractiveLink href={`/collections/${collection.handle}`}>
            View all
          </InteractiveLink>
        </div>
        
        <div className="flex flex-col items-center justify-center py-16 text-center border-2 border-dashed border-gray-300 rounded-lg">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <Text className="text-lg font-medium text-gray-900 mb-2">No products found</Text>
          <Text className="text-gray-600 max-w-md">
            This collection "{collection.title}" doesn't have any products yet.
          </Text>
        </div>
      </div>
    )
  }
 
  return (
    <div className="py-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col gap-1">
          <Text className="text-xl sm:text-2xl font-bold text-gray-900">
            {collection.title}
          </Text>
          {collection.metadata?.description && (
            <Text className="text-sm text-gray-600">
              {collection.metadata.description as string}
            </Text>
          )}
        </div>
        
        <InteractiveLink 
          href={`/collections/${collection.handle}`}
          className="group flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-all duration-200"
        >
          <span>View all</span>
          {/* <svg 
            className="w-4 h-4 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg> */}
        </InteractiveLink>
      </div>

      {/* Horizontal Scroll Products - Pure Flex */}
      <div className="relative">
        <ul className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          {pricedProducts.map((product, index) => (
            <li key={product.id} className="flex-none w-40 sm:w-44 md:w-48 lg:w-52">
              <div className="h-[100%]">
                <ProductPreview 
                  product={product} 
                  region={region} 
                  isFeatured={false}
                  allProductsView={false}
                  relatedProductsView={true}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}