// import { Text } from "@medusajs/ui"
// import { listProducts } from "@lib/data/products"
// import { getProductPrice } from "@lib/util/get-product-price"
// import { HttpTypes } from "@medusajs/types"
// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import Thumbnail from "../thumbnail"
// import PreviewPrice from "./price"

// export default async function ProductPreview({
//   product,
//   isFeatured,
//   region,
//   allProductsView,
//   relatedProductsView,
// }: {
//   product: HttpTypes.StoreProduct
//   isFeatured?: boolean
//   region: HttpTypes.StoreRegion,
//   allProductsView: boolean,
//   relatedProductsView: boolean;
// }) {
//   // const pricedProduct = await listProducts({
//   //   regionId: region.id,
//   //   queryParams: { id: [product.id!] },
//   // }).then(({ response }) => response.products[0])

//   // if (!pricedProduct) {
//   //   return null
//   // }

//   const { cheapestPrice } = getProductPrice({
//     product,
//   })
//   console.log("allProductsView--->", allProductsView)
//   return (
//     <LocalizedClientLink href={`/products/${product.handle}`} className="group">
//       <div data-testid="product-wrapper" className={`${relatedProductsView ? "w-[220px] h-full" : allProductsView ? "w-[250px] !h-full" : "gridScreen:!w-[220px]  !h-full"}`}>
//         <Thumbnail
//           thumbnail={product.thumbnail}
//           images={product.images}
//           size="full"
//           isFeatured={isFeatured}
//           className="!h-full"
//         />
//         <div className="flex txt-compact-medium mt-4 justify-between">
//           <Text className="text-ui-fg-subtle" data-testid="product-title">
//             {product.title}
//           </Text>
//           <div className="flex items-center gap-x-2">
//             {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
//           </div>
//         </div>
       
//       </div>
//     </LocalizedClientLink>
//   )
// }

import { Text } from "@medusajs/ui"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { WishlistButton, QuickViewButton, AddToCartButton } from "./ProductCardInteractive"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
  allProductsView,
  relatedProductsView,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion,
  allProductsView: boolean,
  relatedProductsView: boolean;
}) {
  const { cheapestPrice } = getProductPrice({
    product,
  })

  // Calculate discount percentage if original price exists
  const hasDiscount = product.variants?.[0]?.calculated_price?.original_amount && 
                     product.variants?.[0]?.calculated_price?.calculated_amount
  const discountPercentage = hasDiscount 
    ? Math.round(((product.variants[0].calculated_price.original_amount - product.variants[0].calculated_price.calculated_amount) / product.variants[0].calculated_price.original_amount) * 100)
    : 0

  console.log("allProductsView--->", allProductsView)

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group block h-full">
      <div 
        data-testid="product-wrapper" 
        className={`
          relative bg-white rounded-lg border border-gray-200 
          shadow-sm hover:shadow-lg hover:shadow-gray-200/50
          transition-all duration-300 ease-in-out
          hover:-translate-y-1 hover:border-gray-300
          group-hover:scale-[1.02] transform
          overflow-hidden h-full flex flex-col
          ${relatedProductsView 
            ? "w-full max-w-[220px] min-h-[320px]" 
            : allProductsView 
              ? "w-full max-w-[280px] min-h-[380px]" 
              : "w-full max-w-[250px] min-h-[350px]"
          }
          sm:max-w-none sm:w-full
        `}
      >
        {/* Discount Badge */}
        {hasDiscount && discountPercentage > 0 && (
          <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
            -{discountPercentage}%
          </div>
        )}

        {/* Wishlist Button - Client Component */}
        {/* <WishlistButton productId={product.id!} productTitle={product.title} /> */}

        {/* Product Image Container */}
        <div className="relative flex-1 bg-gray-50 rounded-t-lg overflow-hidden">
          <div className="aspect-square w-full h-full">
            <Thumbnail
              thumbnail={product.thumbnail}
              images={product.images}
              size="full"
              isFeatured={isFeatured}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <QuickViewButton productId={product.id!} productTitle={product.title} product={product} />
          </div>
        </div>

        {/* Product Info Container */}
        <div className="p-3 sm:p-4 flex flex-col justify-between flex-shrink-0 bg-white">
          {/* Product Title */}
          <div className="mb-2">
            <Text 
              className="text-gray-800 font-medium text-sm sm:text-base leading-tight line-clamp-2 
                         group-hover:text-blue-600 transition-colors duration-200" 
              data-testid="product-title"
            >
              {product.title}
            </Text>
          </div>

          {/* Product Description/Category */}
          {product.description && (
            <div className="mb-2">
              <Text className="text-gray-500 text-xs sm:text-sm line-clamp-1">
                {product.description.replace(/<[^>]*>/g, '').substring(0, 50)}...
              </Text>
            </div>
          )}

          {/* Rating Stars */}
          {/* <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center" aria-label="4 out of 5 stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-3 h-3 sm:w-4 sm:h-4 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <Text className="text-gray-500 text-xs ml-1">(4.0)</Text>
          </div> */}

          {/* Price Section */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              {cheapestPrice && (
                <div className="flex items-center gap-1">
                  <PreviewPrice price={cheapestPrice} />
                </div>
              )}
              {/* {hasDiscount && (
                <Text className="text-gray-400 text-xs sm:text-sm line-through">
                  ${(product.variants[0].calculated_price.original_amount / 100).toFixed(2)}
                </Text>
              )} */}
            </div>
            
            {/* Add to Cart Button - Client Component */}
            <AddToCartButton productId={product.id!} productTitle={product.title} product={product}/>
          </div>

          {/* Free Shipping Badge */}
          {/* <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-1">
              <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <Text className="text-green-600 text-xs font-medium">Free Shipping</Text>
            </div>
          </div> */}
        </div>
      </div>
    </LocalizedClientLink>
  )
}
