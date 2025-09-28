import { listProductsWithSort } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import ProductPreview from "@modules/products/components/product-preview"
import { Pagination } from "@modules/store/components/pagination"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import style from "./AllProductsStyle.module.css"
const PRODUCT_LIMIT = 12

type PaginatedProductsParams = {
  limit: number
  collection_id?: string[]
  category_id?: string[]
  id?: string[]
  order?: string
}

export default async function PaginatedProducts({
  sortBy,
  page,
  collectionId,
  categoryId,
  productsIds,
  countryCode,
  allProductsView
}: {
  sortBy?: SortOptions
  page: number
  collectionId?: string
  categoryId?: string
  productsIds?: string[]
  countryCode: string
  allProductsView: boolean
}) {
  const queryParams: PaginatedProductsParams = {
    limit: 12,
  }

  if (collectionId) {
    queryParams["collection_id"] = [collectionId]
  }

  if (categoryId) {
    queryParams["category_id"] = [categoryId]
  }

  if (productsIds) {
    queryParams["id"] = productsIds
  }

  if (sortBy === "created_at") {
    queryParams["order"] = "created_at"
  }

  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  let {
    response: { products, count },
  } = await listProductsWithSort({
    page,
    queryParams,
    sortBy,
    countryCode,
  })

  const totalPages = Math.ceil(count / PRODUCT_LIMIT)
  console.log("allProductsView--->", allProductsView)
  // console.log("allProductsView--->", allProductsView)
  return (
    <>
      <ul
        // className="allProductsContainer grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8 grid-rows-[repeat(auto-fill,_50%)]"
        // className={`${style.allProductsContainer}`}
        className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide"
        data-testid="products-list"
      >
        {products.map((p) => {
          return (
            <li 
              key={p.id} 
              // className={categoryId ? "!h-[100%]" : "!h-[100%]"}
              // className={`${style.productCardContainer}`}
              className="flex-none w-48 sm:w-48 md:w-50 lg:w-52"
            >
              <ProductPreview product={p} region={region} allProductsView={allProductsView} />
            </li>
          )
        })}
      </ul>
      {totalPages > 1 && (
        <Pagination
          data-testid="product-pagination"
          page={page}
          totalPages={totalPages}
        />
      )}
    </>
  )
}
