// "use client"

// import { Table, Text, clx } from "@medusajs/ui"
// import { updateLineItem } from "@lib/data/cart"
// import { HttpTypes } from "@medusajs/types"
// import CartItemSelect from "@modules/cart/components/cart-item-select"
// import ErrorMessage from "@modules/checkout/components/error-message"
// import DeleteButton from "@modules/common/components/delete-button"
// import LineItemOptions from "@modules/common/components/line-item-options"
// import LineItemPrice from "@modules/common/components/line-item-price"
// import LineItemUnitPrice from "@modules/common/components/line-item-unit-price"
// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import Spinner from "@modules/common/icons/spinner"
// import Thumbnail from "@modules/products/components/thumbnail"
// import { useState } from "react"

// type ItemProps = {
//   item: HttpTypes.StoreCartLineItem
//   type?: "full" | "preview"
//   currencyCode: string
// }

// const Item = ({ item, type = "full", currencyCode }: ItemProps) => {
//   const [updating, setUpdating] = useState(false)
//   const [error, setError] = useState<string | null>(null)

//   const changeQuantity = async (quantity: number) => {
//     setError(null)
//     setUpdating(true)

//     await updateLineItem({
//       lineId: item.id,
//       quantity,
//     })
//       .catch((err) => {
//         setError(err.message)
//       })
//       .finally(() => {
//         setUpdating(false)
//       })
//   }

//   // TODO: Update this to grab the actual max inventory
//   const maxQtyFromInventory = 10
//   const maxQuantity = item.variant?.manage_inventory ? 10 : maxQtyFromInventory

//   return (
//     <Table.Row className="w-full" data-testid="product-row">
//       <Table.Cell className="!pl-0 p-4 w-24">
//         <LocalizedClientLink
//           href={`/products/${item.product_handle}`}
//           className={clx("flex", {
//             "w-16": type === "preview",
//             "small:w-24 w-12": type === "full",
//           })}
//         >
//           <Thumbnail
//             thumbnail={item.thumbnail}
//             images={item.variant?.product?.images}
//             size="square"
//           />
//         </LocalizedClientLink>
//       </Table.Cell>

//       <Table.Cell className="text-left">
//         <Text
//           className="txt-medium-plus text-ui-fg-base"
//           data-testid="product-title"
//         >
//           {item.product_title}
//         </Text>
//         <LineItemOptions variant={item.variant} data-testid="product-variant" />
//       </Table.Cell>

//       {type === "full" && (
//         <Table.Cell>
//           <div className="flex gap-2 items-center w-28">
//             <DeleteButton id={item.id} data-testid="product-delete-button" />
//             <CartItemSelect
//               value={item.quantity}
//               onChange={(value) => changeQuantity(parseInt(value.target.value))}
//               className="w-14 h-10 p-4"
//               data-testid="product-select-button"
//             >
//               {/* TODO: Update this with the v2 way of managing inventory */}
//               {Array.from(
//                 {
//                   length: Math.min(maxQuantity, 10),
//                 },
//                 (_, i) => (
//                   <option value={i + 1} key={i}>
//                     {i + 1}
//                   </option>
//                 )
//               )}

//               <option value={1} key={1}>
//                 1
//               </option>
//             </CartItemSelect>
//             {updating && <Spinner />}
//           </div>
//           <ErrorMessage error={error} data-testid="product-error-message" />
//         </Table.Cell>
//       )}

//       {type === "full" && (
//         <Table.Cell className="hidden small:table-cell">
//           <LineItemUnitPrice
//             item={item}
//             style="tight"
//             currencyCode={currencyCode}
//           />
//         </Table.Cell>
//       )}

//       <Table.Cell className="!pr-0">
//         <span
//           className={clx("!pr-0", {
//             "flex flex-col items-end h-full justify-center": type === "preview",
//           })}
//         >
//           {type === "preview" && (
//             <span className="flex gap-x-1 ">
//               <Text className="text-ui-fg-muted">{item.quantity}x </Text>
//               <LineItemUnitPrice
//                 item={item}
//                 style="tight"
//                 currencyCode={currencyCode}
//               />
//             </span>
//           )}
//           <LineItemPrice
//             item={item}
//             style="tight"
//             currencyCode={currencyCode}
//           />
//         </span>
//       </Table.Cell>
//     </Table.Row>
//   )
// }

// export default Item


// "use client"

