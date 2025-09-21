"use client";

import { addToCart } from "@lib/data/cart";
import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation"
import { isEqual } from "lodash"

import { HttpTypes } from "@medusajs/types"

interface ProductCardInteractiveProps {
  productId: string;
  productTitle: string;
  product: HttpTypes.StoreProduct;
}

export function WishlistButton({ productId, productTitle }: ProductCardInteractiveProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    // Add your wishlist logic here
    console.log('Wishlist toggled for:', productId);
  };

  return (
    <button 
      className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm 
                 hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100
                 shadow-md hover:shadow-lg"
      onClick={handleWishlistClick}
      aria-label={`${isWishlisted ? 'Remove from' : 'Add to'} wishlist: ${productTitle}`}
    >
      <svg 
        className={`w-4 h-4 transition-colors ${
          isWishlisted ? 'text-red-500 fill-current' : 'text-gray-600 hover:text-red-500'
        }`} 
        fill={isWishlisted ? "currentColor" : "none"} 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.682l-1.318-1.364a4.5 4.5 0 00-6.364 0z" 
        />
      </svg>
    </button>
  );
}

export function QuickViewButton({ productId, productTitle, product }: ProductCardInteractiveProps) {
  const router = useRouter();

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Navigate to product page
    if (product?.handle) {
      router.push(`/products/${product.handle}`);
    } else {
      console.log('Quick view for:', productId);
    }
  };

  return (
    <button 
      className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium 
                 shadow-lg hover:bg-gray-50 transition-colors duration-200 
                 transform translate-y-4 group-hover:translate-y-0"
      onClick={handleQuickView}
      aria-label={`Quick view: ${productTitle}`}
    >
      Quick View
    </button>
  );
}

// export function AddToCartButton({ productId, productTitle, product }: ProductCardInteractiveProps) {
//   const [isLoading, setIsLoading] = useState(false);
//     const countryCode = useParams().countryCode as string
//     const [options, setOptions] = useState<Record<string, string | undefined>>({})

//     const optionsAsKeymap = (
//       variantOptions: HttpTypes.StoreProductVariant["options"]
//     ) => {
//       return variantOptions?.reduce((acc: Record<string, string>, varopt: any) => {
//         acc[varopt.option_id] = varopt.value
//         return acc
//       }, {})
//     }
    
//       const router = useRouter();
//       // If there is only 1 variant, preselect the options
//       useEffect(() => {
//         if (product.variants?.length === 1) {
//           const variantOptions = optionsAsKeymap(product.variants[0].options)
//           setOptions(variantOptions ?? {})
//         }
//       }, [product.variants])
    
//       const selectedVariant = useMemo(() => {
//         if (!product.variants || product.variants.length === 0) {
//           return
//         }
    
//         return product.variants.find((v) => {
//           const variantOptions = optionsAsKeymap(v.options)
//           return isEqual(variantOptions, options)
//         })
//       }, [product.variants, options])

//     const handleAddToCart = async (val: 'buynow' | 'addtocart', e: React.MouseEvent): Promise<void> => {
//         if (!selectedVariant?.id) return;

//         e.preventDefault();
//         e.stopPropagation();
//         setIsLoading(true);
        
//         await addToCart({
//             variantId: selectedVariant.id,
//             quantity: 1,
//             countryCode,
//             buyNow: val === 'buynow',
//         });

//         setIsLoading(false);
//     };
// //   const handleAddToCart = async (e: React.MouseEvent) => {
    
    
// //     try {
// //       // Add your cart logic here
// //       console.log('Add to cart:', productId);
// //       // Simulate API call
// //       await new Promise(resolve => setTimeout(resolve, 500));
// //     } catch (error) {
// //       console.error('Error adding to cart:', error);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

//   return (
//     <button 
//       className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm 
//                  px-2 sm:px-3 py-1 sm:py-2 rounded-md transition-colors duration-200 
//                  opacity-0 group-hover:opacity-100 transform translate-x-4 
//                  group-hover:translate-x-0 whitespace-nowrap flex-shrink-0
//                  disabled:opacity-50 disabled:cursor-not-allowed"
//       onClick={handleAddToCart}
//       disabled={isLoading}
//       aria-label={`Add ${productTitle} to cart`}
//     >
//       {isLoading ? (
//         <span className="flex items-center gap-1">
//           <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24">
//             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//           </svg>
//           Adding...
//         </span>
//       ) : (
//         "Add to Cart"
//       )}
//     </button>
//   );
// }

