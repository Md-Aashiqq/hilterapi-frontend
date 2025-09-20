// "use client"

// import { convertToLocale } from "@lib/util/money"
// import React from "react"

// type CartTotalsProps = {
//   totals: {
//     total?: number | null
//     subtotal?: number | null
//     tax_total?: number | null
//     shipping_total?: number | null
//     discount_total?: number | null
//     gift_card_total?: number | null
//     currency_code: string
//     shipping_subtotal?: number | null
//   }
// }

// const CartTotals: React.FC<CartTotalsProps> = ({ totals }) => {
//   const {
//     currency_code,
//     total,
//     subtotal,
//     tax_total,
//     discount_total,
//     gift_card_total,
//     shipping_subtotal,
//   } = totals

//   return (
//     <div>
//       <div className="flex flex-col gap-y-2 txt-medium text-ui-fg-subtle ">
//         <div className="flex items-center justify-between">
//           <span className="flex gap-x-1 items-center">
//             Subtotal (excl. shipping and taxes)
//           </span>
//           <span data-testid="cart-subtotal" data-value={subtotal || 0}>
//             {convertToLocale({ amount: subtotal ?? 0, currency_code })}
//           </span>
//         </div>
//         {!!discount_total && (
//           <div className="flex items-center justify-between">
//             <span>Discount</span>
//             <span
//               className="text-ui-fg-interactive"
//               data-testid="cart-discount"
//               data-value={discount_total || 0}
//             >
//               -{" "}
//               {convertToLocale({ amount: discount_total ?? 0, currency_code })}
//             </span>
//           </div>
//         )}
//         <div className="flex items-center justify-between">
//           <span>Shipping</span>
//           <span data-testid="cart-shipping" data-value={shipping_subtotal || 0}>
//             {convertToLocale({ amount: shipping_subtotal ?? 0, currency_code })}
//           </span>
//         </div>
//         <div className="flex justify-between">
//           <span className="flex gap-x-1 items-center ">Taxes</span>
//           <span data-testid="cart-taxes" data-value={tax_total || 0}>
//             {convertToLocale({ amount: tax_total ?? 0, currency_code })}
//           </span>
//         </div>
//         {!!gift_card_total && (
//           <div className="flex items-center justify-between">
//             <span>Gift card</span>
//             <span
//               className="text-ui-fg-interactive"
//               data-testid="cart-gift-card-amount"
//               data-value={gift_card_total || 0}
//             >
//               -{" "}
//               {convertToLocale({ amount: gift_card_total ?? 0, currency_code })}
//             </span>
//           </div>
//         )}
//       </div>
//       <div className="h-px w-full border-b border-gray-200 my-4" />
//       <div className="flex items-center justify-between text-ui-fg-base mb-2 txt-medium ">
//         <span>Total</span>
//         <span
//           className="txt-xlarge-plus"
//           data-testid="cart-total"
//           data-value={total || 0}
//         >
//           {convertToLocale({ amount: total ?? 0, currency_code })}
//         </span>
//       </div>
//       <div className="h-px w-full border-b border-gray-200 mt-4" />
//     </div>
//   )
// }

// export default CartTotals


"use client"

import { convertToLocale } from "@lib/util/money"
import React from "react"
import { FiPercent, FiGift, FiTruck, FiDollarSign, FiMinus } from "react-icons/fi"

type CartTotalsProps = {
  totals: {
    total?: number | null
    subtotal?: number | null
    tax_total?: number | null
    shipping_total?: number | null
    discount_total?: number | null
    gift_card_total?: number | null
    currency_code: string
    shipping_subtotal?: number | null
  }
}

