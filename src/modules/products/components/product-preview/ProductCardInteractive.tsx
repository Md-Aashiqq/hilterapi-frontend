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

export function AddToCartButton({ productId, productTitle, product }: ProductCardInteractiveProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const countryCode = useParams().countryCode as string;
  const [options, setOptions] = useState<Record<string, string | undefined>>({});
  const router = useRouter();

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
      return
    }

    return product.variants.find((v) => {
      const variantOptions = optionsAsKeymap(v.options)
      return isEqual(variantOptions, options)
    })
  }, [product.variants, options])

  const handleAddToCart = async (e: React.MouseEvent): Promise<void> => {
    e.preventDefault();
    e.stopPropagation();
    
    // Reset error state
    setError(null);
    
    // Check if variant is selected
    if (!selectedVariant?.id) {
      setError("Please select product options");
      return;
    }

    // Check if variant is in stock
    if (!selectedVariant.manage_inventory || (selectedVariant.inventory_quantity !== null && selectedVariant.inventory_quantity <= 0)) {
      setError("Product is out of stock");
      return;
    }

    setIsLoading(true);
    
    try {
      await addToCart({
        variantId: selectedVariant.id,
        quantity: 1,
        countryCode,
      });
      
      // Optional: Show success feedback or redirect
      // You could add a toast notification here
      console.log('Successfully added to cart');
      
    } catch (error) {
      console.error('Error adding to cart:', error);
      setError("Failed to add to cart. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBuyNow = async (e: React.MouseEvent): Promise<void> => {
    e.preventDefault();
    e.stopPropagation();
    
    setError(null);
    
    if (!selectedVariant?.id) {
      setError("Please select product options");
      return;
    }

    if (!selectedVariant.manage_inventory || (selectedVariant.inventory_quantity !== null && selectedVariant.inventory_quantity <= 0)) {
      setError("Product is out of stock");
      return;
    }

    setIsLoading(true);
    
    try {
      await addToCart({
        variantId: selectedVariant.id,
        quantity: 1,
        countryCode,
      });
      
      // Redirect to cart or checkout
      router.push(`/${countryCode}/cart`);
      
    } catch (error) {
      console.error('Error with buy now:', error);
      setError("Failed to process order. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const isOutOfStock = selectedVariant && selectedVariant.manage_inventory && 
    selectedVariant.inventory_quantity !== null && selectedVariant.inventory_quantity <= 0;

  const isDisabled = isLoading || !selectedVariant || isOutOfStock;

  return (
    <div className="flex flex-col gap-2">
      {/* Error Message */}
      {error && (
        <div className="text-red-500 text-xs">{error}</div>
      )}
      
      {/* Action Buttons */}
      <div className="flex gap-2">
        {/* Add to Cart Button */}
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm 
                     px-2 sm:px-3 py-1 sm:py-2 rounded-md transition-colors duration-200 
                     opacity-0 group-hover:opacity-100 transform translate-x-4 
                     group-hover:translate-x-0 whitespace-nowrap flex-shrink-0
                     disabled:opacity-50 disabled:cursor-not-allowed flex-1"
          onClick={handleAddToCart}
          disabled={isDisabled}
          aria-label={`Add ${productTitle} to cart`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-1">
              <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span className="hidden sm:inline">Adding...</span>
            </span>
          ) : isOutOfStock ? (
            "Out of Stock"
          ) : (
            <span className="hidden sm:inline">Add to Cart</span>
          )}
        </button>

        {/* Buy Now Button (Optional) */}
        {/* <button 
          className="bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm 
                     px-2 sm:px-3 py-1 sm:py-2 rounded-md transition-colors duration-200 
                     opacity-0 group-hover:opacity-100 transform translate-x-4 
                     group-hover:translate-x-0 whitespace-nowrap flex-shrink-0
                     disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleBuyNow}
          disabled={isDisabled}
          aria-label={`Buy ${productTitle} now`}
        >
          {isLoading ? (
            <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          ) : (
            <span className="hidden sm:inline">Buy Now</span>
          )}
        </button> */}
      </div>

      {/* Stock Status */}
      {selectedVariant && (
        <div className="text-xs text-gray-500">
          {isOutOfStock ? (
            <span className="text-red-500">Out of stock</span>
          ) : selectedVariant.inventory_quantity !== null ? (
            <span className="text-green-500">
              {selectedVariant.inventory_quantity} in stock
            </span>
          ) : (
            <span className="text-green-500">In stock</span>
          )}
        </div>
      )}
    </div>
  );
}