// export function AddToCartButton({ productId, productTitle, product }: ProductCardInteractiveProps) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const countryCode = useParams().countryCode as string;
//   const [options, setOptions] = useState<Record<string, string | undefined>>({});
//   const router = useRouter();

//   const optionsAsKeymap = (
//     variantOptions: HttpTypes.StoreProductVariant["options"]
//   ) => {
//     return variantOptions?.reduce((acc: Record<string, string>, varopt: any) => {
//       acc[varopt.option_id] = varopt.value
//       return acc
//     }, {})
//   }
  
//   // If there is only 1 variant, preselect the options
//   useEffect(() => {
//     if (product.variants?.length === 1) {
//       const variantOptions = optionsAsKeymap(product.variants[0].options)
//       setOptions(variantOptions ?? {})
//     }
//   }, [product.variants])

//   const selectedVariant = useMemo(() => {
//     if (!product.variants || product.variants.length === 0) {
//       return
//     }

//     return product.variants.find((v) => {
//       const variantOptions = optionsAsKeymap(v.options)
//       return isEqual(variantOptions, options)
//     })
//   }, [product.variants, options])

//   const handleAddToCart = async (e: React.MouseEvent): Promise<void> => {
//     e.preventDefault();
//     e.stopPropagation();
    
//     // Reset error state
//     setError(null);
    
//     // Check if variant is selected
//     if (!product?.id) {
//       setError("Please select product options");
//       return;
//     }

//     // Check if variant is in stock
//     if (!product.manage_inventory || (product.inventory_quantity !== null && product.inventory_quantity <= 0)) {
//       setError("Product is out of stock");
//       return;
//     }

//     setIsLoading(true);
    
//     try {
//       await addToCart({
//         variantId: product.id,
//         quantity: 1,
//         countryCode,
//       });
      
