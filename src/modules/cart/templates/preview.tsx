// "use client"

// import repeat from "@lib/util/repeat"
// import { HttpTypes } from "@medusajs/types"
// import { Table, clx } from "@medusajs/ui"

// import Item from "@modules/cart/components/item"
// import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

// type ItemsTemplateProps = {
//   cart: HttpTypes.StoreCart
// }

// const ItemsPreviewTemplate = ({ cart }: ItemsTemplateProps) => {
//   const items = cart.items
//   const hasOverflow = items && items.length > 4

//   return (
//     <div
//       className={clx({
//         "pl-[1px] overflow-y-scroll overflow-x-hidden no-scrollbar max-h-[420px]":
//           hasOverflow,
//       })}
//     >
//       <Table>
//         <Table.Body data-testid="items-table">
//           {items
//             ? items
//                 .sort((a, b) => {
//                   return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
//                 })
//                 .map((item) => {
//                   return (
//                     <Item
//                       key={item.id}
//                       item={item}
//                       type="preview"
//                       currencyCode={cart.currency_code}
//                     />
//                   )
//                 })
//             : repeat(5).map((i) => {
//                 return <SkeletonLineItem key={i} />
//               })}
//         </Table.Body>
//       </Table>
//     </div>
//   )
// }

// export default ItemsPreviewTemplate


"use client"

import repeat from "@lib/util/repeat"
import { HttpTypes } from "@medusajs/types"
import { Table, clx } from "@medusajs/ui"
import { FiPackage, FiShoppingBag } from "react-icons/fi"

import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  cart: HttpTypes.StoreCart
}

const ItemsPreviewTemplate = ({ cart }: ItemsTemplateProps) => {
  const items = cart.items
  const itemCount = items?.length || 0
  const hasOverflow = items && items.length > 4

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 sm:p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <FiShoppingBag className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Order Summary</h3>
            <p className="text-sm text-gray-600">
              {itemCount > 0 ? `${itemCount} item${itemCount !== 1 ? 's' : ''} in your order` : 'No items'}
            </p>
          </div>
        </div>
      </div>

      {/* Items List */}
      <div className="relative">
        {items && items.length > 0 ? (
          <>
            {/* Desktop Table View */}
            <div className="hidden md:block">
              <div
                className={clx("relative", {
                  "max-h-[420px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100":
                    hasOverflow,
                })}
              >
                <Table>
                  <Table.Header className="bg-gray-50 sticky top-0 z-10">
                    <Table.Row>
                      <Table.HeaderCell className="py-3 px-4 text-left">
                        <span className="text-sm font-medium text-gray-700">Product</span>
                      </Table.HeaderCell>
                      <Table.HeaderCell className="py-3 px-4 text-right">
                        <span className="text-sm font-medium text-gray-700">Total</span>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body data-testid="items-table">
                    {items
                      .sort((a, b) => {
                        return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
                      })
                      .map((item, index) => {
                        return (
                          <Table.Row 
                            key={item.id}
                            className={clx(
                              "hover:bg-gray-50 transition-colors duration-200",
                              index !== items.length - 1 && "border-b border-gray-100"
                            )}
                          >
                            <Item
                              item={item}
                              type="preview"
                              currencyCode={cart.currency_code}
                            />
                          </Table.Row>
                        )
                      })}
                  </Table.Body>
                </Table>
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="block md:hidden">
              <div
                className={clx("space-y-3 p-4", {
                  "max-h-[420px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100":
                    hasOverflow,
                })}
              >
                {items
                  .sort((a, b) => {
                    return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
                  })
                  .map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow-sm transition-all duration-200"
                      >
                        <Table>
                          <Table.Body>
                            <Item
                              item={item}
                              type="preview"
                              currencyCode={cart.currency_code}
                            />
                          </Table.Body>
                        </Table>
                      </div>
                    )
                  })}
              </div>
            </div>

            {/* Overflow Indicator */}
            {hasOverflow && (
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            )}
          </>
        ) : (
          /* Empty State */
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiPackage className="w-8 h-8 text-gray-400" />
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-2">No items in your order</h4>
            <p className="text-gray-600">Your order summary will appear here once you add items</p>
          </div>
        )}

        {/* Loading State */}
        {!items && (
          <div className="space-y-4 p-4">
            {/* Desktop Loading */}
            <div className="hidden md:block">
              <Table>
                <Table.Header className="bg-gray-50">
                  <Table.Row>
                    <Table.HeaderCell className="py-3 px-4">Product</Table.HeaderCell>
                    <Table.HeaderCell className="py-3 px-4 text-right">Total</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {repeat(3).map((i) => (
                    <SkeletonLineItem key={i} />
                  ))}
                </Table.Body>
              </Table>
            </div>

            {/* Mobile Loading */}
            <div className="block md:hidden space-y-3">
              {repeat(3).map((i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-4 animate-pulse">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                      <div className="h-3 bg-gray-200 rounded w-1/2" />
                      <div className="h-4 bg-gray-200 rounded w-1/4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Info */}
      {items && items.length > 0 && (
        <div className="bg-gray-50 border-t border-gray-200 p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">
              {itemCount} item{itemCount !== 1 ? 's' : ''} • Review your order
            </span>
            {hasOverflow && (
              <span className="text-gray-500 text-xs">
                Scroll to see all items
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ItemsPreviewTemplate