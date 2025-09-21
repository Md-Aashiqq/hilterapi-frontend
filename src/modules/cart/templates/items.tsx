// import repeat from "@lib/util/repeat"
// import { HttpTypes } from "@medusajs/types"
// import { Heading, Table } from "@medusajs/ui"

// import Item from "@modules/cart/components/item"
// import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

// type ItemsTemplateProps = {
//   cart?: HttpTypes.StoreCart
// }

// const ItemsTemplate = ({ cart }: ItemsTemplateProps) => {
//   const items = cart?.items
//   return (
//     <div>
//       <div className="pb-3 flex items-center">
//         <Heading className="text-[2rem] leading-[2.75rem]">Cart</Heading>
//       </div>
//       <Table>
//         <Table.Header className="border-t-0">
//           <Table.Row className="text-ui-fg-subtle txt-medium-plus">
//             <Table.HeaderCell className="!pl-0">Item</Table.HeaderCell>
//             <Table.HeaderCell></Table.HeaderCell>
//             <Table.HeaderCell>Quantity</Table.HeaderCell>
//             <Table.HeaderCell className="hidden small:table-cell">
//               Price
//             </Table.HeaderCell>
//             <Table.HeaderCell className="!pr-0 text-right">
//               Total
//             </Table.HeaderCell>
//           </Table.Row>
//         </Table.Header>
//         <Table.Body>
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
//                       currencyCode={cart?.currency_code}
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

// export default ItemsTemplate

// import repeat from "@lib/util/repeat"
// import { HttpTypes } from "@medusajs/types"
// import { Heading, Table } from "@medusajs/ui"
// import { FiShoppingCart, FiPackage } from "react-icons/fi"

// import Item from "@modules/cart/components/item"
// import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

// type ItemsTemplateProps = {
//   cart?: HttpTypes.StoreCart
// }

// const ItemsTemplate = ({ cart }: ItemsTemplateProps) => {
//   const items = cart?.items
//   const itemCount = items?.length || 0

//   return (
//     <div className="w-full max-w-6xl mx-auto">
//       {/* Header Section */}
//       <div className="mb-8">
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
//           <div className="flex items-center gap-4">
//             <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
//               <FiShoppingCart className="w-6 h-6 text-white" />
//             </div>
//             <div>
//               <Heading className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
//                 Shopping Cart
//               </Heading>
//               <p className="text-gray-600 mt-1">
//                 {itemCount > 0 ? `${itemCount} item${itemCount !== 1 ? 's' : ''} in your cart` : 'Your cart is empty'}
//               </p>
//             </div>
//           </div>
          
//           {itemCount > 0 && (
//             <div className="bg-blue-50 rounded-lg px-4 py-2">
//               <div className="text-sm text-blue-600 font-medium">
//                 Items: {itemCount}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Progress indicator */}
//         <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
//           <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-1/3"></div>
//         </div>
//         <div className="flex justify-between text-sm text-gray-500">
//           <span className="font-medium text-blue-600">Cart</span>
//           <span>Checkout</span>
//           <span>Complete</span>
//         </div>
//       </div>

//       {/* Empty Cart State */}
//       {(!items || itemCount === 0) && (
//         <div className="text-center py-16">
//           <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
//             <FiPackage className="w-12 h-12 text-gray-400" />
//           </div>
//           <h3 className="text-xl font-semibold text-gray-900 mb-3">Your cart is empty</h3>
//           <p className="text-gray-600 mb-8 max-w-md mx-auto">
//             Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
//           </p>
//           <a
//             href="/store"
//             className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
//           >
//             Start Shopping
//           </a>
//         </div>
//       )}