const CartTotals: React.FC<CartTotalsProps> = ({ totals }) => {
  const {
    currency_code,
    total,
    subtotal,
    tax_total,
    discount_total,
    gift_card_total,
    shipping_subtotal,
  } = totals

  const hasDiscounts = !!discount_total || !!gift_card_total
  const savings = (discount_total ?? 0) + (gift_card_total ?? 0)

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-2">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <FiDollarSign className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Order Summary</h3>
            <p className="text-sm text-gray-600">Review your total costs</p>
          </div>
        </div>
      </div>

      {/* Totals Breakdown */}
      <div className="p-4 sm:p-6">
        <div className="space-y-4">
          
          {/* Subtotal */}
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <FiDollarSign className="w-4 h-4 text-gray-600" />
              </div>
              <div>
                <span className="font-medium text-gray-900">Subtotal</span>
                <p className="text-xs text-gray-500">Excluding shipping and taxes</p>
              </div>
            </div>
            <span 
              className="font-semibold text-gray-900 text-lg"
              data-testid="cart-subtotal" 
              data-value={subtotal || 0}
            >
              {convertToLocale({ amount: subtotal ?? 0, currency_code })}
            </span>
          </div>

          {/* Shipping */}
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <FiTruck className="w-4 h-4 text-blue-600" />
              </div>
              <span className="font-medium text-gray-900">Shipping</span>
            </div>
            <span 
              className="font-medium text-gray-700"
              data-testid="cart-shipping" 
              data-value={shipping_subtotal || 0}
            >
              {shipping_subtotal === 0 ? (
                <span className="text-green-600 font-semibold">Free</span>
              ) : (
                convertToLocale({ amount: shipping_subtotal ?? 0, currency_code })
              )}
            </span>
          </div>

          {/* Taxes */}
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <FiPercent className="w-4 h-4 text-orange-600" />
              </div>
              <span className="font-medium text-gray-900">Taxes</span>
            </div>
            <span 
              className="font-medium text-gray-700"
              data-testid="cart-taxes" 
              data-value={tax_total || 0}
            >
              {convertToLocale({ amount: tax_total ?? 0, currency_code })}
            </span>
          </div>

          {/* Discounts */}
          {!!discount_total && (
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <FiMinus className="w-4 h-4 text-red-600" />
                </div>
                <span className="font-medium text-gray-900">Discount</span>
              </div>
              <span 
                className="font-semibold text-red-600"
                data-testid="cart-discount"
                data-value={discount_total || 0}
              >
                -{convertToLocale({ amount: discount_total ?? 0, currency_code })}
              </span>
            </div>
          )}

          {/* Gift Card */}
          {!!gift_card_total && (
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <FiGift className="w-4 h-4 text-green-600" />
                </div>
                <span className="font-medium text-gray-900">Gift Card</span>
              </div>
              <span 
                className="font-semibold text-green-600"
                data-testid="cart-gift-card-amount"
                data-value={gift_card_total || 0}
              >
                -{convertToLocale({ amount: gift_card_total ?? 0, currency_code })}
              </span>
            </div>
          )}

          {/* Savings Summary */}
          {hasDiscounts && (
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <FiPercent className="w-3 h-3 text-white" />
                  </div>
                  <span className="font-medium text-green-800">Total Savings</span>
                </div>
                <span className="font-bold text-green-600 text-lg">
                  -{convertToLocale({ amount: savings, currency_code })}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Total Section */}
        <div className="mt-6 pt-6 border-t-2 border-gray-200">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-lg font-semibold text-gray-900">Order Total</span>
                <p className="text-sm text-gray-600 mt-1">Including all taxes and fees</p>
              </div>
              <div className="text-right">
                <span 
                  className="text-2xl sm:text-3xl font-bold text-gray-900"
                  data-testid="cart-total"
                  data-value={total || 0}
                >
                  {convertToLocale({ amount: total ?? 0, currency_code })}
                </span>
                {hasDiscounts && (
                  <p className="text-sm text-green-600 font-medium mt-1">
                    You saved {convertToLocale({ amount: savings, currency_code })}!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Prices are in {currency_code.toUpperCase()} and include applicable taxes
          </p>
        </div>
      </div>
    </div>
  )
}

export default CartTotals