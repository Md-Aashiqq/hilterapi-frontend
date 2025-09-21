// "use client"

// import {
//   Popover,
//   PopoverButton,
//   PopoverPanel,
//   Transition,
// } from "@headlessui/react"
// import { convertToLocale } from "@lib/util/money"
// import { HttpTypes } from "@medusajs/types"
// import { Button } from "@medusajs/ui"
// import DeleteButton from "@modules/common/components/delete-button"
// import LineItemOptions from "@modules/common/components/line-item-options"
// import LineItemPrice from "@modules/common/components/line-item-price"
// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import Thumbnail from "@modules/products/components/thumbnail"
// import { usePathname } from "next/navigation"
// import { Fragment, useEffect, useRef, useState } from "react"

// const CartDropdown = ({
//   cart: cartState,
// }: {
//   cart?: HttpTypes.StoreCart | null
// }) => {
//   const [activeTimer, setActiveTimer] = useState<NodeJS.Timer | undefined>(
//     undefined
//   )
//   const [cartDropdownOpen, setCartDropdownOpen] = useState(false)

//   const open = () => setCartDropdownOpen(true)
//   const close = () => setCartDropdownOpen(false)

//   const totalItems =
//     cartState?.items?.reduce((acc, item) => {
//       return acc + item.quantity
//     }, 0) || 0

//   const subtotal = cartState?.subtotal ?? 0
//   const itemRef = useRef<number>(totalItems || 0)

//   const timedOpen = () => {
//     open()

//     const timer = setTimeout(close, 5000)

//     setActiveTimer(timer)
//   }

//   const openAndCancel = () => {
//     if (activeTimer) {
//       clearTimeout(activeTimer)
//     }

//     open()
//   }

//   // Clean up the timer when the component unmounts
//   useEffect(() => {
//     return () => {
//       if (activeTimer) {
//         clearTimeout(activeTimer)
//       }
//     }
//   }, [activeTimer])

//   const pathname = usePathname()

//   // open cart dropdown when modifying the cart items, but only if we're not on the cart page
//   useEffect(() => {
//     if (itemRef.current !== totalItems && !pathname.includes("/cart")) {
//       timedOpen()
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [totalItems, itemRef.current])

//   return (
//     <div
//       className="h-full z-[58880]"
//       onMouseEnter={openAndCancel}
//       onMouseLeave={close}
//     >
//       <Popover className="relative h-full">
//         <PopoverButton className="h-full">
//           <LocalizedClientLink
//             className="hover:text-ui-fg-base"
//             href="/cart"
//             data-testid="nav-cart-link"
//           >{`Cart (${totalItems})`}</LocalizedClientLink>
//         </PopoverButton>
//         <Transition
//           show={cartDropdownOpen}
//           as={Fragment}
//           enter="transition ease-out duration-200"
//           enterFrom="opacity-0 translate-y-1"
//           enterTo="opacity-100 translate-y-0"
//           leave="transition ease-in duration-150"
//           leaveFrom="opacity-100 translate-y-0"
//           leaveTo="opacity-0 translate-y-1"
//         >
//           <PopoverPanel
//             static
//             className="hidden small:block absolute top-[calc(100%+1px)] right-0 bg-white border-x border-b border-gray-200 w-[420px] text-ui-fg-base"
//             data-testid="nav-cart-dropdown"
//           >
//             <div className="p-4 flex items-center justify-center">
//               <h3 className="text-large-semi">Cart</h3>
//             </div>
//             {cartState && cartState.items?.length ? (
//               <>
//                 <div className="overflow-y-scroll max-h-[402px] px-4 grid grid-cols-1 gap-y-8 no-scrollbar p-px">
//                   {cartState.items
//                     .sort((a, b) => {
//                       return (a.created_at ?? "") > (b.created_at ?? "")
//                         ? -1
//                         : 1
//                     })
//                     .map((item) => (
//                       <div
//                         className="grid grid-cols-[122px_1fr] gap-x-4"
//                         key={item.id}
//                         data-testid="cart-item"
//                       >
//                         <LocalizedClientLink
//                           href={`/products/${item.product_handle}`}
//                           className="w-24"
//                         >
//                           <Thumbnail
//                             thumbnail={item.thumbnail}
//                             images={item.variant?.product?.images}
//                             size="square"
//                           />
//                         </LocalizedClientLink>
//                         <div className="flex flex-col justify-between flex-1">
//                           <div className="flex flex-col flex-1">
//                             <div className="flex items-start justify-between">
//                               <div className="flex flex-col overflow-ellipsis whitespace-nowrap mr-4 w-[180px]">
//                                 <h3 className="text-base-regular overflow-hidden text-ellipsis">
//                                   <LocalizedClientLink
//                                     href={`/products/${item.product_handle}`}
//                                     data-testid="product-link"
//                                   >
//                                     {item.title}
//                                   </LocalizedClientLink>
//                                 </h3>
//                                 <LineItemOptions
//                                   variant={item.variant}
//                                   data-testid="cart-item-variant"
//                                   data-value={item.variant}
//                                 />
//                                 <span
//                                   data-testid="cart-item-quantity"
//                                   data-value={item.quantity}
//                                 >
//                                   Quantity: {item.quantity}
//                                 </span>
//                               </div>
//                               <div className="flex justify-end">
//                                 <LineItemPrice
//                                   item={item}
//                                   style="tight"
//                                   currencyCode={cartState.currency_code}
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                           <DeleteButton
//                             id={item.id}
//                             className="mt-1"
//                             data-testid="cart-item-remove-button"
//                           >
//                             Remove
//                           </DeleteButton>
//                         </div>
//                       </div>
//                     ))}
//                 </div>
//                 <div className="p-4 flex flex-col gap-y-4 text-small-regular">
//                   <div className="flex items-center justify-between">
//                     <span className="text-ui-fg-base font-semibold">
//                       Subtotal{" "}
//                       <span className="font-normal">(excl. taxes)</span>
//                     </span>
//                     <span
//                       className="text-large-semi"
//                       data-testid="cart-subtotal"
//                       data-value={subtotal}
//                     >
//                       {convertToLocale({
//                         amount: subtotal,
//                         currency_code: cartState.currency_code,
//                       })}
//                     </span>
//                   </div>
//                   <LocalizedClientLink href="/cart" passHref>
//                     <Button
//                       className="w-full"
//                       size="large"
//                       data-testid="go-to-cart-button"
//                     >
//                       Go to cart
//                     </Button>
//                   </LocalizedClientLink>
//                 </div>
//               </>
//             ) : (
//               <div>
//                 <div className="flex py-16 flex-col gap-y-4 items-center justify-center">
//                   <div className="bg-gray-900 text-small-regular flex items-center justify-center w-6 h-6 rounded-full text-white">
//                     <span>0</span>
//                   </div>
//                   <span>Your shopping bag is empty.</span>
//                   <div>
//                     <LocalizedClientLink href="/store">
//                       <>
//                         <span className="sr-only">Go to all products page</span>
//                         <Button onClick={close}>Explore products</Button>
//                       </>
//                     </LocalizedClientLink>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </PopoverPanel>
//         </Transition>
//       </Popover>
//     </div>
//   )
// }