//       // Optional: Show success feedback or redirect
//       // You could add a toast notification here
//       console.log('Successfully added to cart');
      
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       setError("Failed to add to cart. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

// //   const handleBuyNow = async (e: React.MouseEvent): Promise<void> => {
// //     e.preventDefault();
// //     e.stopPropagation();
    
// //     setError(null);
    
// //     if (!selectedVariant?.id) {
// //       setError("Please select product options");
// //       return;
// //     }

// //     if (!selectedVariant.manage_inventory || (selectedVariant.inventory_quantity !== null && selectedVariant.inventory_quantity <= 0)) {
// //       setError("Product is out of stock");
// //       return;
// //     }

// //     setIsLoading(true);
    
// //     try {
// //       await addToCart({
// //         variantId: selectedVariant.id,
// //         quantity: 1,
// //         countryCode,
// //       });
      
// //       // Redirect to cart or checkout
// //       router.push(`/${countryCode}/cart`);
      
// //     } catch (error) {
// //       console.error('Error with buy now:', error);
// //       setError("Failed to process order. Please try again.");
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

//   const isOutOfStock = selectedVariant && selectedVariant.manage_inventory && 
//     selectedVariant.inventory_quantity !== null && selectedVariant.inventory_quantity <= 0;

//   const isDisabled = isLoading || !selectedVariant || isOutOfStock;

//   return (
//     <div className="flex flex-col gap-2">
//       {/* Error Message */}
//       {error && (
//         <div className="text-red-500 text-xs">{error}</div>
//       )}
      
//       {/* Action Buttons */}
//       <div className="flex gap-2">
//         {/* Add to Cart Button */}
//         <button 
//           className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm 
//                      px-2 sm:px-3 py-1 sm:py-2 rounded-md transition-colors duration-200 
//                      opacity-0 group-hover:opacity-100 transform translate-x-4 
//                      group-hover:translate-x-0 whitespace-nowrap flex-shrink-0
//                      disabled:opacity-50 disabled:cursor-not-allowed flex-1"
//           onClick={handleAddToCart}
//           disabled={isDisabled}
//           aria-label={`Add ${productTitle} to cart`}
//         >
//           {/* {isLoading ? (
//             <span className="flex items-center justify-center gap-1">
//               <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//               </svg>
//               <span className="hidden sm:inline">Adding...</span>
//             </span>
//           ) : isOutOfStock ? (
//             "Out of Stock"
//           ) : (
//             <span className="hidden sm:inline">Add to Cart</span>
//           )} */}
//           <span className="hidden sm:inline">Add to Cart</span>
//         </button>

//         {/* Buy Now Button (Optional) */}
//         {/* <button 
//           className="bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm 
//                      px-2 sm:px-3 py-1 sm:py-2 rounded-md transition-colors duration-200 
//                      opacity-0 group-hover:opacity-100 transform translate-x-4 
//                      group-hover:translate-x-0 whitespace-nowrap flex-shrink-0
//                      disabled:opacity-50 disabled:cursor-not-allowed"
//           onClick={handleBuyNow}
//           disabled={isDisabled}
//           aria-label={`Buy ${productTitle} now`}
//         >
//           {isLoading ? (
//             <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//             </svg>
//           ) : (
//             <span className="hidden sm:inline">Buy Now</span>
//           )}
//         </button> */}
//       </div>

//       {/* Stock Status */}
//       {/* {selectedVariant && (
//         <div className="text-xs text-gray-500">
//           {isOutOfStock ? (
//             <span className="text-red-500">Out of stock</span>
//           ) : selectedVariant.inventory_quantity !== null ? (
//             <span className="text-green-500">
//               {selectedVariant.inventory_quantity} in stock
//             </span>
//           ) : (
//             <span className="text-green-500">In stock</span>
//           )}
//         </div>
//       )} */}
//     </div>
//   );
// }

export function AddToCartButton({ productId, productTitle, product }: ProductCardInteractiveProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const countryCode = useParams().countryCode as string
  const [options, setOptions] = useState<Record<string, string | undefined>>({})
  const router = useRouter()

  const optionsAsKeymap = (
    variantOptions: HttpTypes.StoreProductVariant["options"]
  ) => {
    return variantOptions?.reduce((acc: Record<string, string>, varopt: any) => {
      acc[varopt.option_id] = varopt.value
      return acc
    }, {})
  }
  
  // If there is only 1 variant, preselect the options
  useEffect(() => {
    if (product.variants?.length === 1) {
      const variantOptions = optionsAsKeymap(product.variants[0].options)
      setOptions(variantOptions ?? {})
    }
  }, [product.variants])

  const selectedVariant = useMemo(() => {
    if (!product.variants || product.variants.length === 0) {
      return product.variants?.[0] // Fallback to first variant if no options
    }

    return product.variants.find((v) => {
      const variantOptions = optionsAsKeymap(v.options)
      return isEqual(variantOptions, options)
    }) || product.variants[0] // Fallback to first variant
  }, [product.variants, options])

  // Clear success message after 3 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [success])

  const handleAddToCart = async (e: React.MouseEvent): Promise<void> => {
    e.preventDefault()
    e.stopPropagation()
    
    // Reset states
    setError(null)
    setSuccess(false)
    
    // Validation: Check if we have a variant
    if (!selectedVariant?.id) {
      setError("Please select product options")
      return
    }

    // Check if variant is in stock
    const isOutOfStock = selectedVariant.manage_inventory && 
      selectedVariant.inventory_quantity !== null && 
      selectedVariant.inventory_quantity <= 0

    if (isOutOfStock) {
      setError("Product is out of stock")
      return
    }

    setIsLoading(true)
    
    try {
      // Add to cart with the selected variant
      await addToCart({
        variantId: selectedVariant.id,
        quantity: 1,
        countryCode,
      })
      
      // Show success feedback
      setSuccess(true)
      console.log('Successfully added to cart:', {
        productTitle,
        variantId: selectedVariant.id,
        variantTitle: selectedVariant.title
      })
      
      // Optional: Trigger cart update event or refresh cart state
      // You can dispatch a custom event here if needed
      window.dispatchEvent(new CustomEvent('cartUpdated'))
      
    } catch (error: any) {
      console.error('Error adding to cart:', error)
      
      // Handle different types of errors
      if (error?.message?.includes('inventory')) {
        setError("Product is out of stock")
      } else if (error?.message?.includes('invalid')) {
        setError("Invalid product selection")
      } else {
        setError("Failed to add to cart. Please try again.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleBuyNow = async (e: React.MouseEvent): Promise<void> => {
    e.preventDefault()
    e.stopPropagation()
    
    setError(null)
    
    if (!selectedVariant?.id) {
      setError("Please select product options")
      return
    }

    const isOutOfStock = selectedVariant.manage_inventory && 
      selectedVariant.inventory_quantity !== null && 
      selectedVariant.inventory_quantity <= 0

    if (isOutOfStock) {
      setError("Product is out of stock")
      return
    }

    setIsLoading(true)
    
    try {
      await addToCart({
        variantId: selectedVariant.id,
        quantity: 1,
        countryCode,
      })
      
      // Redirect to cart or checkout
      router.push(`/${countryCode}/cart`)
      
    } catch (error: any) {
      console.error('Error with buy now:', error)
      setError("Failed to process order. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const isOutOfStock = selectedVariant && selectedVariant.manage_inventory && 
    selectedVariant.inventory_quantity !== null && selectedVariant.inventory_quantity <= 0

  const isDisabled = isLoading || !selectedVariant || isOutOfStock

  return (
    <div className="flex flex-col gap-2">
      {/* Status Messages */}
      {error && (
        <div className="text-red-500 text-xs bg-red-50 border border-red-200 rounded px-2 py-1 animate-pulse">
          {error}
        </div>
      )}
      
      {success && (
        <div className="text-green-500 text-xs bg-green-50 border border-green-200 rounded px-2 py-1 animate-pulse">
          ✓ Added to cart successfully!
        </div>
      )}
      
      {/* Action Buttons */}
      <div className="flex gap-2">
        {/* Add to Cart Button */}
        <button 
          className={`
            ${isOutOfStock 
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
              : success 
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }
            text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 rounded-md 
            transition-all duration-300 opacity-0 group-hover:opacity-100 
            transform translate-x-4 group-hover:translate-x-0 
            whitespace-nowrap flex-shrink-0 disabled:cursor-not-allowed 
            flex-1 flex items-center justify-center gap-1
            hover:scale-105 active:scale-95
          `}
          onClick={handleAddToCart}
          disabled={isDisabled}
          aria-label={`Add ${productTitle} to cart`}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24">
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  fill="none" 
                />
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" 
                />
              </svg>
              <span className="hidden sm:inline">Adding...</span>
            </>
          ) : success ? (
            <>
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="hidden sm:inline">Added!</span>
            </>
          ) : isOutOfStock ? (
            <>
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="hidden sm:inline">Out of Stock</span>
            </>
          ) : (
            <>
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 2.5M7 13l2.5 2.5" />
              </svg>
              <span className="hidden sm:inline">Add to Cart</span>
            </>
          )}
        </button>

        {/* Buy Now Button */}
        {/* <button 
          className="bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm 
                     px-2 sm:px-3 py-1 sm:py-2 rounded-md transition-all duration-300 
                     opacity-0 group-hover:opacity-100 transform translate-x-4 
                     group-hover:translate-x-0 whitespace-nowrap flex-shrink-0
                     disabled:opacity-50 disabled:cursor-not-allowed
                     hover:scale-105 active:scale-95 flex items-center justify-center gap-1"
          onClick={handleBuyNow}
          disabled={isDisabled}
          aria-label={`Buy ${productTitle} now`}
        >
          {isLoading && (
            <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          )}
        </button> */}
      </div>

      {/* Stock Status */}
      {selectedVariant && (
        <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {isOutOfStock ? (
            <span className="text-red-500 flex items-center gap-1">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              Out of stock
            </span>
          ) : selectedVariant.inventory_quantity !== null ? (
            <span className="text-green-500 flex items-center gap-1">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {selectedVariant.inventory_quantity} in stock
            </span>
          ) : (
            <span className="text-green-500 flex items-center gap-1">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              In stock
            </span>
          )}
        </div>
      )}
    </div>
  )
}