//       {/* Cart Items - Desktop Table View */}
//       {items && itemCount > 0 && (
//         <>
//           <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
//             <Table>
//               <Table.Header className="border-t-0 bg-gray-50">
//                 <Table.Row className="text-gray-700 font-semibold">
//                   <Table.HeaderCell className="!pl-6 py-4">
//                     <div className="text-sm font-medium text-gray-900">Product</div>
//                   </Table.HeaderCell>
//                   <Table.HeaderCell className="py-4">
//                     <div className="text-sm font-medium text-gray-900 text-center">Quantity</div>
//                   </Table.HeaderCell>
//                   <Table.HeaderCell className="py-4">
//                     <div className="text-sm font-medium text-gray-900 text-center">Price</div>
//                   </Table.HeaderCell>
//                   <Table.HeaderCell className="!pr-6 py-4">
//                     <div className="text-sm font-medium text-gray-900 text-right">Total</div>
//                   </Table.HeaderCell>
//                 </Table.Row>
//               </Table.Header>
//               <Table.Body>
//                 {items
//                   .sort((a, b) => {
//                     return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
//                   })
//                   .map((item, index) => {
//                     return (
//                       <Table.Row 
//                         key={item.id}
//                         className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
//                           index === items.length - 1 ? 'border-b-0' : ''
//                         }`}
//                       >
//                         <Item
//                           item={item}
//                           currencyCode={cart?.currency_code}
//                         />
//                       </Table.Row>
//                     )
//                   })}
//               </Table.Body>
//             </Table>
//           </div>

//           {/* Cart Items - Mobile Card View */}
//           <div className="block md:hidden space-y-4">
//             {items
//               .sort((a, b) => {
//                 return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
//               })
//               .map((item) => {
//                 return (
//                   <div
//                     key={item.id}
//                     className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow duration-300"
//                   >
//                     <Item
//                       item={item}
//                       currencyCode={cart?.currency_code}
//                     />
//                   </div>
//                 )
//               })}
//           </div>
//         </>
//       )}

//       {/* Loading State */}
//       {!items && (
//         <div className="space-y-4">
//           <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
//             <Table>
//               <Table.Header className="border-t-0 bg-gray-50">
//                 <Table.Row className="text-gray-700 font-semibold">
//                   <Table.HeaderCell className="!pl-6 py-4">Product</Table.HeaderCell>
//                   <Table.HeaderCell className="py-4">Quantity</Table.HeaderCell>
//                   <Table.HeaderCell className="py-4">Price</Table.HeaderCell>
//                   <Table.HeaderCell className="!pr-6 py-4">Total</Table.HeaderCell>
//                 </Table.Row>
//               </Table.Header>
//               <Table.Body>
//                 {repeat(3).map((i) => (
//                   <SkeletonLineItem key={i} />
//                 ))}
//               </Table.Body>
//             </Table>
//           </div>

//           {/* Mobile loading cards */}
//           <div className="block md:hidden space-y-4">
//             {repeat(3).map((i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-xl shadow-sm border border-gray-200 p-4"
//               >
//                 <SkeletonLineItem />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Cart Actions Footer */}
//       {/* {items && itemCount > 0 && (
//         <div className="mt-8 bg-gray-50 rounded-2xl p-6">
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
//             <div className="text-center sm:text-left">
//               <p className="text-gray-600 text-sm">
//                 Need help? <a href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">Contact support</a>
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-3">
//               <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200 font-medium">
//                 Continue Shopping
//               </button>
//               <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium">
//                 Proceed to Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       )} */}
//     </div>
//   )
// }

// export default ItemsTemplate

import repeat from "@lib/util/repeat"
import { HttpTypes } from "@medusajs/types"
import { Heading, Table } from "@medusajs/ui"
import { FiShoppingCart, FiPackage } from "react-icons/fi"

import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  cart?: HttpTypes.StoreCart
}

// Mobile Item Component (without table structure)
const MobileCartItem = ({ item, currencyCode }) => {
  return (
    <div className="flex space-x-4">
      {/* Product Image */}
      <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
        <img 
          src={item.thumbnail} 
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Product Details */}
      <div className="flex-1 min-w-0 space-y-3">
        <div>
          <h3 className="text-sm font-medium text-gray-900 truncate">
            {item.title}
          </h3>
          {item.variant?.title && (
            <p className="text-sm text-gray-500 mt-1">
              {item.variant.title}
            </p>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-600">Qty:</span>
            <div className="flex items-center space-x-2">
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <span className="text-lg leading-none">−</span>
              </button>
              <span className="w-8 text-center text-sm font-medium">
                {item.quantity}
              </span>
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <span className="text-lg leading-none">+</span>
              </button>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-sm text-gray-500">
              {formatPrice(item.unit_price, currencyCode)} each
            </div>
            <div className="text-lg font-bold text-gray-900">
              {formatPrice(item.total, currencyCode)}
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <button className="text-red-600 text-sm hover:text-red-800 transition-colors">
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

// Helper function for price formatting
const formatPrice = (amount, currencyCode) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currencyCode?.toUpperCase() || 'INR',
  }).format((amount || 0) / 100)
}