// import { Table, Text, clx } from "@medusajs/ui"
// import { updateLineItem } from "@lib/data/cart"
// import { HttpTypes } from "@medusajs/types"
// import CartItemSelect from "@modules/cart/components/cart-item-select"
// import ErrorMessage from "@modules/checkout/components/error-message"
// import DeleteButton from "@modules/common/components/delete-button"
// import LineItemOptions from "@modules/common/components/line-item-options"
// import LineItemPrice from "@modules/common/components/line-item-price"
// import LineItemUnitPrice from "@modules/common/components/line-item-unit-price"
// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import Spinner from "@modules/common/icons/spinner"
// import Thumbnail from "@modules/products/components/thumbnail"
// import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi"
// import { useState } from "react"

// type ItemProps = {
//   item: HttpTypes.StoreCartLineItem
//   type?: "full" | "preview"
//   currencyCode: string
// }

// const Item = ({ item, type = "full", currencyCode }: ItemProps) => {
//   const [updating, setUpdating] = useState(false)
//   const [error, setError] = useState<string | null>(null)

//   const changeQuantity = async (quantity: number) => {
//     if (quantity < 1) return
    
//     setError(null)
//     setUpdating(true)

//     await updateLineItem({
//       lineId: item.id,
//       quantity,
//     })
//       .catch((err) => {
//         setError(err.message)
//       })
//       .finally(() => {
//         setUpdating(false)
//       })
//   }

//   const maxQtyFromInventory = 10
//   const maxQuantity = item.variant?.manage_inventory ? 10 : maxQtyFromInventory

//   // Desktop Table View
//   if (type === "full") {
//     return (
//       <>
//         {/* Desktop Table Row - Hidden on Mobile */}
//         <Table.Cell className="!pl-6 py-4 hidden md:table-cell">
//           <div className="flex items-center gap-4">
//             <LocalizedClientLink
//               href={`/products/${item.product_handle}`}
//               className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gray-100 hover:opacity-80 transition-opacity"
//             >
//               <Thumbnail
//                 thumbnail={item.thumbnail}
//                 images={item.variant?.product?.images}
//                 size="square"
//                 className="w-full h-full object-cover"
//               />
//             </LocalizedClientLink>
            
//             <div className="flex-1 min-w-0">
//               <LocalizedClientLink
//                 href={`/products/${item.product_handle}`}
//                 className="block hover:text-blue-600 transition-colors"
//               >
//                 <Text className="font-semibold text-gray-900 mb-1 line-clamp-2" data-testid="product-title">
//                   {item.product_title}
//                 </Text>
//               </LocalizedClientLink>
//               <LineItemOptions variant={item.variant} data-testid="product-variant" />
//             </div>
//           </div>
//         </Table.Cell>

//         <Table.Cell className="py-4 text-center hidden md:table-cell">
//           <div className="flex items-center justify-center gap-2">
//             <div className="flex items-center border border-gray-200 rounded-lg bg-white">
//               <button
//                 onClick={() => changeQuantity(item.quantity - 1)}
//                 disabled={item.quantity <= 1 || updating}
//                 className="p-2 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <FiMinus className="w-4 h-4" />
//               </button>
              
//               <span className="px-3 py-2 text-center font-medium min-w-[3rem]">
//                 {updating ? (
//                   <div className="flex justify-center">
//                     <Spinner className="w-4 h-4" />
//                   </div>
//                 ) : (
//                   item.quantity
//                 )}
//               </span>
              
//               <button
//                 onClick={() => changeQuantity(item.quantity + 1)}
//                 disabled={item.quantity >= maxQuantity || updating}
//                 className="p-2 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <FiPlus className="w-4 h-4" />
//               </button>
//             </div>
            
//             <DeleteButton 
//               id={item.id} 
//               className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
//               data-testid="product-delete-button"
//             />
//               {/* <FiTrash2 className="w-4 h-4" /> */}
//             {/* </DeleteButton> */}
//           </div>
//           {error && (
//             <ErrorMessage error={error} className="mt-2" data-testid="product-error-message" />
//           )}
//         </Table.Cell>

//         <Table.Cell className="py-4 text-center hidden md:table-cell">
//           <LineItemUnitPrice
//             item={item}
//             style="tight"
//             currencyCode={currencyCode}
//             className="text-gray-600"
//           />
//         </Table.Cell>

//         <Table.Cell className="!pr-6 py-4 text-right hidden md:table-cell">
//           <LineItemPrice
//             item={item}
//             style="tight"
//             currencyCode={currencyCode}
//             className="font-semibold text-gray-900"
//           />
//         </Table.Cell>

