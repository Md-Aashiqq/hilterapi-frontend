"use client"
import { useState, useEffect } from "react"
import { FiSearch } from "react-icons/fi"
import { handleSearchProducts } from "@lib/data/handleSearchProducts"
import { useRouter } from "next/navigation"

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [products, setProducts] = useState([])
  const router = useRouter()

  const searchProducts = async (searchTerm: string) => {
    const { products } = await handleSearchProducts(searchTerm)
    setProducts(products)
  }

  useEffect(() => {
    searchProducts(searchTerm)
  }, [searchTerm])

  const handleProductClick = (productId: string) => {
    router.push(`/products/${productId}`)
    setSearchTerm("")
  }

  return (
    <>
      <div className="relative w-96 mx-auto">
        <div className="relative w-full max-w-sm">
          <input
            type="search"
            placeholder="Search products..."
            className="py-2 px-8 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-300 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={16}
          />
        </div>

        {products?.length > 0 && (
          <ul className="absolute w-full bg-white shadow-md mt-1 rounded z-10 max-h-60 overflow-y-auto">
            {products.map((product) => (
              <li
                key={product?.id}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleProductClick(product?.handle)}
              >
                {product?.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default ProductSearch