const ItemsTemplate = ({ cart }: ItemsTemplateProps) => {
  const items = cart?.items
  const itemCount = items?.length || 0

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <FiShoppingCart className="w-6 h-6 text-white" />
            </div>
            <div>
              <Heading className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Shopping Cart
              </Heading>
              <p className="text-gray-600 mt-1">
                {itemCount > 0 ? `${itemCount} item${itemCount !== 1 ? 's' : ''} in your cart` : 'Your cart is empty'}
              </p>
            </div>
          </div>
          
          {itemCount > 0 && (
            <div className="bg-blue-50 rounded-lg px-4 py-2">
              <div className="text-sm text-blue-600 font-medium">
                Items: {itemCount}
              </div>
            </div>
          )}
        </div>

        {/* Progress indicator */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-1/3"></div>
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span className="font-medium text-blue-600">Cart</span>
          <span>Checkout</span>
          <span>Complete</span>
        </div>
      </div>

      {/* Empty Cart State */}
      {(!items || itemCount === 0) && (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiPackage className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Your cart is empty</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
          </p>
          <a
            href="/store"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Shopping
          </a>
        </div>
      )}

      {/* Cart Items - Desktop Table View */}
      {items && itemCount > 0 && (
        <>
          <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <Table>
              <Table.Header className="border-t-0 bg-gray-50">
                <Table.Row className="text-gray-700 font-semibold">
                  <Table.HeaderCell className="!pl-6 py-4">
                    <div className="text-sm font-medium text-gray-900">Product</div>
                  </Table.HeaderCell>
                  <Table.HeaderCell className="py-4">
                    <div className="text-sm font-medium text-gray-900 text-center">Quantity</div>
                  </Table.HeaderCell>
                  <Table.HeaderCell className="py-4">
                    <div className="text-sm font-medium text-gray-900 text-center">Price</div>
                  </Table.HeaderCell>
                  <Table.HeaderCell className="!pr-6 py-4">
                    <div className="text-sm font-medium text-gray-900 text-right">Total</div>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {items
                  .sort((a, b) => {
                    return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
                  })
                  .map((item, index) => {
                    return (
                      <Table.Row 
                        key={item.id}
                        className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
                          index === items.length - 1 ? 'border-b-0' : ''
                        }`}
                      >
                        <Item
                          item={item}
                          currencyCode={cart?.currency_code}
                        />
                      </Table.Row>
                    )
                  })}
              </Table.Body>
            </Table>
          </div>

          {/* Cart Items - Mobile Card View (FIXED) */}
          <div className="block md:hidden space-y-4">
            {items
              .sort((a, b) => {
                return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
              })
              .map((item) => {
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow duration-300"
                  >
                    {/* ✅ Using mobile-specific component instead of table-based Item */}
                    <MobileCartItem
                      item={item}
                      currencyCode={cart?.currency_code}
                    />
                  </div>
                )
              })}
          </div>
        </>
      )}

      {/* Loading State */}
      {!items && (
        <div className="space-y-4">
          <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <Table>
              <Table.Header className="border-t-0 bg-gray-50">
                <Table.Row className="text-gray-700 font-semibold">
                  <Table.HeaderCell className="!pl-6 py-4">Product</Table.HeaderCell>
                  <Table.HeaderCell className="py-4">Quantity</Table.HeaderCell>
                  <Table.HeaderCell className="py-4">Price</Table.HeaderCell>
                  <Table.HeaderCell className="!pr-6 py-4">Total</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {repeat(3).map((i) => (
                  <SkeletonLineItem key={i} />
                ))}
              </Table.Body>
            </Table>
          </div>

          {/* Mobile loading cards */}
          <div className="block md:hidden space-y-4">
            {repeat(3).map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-4"
              >
                <div className="flex space-x-4 animate-pulse">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
                  <div className="flex-1 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    <div className="flex justify-between">
                      <div className="h-8 bg-gray-200 rounded w-24"></div>
                      <div className="h-6 bg-gray-200 rounded w-16"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ItemsTemplate