//         {/* Mobile Card Layout - Only visible on mobile */}
//         <div className="block md:hidden w-full">
//           <div className="flex gap-4 p-4">
//             {/* Product Image */}
//             <LocalizedClientLink
//               href={`/products/${item.product_handle}`}
//               className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gray-100"
//             >
//               <Thumbnail
//                 thumbnail={item.thumbnail}
//                 images={item.variant?.product?.images}
//                 size="square"
//                 className="w-full h-full object-cover"
//               />
//             </LocalizedClientLink>

//             {/* Product Details */}
//             <div className="flex-1 min-w-0">
//               <LocalizedClientLink
//                 href={`/products/${item.product_handle}`}
//                 className="block hover:text-blue-600 transition-colors"
//               >
//                 <Text className="font-semibold text-gray-900 mb-1 line-clamp-2" data-testid="product-title">
//                   {item.product_title}
//                 </Text>
//               </LocalizedClientLink>
              
//               <div className="mb-3">
//                 <LineItemOptions variant={item.variant} data-testid="product-variant" />
//               </div>

//               {/* Price and Total */}
//               <div className="flex justify-between items-center mb-3">
//                 <div className="text-sm text-gray-600">
//                   <LineItemUnitPrice
//                     item={item}
//                     style="tight"
//                     currencyCode={currencyCode}
//                   />
//                   <span className="mx-1">×</span>
//                   <span>{item.quantity}</span>
//                 </div>
//                 <div className="font-semibold text-gray-900">
//                   <LineItemPrice
//                     item={item}
//                     style="tight"
//                     currencyCode={currencyCode}
//                   />
//                 </div>
//               </div>

//               {/* Quantity Controls */}
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center border border-gray-200 rounded-lg bg-white">
//                   <button
//                     onClick={() => changeQuantity(item.quantity - 1)}
//                     disabled={item.quantity <= 1 || updating}
//                     className="p-2 hover:bg-gray-50 transition-colors disabled:opacity-50"
//                   >
//                     <FiMinus className="w-3 h-3" />
//                   </button>
                  
//                   <span className="px-3 py-1 text-center font-medium min-w-[2.5rem] text-sm">
//                     {updating ? (
//                       <Spinner className="w-3 h-3" />
//                     ) : (
//                       item.quantity
//                     )}
//                   </span>
                  
//                   <button
//                     onClick={() => changeQuantity(item.quantity + 1)}
//                     disabled={item.quantity >= maxQuantity || updating}
//                     className="p-2 hover:bg-gray-50 transition-colors disabled:opacity-50"
//                   >
//                     <FiPlus className="w-3 h-3" />
//                   </button>
//                 </div>
                
//                 <DeleteButton 
//                   id={item.id} 
//                   className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
//                   data-testid="product-delete-button"
//                 />
//                   {/* <FiTrash2 className="w-4 h-4" />
//                 </DeleteButton> */}
//               </div>

//               {error && (
//                 <ErrorMessage error={error} className="mt-2" data-testid="product-error-message" />
//               )}
//             </div>
//           </div>
//         </div>
//       </>
//     )
//   }

//   // Preview View (for checkout, etc.)
//   return (
//     <Table.Row className="w-full" data-testid="product-row">
//       <Table.Cell className="!pl-0 p-4">
//         <LocalizedClientLink
//           href={`/products/${item.product_handle}`}
//           className="flex w-16"
//         >
//           <Thumbnail
//             thumbnail={item.thumbnail}
//             images={item.variant?.product?.images}
//             size="square"
//             className="rounded-lg"
//           />
//         </LocalizedClientLink>
//       </Table.Cell>

//       <Table.Cell className="text-left">
//         <Text className="font-medium text-gray-900 mb-1" data-testid="product-title">
//           {item.product_title}
//         </Text>
//         <LineItemOptions variant={item.variant} data-testid="product-variant" />
//       </Table.Cell>

//       <Table.Cell className="!pr-0 text-right">
//         <div className="flex flex-col items-end">
//           <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
//             <Text>{item.quantity}x</Text>
//             <LineItemUnitPrice
//               item={item}
//               style="tight"
//               currencyCode={currencyCode}
//             />
//           </div>
//           <LineItemPrice
//             item={item}
//             style="tight"
//             currencyCode={currencyCode}
//             className="font-semibold text-gray-900"
//           />
//         </div>
//       </Table.Cell>
//     </Table.Row>
//   )
// }

// export default Item

"use client"