// export default CartDropdown


"use client"

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"
import { Button } from "@medusajs/ui"
import DeleteButton from "@modules/common/components/delete-button"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "@modules/products/components/thumbnail"
import { usePathname } from "next/navigation"
import { Fragment, useEffect, useRef, useState } from "react"

const CartDropdown = ({
  cart: cartState,
}: {
  cart?: HttpTypes.StoreCart | null
}) => {
  const [activeTimer, setActiveTimer] = useState<NodeJS.Timer | undefined>(
    undefined
  )
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false)

  const open = () => setCartDropdownOpen(true)
  const close = () => setCartDropdownOpen(false)

  const totalItems =
    cartState?.items?.reduce((acc, item) => {
      return acc + item.quantity
    }, 0) || 0

  const subtotal = cartState?.subtotal ?? 0
  const itemRef = useRef<number>(totalItems || 0)

  const timedOpen = () => {
    open()
    const timer = setTimeout(close, 5000)
    setActiveTimer(timer)
  }

  const openAndCancel = () => {
    if (activeTimer) {
      clearTimeout(activeTimer)
    }
    open()
  }

  // Clean up the timer when the component unmounts
  useEffect(() => {
    return () => {
      if (activeTimer) {
        clearTimeout(activeTimer)
      }
    }
  }, [activeTimer])

  const pathname = usePathname()

  // open cart dropdown when modifying the cart items, but only if we're not on the cart page
  useEffect(() => {
    if (itemRef.current !== totalItems && !pathname.includes("/cart")) {
      timedOpen()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalItems, itemRef.current])

  return (
    <div
      className="h-full z-[58880] relative"
      onMouseEnter={openAndCancel}
      onMouseLeave={close}
    >
      <Popover className="relative h-full">
        <PopoverButton className="h-full focus:outline-none">
          <LocalizedClientLink
            className="relative hover:text-ui-fg-base transition-all duration-300 ease-out
              hover:scale-105 hover:-translate-y-0.5 flex items-center gap-2
              before:content-[''] before:absolute before:bottom-0 before:left-0 
              before:w-0 before:h-0.5 before:bg-current before:transition-all before:duration-300
              hover:before:w-full
              focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:rounded-sm"
            href="/cart"
            data-testid="nav-cart-link"
          >
            <span>Cart</span>
            {totalItems > 0 && (
              <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full min-w-[20px] h-5 flex items-center justify-center animate-pulse">
                {totalItems}
              </span>
            )}
            {totalItems === 0 && (
              <span className="text-gray-400 text-sm">({totalItems})</span>
            )}
          </LocalizedClientLink>
        </PopoverButton>

        <Transition
          show={cartDropdownOpen}
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="opacity-0 scale-95 translate-y-2"
          enterTo="opacity-100 scale-100 translate-y-0"
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100 scale-100 translate-y-0"
          leaveTo="opacity-0 scale-95 translate-y-2"
        >
          <PopoverPanel
            static
            className="absolute top-[calc(100%+8px)] right-0 
              w-[320px] sm:w-[380px] md:w-[420px]
              bg-white border border-gray-200 rounded-xl shadow-2xl
              backdrop-blur-sm bg-white/95
              max-h-[80vh] flex flex-col
              z-50"
            data-testid="nav-cart-dropdown"
          >
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  Shopping Cart
                </h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'}
                </span>
              </div>
            </div>

            {cartState && cartState.items?.length ? (
              <>
                {/* Cart Items */}
                <div className="overflow-y-auto flex-1 max-h-[400px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  <div className="p-4 sm:p-6 space-y-4">
                    {cartState.items
                      .sort((a, b) => {
                        return (a.created_at ?? "") > (b.created_at ?? "")
                          ? -1
                          : 1
                      })
                      .map((item, index) => (
                        <div
                          className="group flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                          key={item.id}
                          data-testid="cart-item"
                        >
                          {/* Product Image */}
                          <LocalizedClientLink
                            href={`/products/${item.product_handle}`}
                            className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden 
                              hover:scale-105 transition-transform duration-200"
                          >
                            <Thumbnail
                              thumbnail={item.thumbnail}
                              images={item.variant?.product?.images}
                              size="square"
                            />
                          </LocalizedClientLink>

                          {/* Product Details */}
                          <div className="flex-1 min-w-0 space-y-2">
                            <div className="flex justify-between items-start gap-2">
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-medium text-gray-900 truncate">
                                  <LocalizedClientLink
                                    href={`/products/${item.product_handle}`}
                                    data-testid="product-link"
                                    className="hover:text-blue-600 transition-colors duration-200"
                                  >
                                    {item.title}
                                  </LocalizedClientLink>
                                </h4>
                                
                                <div className="mt-1">
                                  <LineItemOptions
                                    variant={item.variant}
                                    data-testid="cart-item-variant"
                                    data-value={item.variant}
                                  />
                                </div>
                                
                                <div className="flex items-center gap-3 mt-2">
                                  <span
                                    className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full"
                                    data-testid="cart-item-quantity"
                                    data-value={item.quantity}
                                  >
                                    Qty: {item.quantity}
                                  </span>
                                </div>
                              </div>

                              {/* Price */}
                              <div className="text-right">
                                <LineItemPrice
                                  item={item}
                                  style="tight"
                                  currencyCode={cartState.currency_code}
                                />
                              </div>
                            </div>

                            {/* Remove Button */}
                            <DeleteButton
                              id={item.id}
                              className="text-xs text-red-600 hover:text-red-800 hover:bg-red-50 
                                px-2 py-1 rounded transition-colors duration-200 
                                opacity-0 group-hover:opacity-100"
                              data-testid="cart-item-remove-button"
                            >
                              Remove
                            </DeleteButton>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 sm:p-6 border-t border-gray-100 bg-gray-50/50 rounded-b-xl">
                  <div className="space-y-4">
                    {/* Subtotal */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        Subtotal
                        <span className="text-xs text-gray-500 ml-1">(excl. taxes)</span>
                      </span>
                      <span
                        className="text-lg font-bold text-gray-900"
                        data-testid="cart-subtotal"
                        data-value={subtotal}
                      >
                        {convertToLocale({
                          amount: subtotal,
                          currency_code: cartState.currency_code,
                        })}
                      </span>
                    </div>

                    {/* Go to Cart Button */}
                    <LocalizedClientLink href="/cart" passHref>
                      <Button
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        size="large"
                        data-testid="go-to-cart-button"
                      >
                        View Cart & Checkout
                      </Button>
                    </LocalizedClientLink>
                  </div>
                </div>
              </>
            ) : (
              /* Empty Cart State */
              <div className="p-6 sm:p-8">
                <div className="flex flex-col items-center justify-center py-8 sm:py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 
                    rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">0</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Your cart is empty
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Add some products to get started
                    </p>
                  </div>

                  <LocalizedClientLink href="/store" className="mt-4">
                    <Button 
                      onClick={close}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 
                        hover:from-blue-700 hover:to-blue-800 text-white font-semibold
                        px-6 py-2.5 rounded-lg transition-all duration-200 
                        transform hover:scale-105 hover:shadow-lg"
                    >
                      <span className="sr-only">Go to all products page</span>
                      Explore Products
                    </Button>
                  </LocalizedClientLink>
                </div>
              </div>
            )}
          </PopoverPanel>
        </Transition>
      </Popover>
    </div>
  )
}

export default CartDropdown