import { Table, Text, clx } from "@medusajs/ui"
import { updateLineItem } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"
import CartItemSelect from "@modules/cart/components/cart-item-select"
import ErrorMessage from "@modules/checkout/components/error-message"
import DeleteButton from "@modules/common/components/delete-button"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import LineItemUnitPrice from "@modules/common/components/line-item-unit-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Spinner from "@modules/common/icons/spinner"
import Thumbnail from "@modules/products/components/thumbnail"
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi"
import { useState } from "react"

type ItemProps = {
  item: HttpTypes.StoreCartLineItem
  type?: "full" | "preview"
  currencyCode: string
}

const Item = ({ item, type = "full", currencyCode }: ItemProps) => {
  const [updating, setUpdating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const changeQuantity = async (quantity: number) => {
    if (quantity < 1) return
    
    setError(null)
    setUpdating(true)

    await updateLineItem({
      lineId: item.id,
      quantity,
    })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setUpdating(false)
      })
  }

  const maxQtyFromInventory = 10
  const maxQuantity = item.variant?.manage_inventory ? 10 : maxQtyFromInventory

  // Preview View (for checkout summary, order review, etc.)
  if (type === "preview") {
    return (
      <>
        {/* Desktop Preview - Two Column Layout */}
        <Table.Cell className="py-4 px-4 hidden md:table-cell">
          <div className="flex items-center gap-4">
            <LocalizedClientLink
              href={`/products/${item.product_handle}`}
              className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-100 hover:opacity-80 transition-opacity"
            >
              <Thumbnail
                thumbnail={item.thumbnail}
                images={item.variant?.product?.images}
                size="square"
                className="w-full h-full object-cover"
              />
            </LocalizedClientLink>
            
            <div className="flex-1 min-w-0">
              <LocalizedClientLink
                href={`/products/${item.product_handle}`}
                className="block hover:text-blue-600 transition-colors"
              >
                <Text className="font-medium text-gray-900 mb-1 line-clamp-2" data-testid="product-title">
                  {item.product_title}
                </Text>
              </LocalizedClientLink>
              <LineItemOptions variant={item.variant} data-testid="product-variant" />
              
              {/* Quantity and Unit Price */}
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                <span className="font-medium">{item.quantity}x</span>
                <LineItemUnitPrice
                  item={item}
                  style="tight"
                  currencyCode={currencyCode}
                />
              </div>
            </div>
          </div>
        </Table.Cell>

        <Table.Cell className="py-4 px-4 text-right hidden md:table-cell">
          <LineItemPrice
            item={item}
            style="tight"
            currencyCode={currencyCode}
            className="font-semibold text-gray-900 text-lg"
          />
        </Table.Cell>

        {/* Mobile Preview - Single Column Card */}
        <div className="block md:hidden w-full">
          <div className="flex items-center gap-4 p-4">
            <LocalizedClientLink
              href={`/products/${item.product_handle}`}
              className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-100"
            >
              <Thumbnail
                thumbnail={item.thumbnail}
                images={item.variant?.product?.images}
                size="square"
                className="w-full h-full object-cover"
              />
            </LocalizedClientLink>
            
            <div className="flex-1 min-w-0">
              <LocalizedClientLink
                href={`/products/${item.product_handle}`}
                className="block hover:text-blue-600 transition-colors"
              >
                <Text className="font-medium text-gray-900 mb-1 line-clamp-2" data-testid="product-title">
                  {item.product_title}
                </Text>
              </LocalizedClientLink>
              <LineItemOptions variant={item.variant} data-testid="product-variant" />
              
              <div className="flex justify-between items-center mt-2">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">{item.quantity}x </span>
                  <LineItemUnitPrice
                    item={item}
                    style="tight"
                    currencyCode={currencyCode}
                  />
                </div>
                <LineItemPrice
                  item={item}
                  style="tight"
                  currencyCode={currencyCode}
                  className="font-semibold text-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  // Full View (for cart management)
  return (
    <>
      {/* Desktop Table Row - Hidden on Mobile */}
      <Table.Cell className="!pl-6 py-4 hidden md:table-cell">
        <div className="flex items-center gap-4">
          <LocalizedClientLink
            href={`/products/${item.product_handle}`}
            className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gray-100 hover:opacity-80 transition-opacity"
          >
            <Thumbnail
              thumbnail={item.thumbnail}
              images={item.variant?.product?.images}
              size="square"
              className="w-full h-full object-cover"
            />
          </LocalizedClientLink>
          
          <div className="flex-1 min-w-0">
            <LocalizedClientLink
              href={`/products/${item.product_handle}`}
              className="block hover:text-blue-600 transition-colors"
            >
              <Text className="font-semibold text-gray-900 mb-1 line-clamp-2" data-testid="product-title">
                {item.product_title}
              </Text>
            </LocalizedClientLink>
            <LineItemOptions variant={item.variant} data-testid="product-variant" />
          </div>
        </div>
      </Table.Cell>

      <Table.Cell className="py-4 text-center hidden md:table-cell">
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center border border-gray-200 rounded-lg bg-white">
            <button
              onClick={() => changeQuantity(item.quantity - 1)}
              disabled={item.quantity <= 1 || updating}
              className="p-2 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiMinus className="w-4 h-4" />
            </button>
            
            <span className="px-3 py-2 text-center font-medium min-w-[3rem]">
              {updating ? (
                <div className="flex justify-center">
                  <Spinner className="w-4 h-4" />
                </div>
              ) : (
                item.quantity
              )}
            </span>
            
            <button
              onClick={() => changeQuantity(item.quantity + 1)}
              disabled={item.quantity >= maxQuantity || updating}
              className="p-2 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiPlus className="w-4 h-4" />
            </button>
          </div>
          
          <DeleteButton 
            id={item.id} 
            className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
            data-testid="product-delete-button"
          />
            {/* <FiTrash2 className="w-4 h-4" />
          </DeleteButton> */}
        </div>
        {error && (
          <ErrorMessage error={error} className="mt-2" data-testid="product-error-message" />
        )}
      </Table.Cell>

      <Table.Cell className="py-4 text-center hidden md:table-cell">
        <LineItemUnitPrice
          item={item}
          style="tight"
          currencyCode={currencyCode}
          className="text-gray-600"
        />
      </Table.Cell>

      <Table.Cell className="!pr-6 py-4 text-right hidden md:table-cell">
        <LineItemPrice
          item={item}
          style="tight"
          currencyCode={currencyCode}
          className="font-semibold text-gray-900"
        />
      </Table.Cell>

      {/* Mobile Card Layout - Only visible on mobile */}
      <div className="block md:hidden w-full">
        <div className="flex gap-4 p-4">
          {/* Product Image */}
          <LocalizedClientLink
            href={`/products/${item.product_handle}`}
            className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gray-100"
          >
            <Thumbnail
              thumbnail={item.thumbnail}
              images={item.variant?.product?.images}
              size="square"
              className="w-full h-full object-cover"
            />
          </LocalizedClientLink>

          {/* Product Details */}
          <div className="flex-1 min-w-0">
            <LocalizedClientLink
              href={`/products/${item.product_handle}`}
              className="block hover:text-blue-600 transition-colors"
            >
              <Text className="font-semibold text-gray-900 mb-1 line-clamp-2" data-testid="product-title">
                {item.product_title}
              </Text>
            </LocalizedClientLink>
            
            <div className="mb-3">
              <LineItemOptions variant={item.variant} data-testid="product-variant" />
            </div>

            {/* Price and Total */}
            <div className="flex justify-between items-center mb-3">
              <div className="text-sm text-gray-600">
                <LineItemUnitPrice
                  item={item}
                  style="tight"
                  currencyCode={currencyCode}
                />
                <span className="mx-1">×</span>
                <span>{item.quantity}</span>
              </div>
              <div className="font-semibold text-gray-900">
                <LineItemPrice
                  item={item}
                  style="tight"
                  currencyCode={currencyCode}
                />
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center border border-gray-200 rounded-lg bg-white">
                <button
                  onClick={() => changeQuantity(item.quantity - 1)}
                  disabled={item.quantity <= 1 || updating}
                  className="p-2 hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                  <FiMinus className="w-3 h-3" />
                </button>
                
                <span className="px-3 py-1 text-center font-medium min-w-[2.5rem] text-sm">
                  {updating ? (
                    <Spinner className="w-3 h-3" />
                  ) : (
                    item.quantity
                  )}
                </span>
                
                <button
                  onClick={() => changeQuantity(item.quantity + 1)}
                  disabled={item.quantity >= maxQuantity || updating}
                  className="p-2 hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                  <FiPlus className="w-3 h-3" />
                </button>
              </div>
              
              <DeleteButton 
                id={item.id} 
                className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                data-testid="product-delete-button"
              />
                {/* <FiTrash2 className="w-4 h-4" />
              </DeleteButton> */}
            </div>

            {error && (
              <ErrorMessage error={error} className="mt-2" data-testid="product-error-message" />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Item