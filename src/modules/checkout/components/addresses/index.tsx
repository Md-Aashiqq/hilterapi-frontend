// "use client"

// import { setAddresses } from "@lib/data/cart"
// import compareAddresses from "@lib/util/compare-addresses"
// import { CheckCircleSolid } from "@medusajs/icons"
// import { HttpTypes } from "@medusajs/types"
// import { Heading, Text, useToggleState } from "@medusajs/ui"
// import Divider from "@modules/common/components/divider"
// import Spinner from "@modules/common/icons/spinner"
// import { usePathname, useRouter, useSearchParams } from "next/navigation"
// import { useActionState } from "react"
// import BillingAddress from "../billing_address"
// import ErrorMessage from "../error-message"
// import ShippingAddress from "../shipping-address"
// import { SubmitButton } from "../submit-button"

// const Addresses = ({
//   cart,
//   customer,
// }: {
//   cart: HttpTypes.StoreCart | null
//   customer: HttpTypes.StoreCustomer | null
// }) => {
//   const searchParams = useSearchParams()
//   const router = useRouter()
//   const pathname = usePathname()

//   const isOpen = searchParams.get("step") === "address"

//   const { state: sameAsBilling, toggle: toggleSameAsBilling } = useToggleState(
//     cart?.shipping_address && cart?.billing_address
//       ? compareAddresses(cart?.shipping_address, cart?.billing_address)
//       : true
//   )

//   const handleEdit = () => {
//     router.push(pathname + "?step=address")
//   }

//   const [message, formAction] = useActionState(setAddresses, null)

//   return (
//     <div className="bg-white">
//       <div className="flex flex-row items-center justify-between mb-6">
//         <Heading
//           level="h2"
//           className="flex flex-row text-3xl-regular gap-x-2 items-baseline"
//         >
//           Shipping Address
//           {!isOpen && <CheckCircleSolid />}
//         </Heading>
//         {!isOpen && cart?.shipping_address && (
//           <Text>
//             <button
//               onClick={handleEdit}
//               className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
//               data-testid="edit-address-button"
//             >
//               Edit
//             </button>
//           </Text>
//         )}
//       </div>
//       {isOpen ? (
//         <form action={formAction}>
//           <div className="pb-8">
//             <ShippingAddress
//               customer={customer}
//               checked={sameAsBilling}
//               onChange={toggleSameAsBilling}
//               cart={cart}
//             />

//             {!sameAsBilling && (
//               <div>
//                 <Heading
//                   level="h2"
//                   className="text-3xl-regular gap-x-4 pb-6 pt-8"
//                 >
//                   Billing address
//                 </Heading>

//                 <BillingAddress cart={cart} />
//               </div>
//             )}
//             <SubmitButton className="mt-6" data-testid="submit-address-button">
//               Continue to delivery
//             </SubmitButton>
//             <ErrorMessage error={message} data-testid="address-error-message" />
//           </div>
//         </form>
//       ) : (
//         <div>
//           <div className="text-small-regular">
//             {cart && cart.shipping_address ? (
//               <div className="flex items-start gap-x-8">
//                 <div className="flex items-start gap-x-1 w-full">
//                   <div
//                     className="flex flex-col w-1/3"
//                     data-testid="shipping-address-summary"
//                   >
//                     <Text className="txt-medium-plus text-ui-fg-base mb-1">
//                       Shipping Address
//                     </Text>
//                     <Text className="txt-medium text-ui-fg-subtle">
//                       {cart.shipping_address.first_name}{" "}
//                       {cart.shipping_address.last_name}
//                     </Text>
//                     <Text className="txt-medium text-ui-fg-subtle">
//                       {cart.shipping_address.address_1}{" "}
//                       {cart.shipping_address.address_2}
//                     </Text>
//                     <Text className="txt-medium text-ui-fg-subtle">
//                       {cart.shipping_address.postal_code},{" "}
//                       {cart.shipping_address.city}
//                     </Text>
//                     <Text className="txt-medium text-ui-fg-subtle">
//                       {cart.shipping_address.country_code?.toUpperCase()}
//                     </Text>
//                   </div>

//                   <div
//                     className="flex flex-col w-1/3 "
//                     data-testid="shipping-contact-summary"
//                   >
//                     <Text className="txt-medium-plus text-ui-fg-base mb-1">
//                       Contact
//                     </Text>
//                     <Text className="txt-medium text-ui-fg-subtle">
//                       {cart.shipping_address.phone}
//                     </Text>
//                     <Text className="txt-medium text-ui-fg-subtle">
//                       {cart.email}
//                     </Text>
//                   </div>

//                   <div
//                     className="flex flex-col w-1/3"
//                     data-testid="billing-address-summary"
//                   >
//                     <Text className="txt-medium-plus text-ui-fg-base mb-1">
//                       Billing Address
//                     </Text>

//                     {sameAsBilling ? (
//                       <Text className="txt-medium text-ui-fg-subtle">
//                         Billing- and delivery address are the same.
//                       </Text>
//                     ) : (
//                       <>
//                         <Text className="txt-medium text-ui-fg-subtle">
//                           {cart.billing_address?.first_name}{" "}
//                           {cart.billing_address?.last_name}
//                         </Text>
//                         <Text className="txt-medium text-ui-fg-subtle">
//                           {cart.billing_address?.address_1}{" "}
//                           {cart.billing_address?.address_2}
//                         </Text>
//                         <Text className="txt-medium text-ui-fg-subtle">
//                           {cart.billing_address?.postal_code},{" "}
//                           {cart.billing_address?.city}
//                         </Text>
//                         <Text className="txt-medium text-ui-fg-subtle">
//                           {cart.billing_address?.country_code?.toUpperCase()}
//                         </Text>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 <Spinner />
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//       <Divider className="mt-8" />
//     </div>
//   )
// }

// export default Addresses

"use client"

import { setAddresses } from "@lib/data/cart"
import compareAddresses from "@lib/util/compare-addresses"
import { CheckCircleSolid } from "@medusajs/icons"
import { HttpTypes } from "@medusajs/types"
import { Heading, Text, useToggleState } from "@medusajs/ui"
import Divider from "@modules/common/components/divider"
import Spinner from "@modules/common/icons/spinner"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useActionState, useState } from "react"
import { FiMapPin, FiPhone, FiMail, FiEdit3, FiCheck, FiTruck } from "react-icons/fi"
import BillingAddress from "../billing_address"
import ErrorMessage from "../error-message"
import ShippingAddress from "../shipping-address"
import { SubmitButton } from "../submit-button"

// Loading Modal Component
const LoadingModal = ({ isOpen, message }: { isOpen: boolean; message: string }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Processing...</h3>
          <p className="text-gray-600">{message}</p>
        </div>
      </div>
    </div>
  )
}

const Addresses = ({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isOpen = searchParams.get("step") === "address"

  const { state: sameAsBilling, toggle: toggleSameAsBilling } = useToggleState(
    cart?.shipping_address && cart?.billing_address
      ? compareAddresses(cart?.shipping_address, cart?.billing_address)
      : true
  )

  const handleEdit = () => {
    router.push(pathname + "?step=address")
  }

  const [message, formAction] = useActionState(setAddresses, null)

  const handleFormSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      await formAction(formData)
      // Add a small delay to show the loading state
      setTimeout(() => {
        setIsSubmitting(false)
      }, 1500)
    } catch (error) {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white">
      {/* Loading Modal */}
      <LoadingModal 
        isOpen={isSubmitting} 
        message="Setting up your delivery address and continuing to shipping options..." 
      />

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                !isOpen && cart?.shipping_address 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'
              }`}>
                {!isOpen && cart?.shipping_address ? (
                  <FiCheck className="w-6 h-6" />
                ) : (
                  <FiMapPin className="w-6 h-6" />
                )}
              </div>
              <div>
                <Heading level="h2" className="text-2xl font-bold text-gray-900">
                  Shipping Address
                </Heading>
                <p className="text-sm text-gray-600 mt-1">
                  {!isOpen && cart?.shipping_address 
                    ? 'Address confirmed' 
                    : 'Enter your delivery information'
                  }
                </p>
              </div>
            </div>
            
            {!isOpen && cart?.shipping_address && (
              <button
                onClick={handleEdit}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-gray-700 font-medium"
                data-testid="edit-address-button"
              >
                <FiEdit3 className="w-4 h-4" />
                Edit Address
              </button>
            )}
          </div>
        </div>

        <div className="p-2">
          {isOpen ? (
            <form action={handleFormSubmit}>
              <div className="space-y-8">
                {/* Shipping Address Form */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <FiTruck className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Delivery Information</h3>
                  </div>
                  <ShippingAddress
                    customer={customer}
                    checked={sameAsBilling}
                    onChange={toggleSameAsBilling}
                    cart={cart}
                  />
                </div>

                {/* Billing Address Form (if different) */}
                {!sameAsBilling && (
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <FiMapPin className="w-5 h-5 text-purple-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Billing Address</h3>
                    </div>
                    <BillingAddress cart={cart} />
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <SubmitButton 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    data-testid="submit-address-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      'Continue to Delivery'
                    )}
                  </SubmitButton>
                </div>

                {/* Error Message */}
                <ErrorMessage error={message} data-testid="address-error-message" />
              </div>
            </form>
          ) : (
            /* Address Summary View */
            <div>
              {cart && cart.shipping_address ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  {/* Shipping Address Summary */}
                  <div className="bg-blue-50 rounded-xl p-6" data-testid="shipping-address-summary">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <FiMapPin className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900">Shipping Address</h3>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p className="font-medium text-gray-900">
                        {cart.shipping_address.first_name} {cart.shipping_address.last_name}
                      </p>
                      <p>{cart.shipping_address.address_1}</p>
                      {cart.shipping_address.address_2 && <p>{cart.shipping_address.address_2}</p>}
                      <p>
                        {cart.shipping_address.postal_code}, {cart.shipping_address.city}
                      </p>
                      <p className="font-medium">
                        {cart.shipping_address.country_code?.toUpperCase()}
                      </p>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-green-50 rounded-xl p-6" data-testid="shipping-contact-summary">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                        <FiPhone className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900">Contact Info</h3>
                    </div>
                    <div className="space-y-3">
                      {cart.shipping_address.phone && (
                        <div className="flex items-center gap-2 text-sm">
                          <FiPhone className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600">{cart.shipping_address.phone}</span>
                        </div>
                      )}
                      {cart.email && (
                        <div className="flex items-center gap-2 text-sm">
                          <FiMail className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600">{cart.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Billing Address Summary */}
                  <div className="bg-purple-50 rounded-xl p-6" data-testid="billing-address-summary">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                        <FiMapPin className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900">Billing Address</h3>
                    </div>
                    
                    {sameAsBilling ? (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FiCheck className="w-4 h-4 text-green-500" />
                        <span>Same as shipping address</span>
                      </div>
                    ) : (
                      <div className="space-y-2 text-sm text-gray-600">
                        <p className="font-medium text-gray-900">
                          {cart.billing_address?.first_name} {cart.billing_address?.last_name}
                        </p>
                        <p>{cart.billing_address?.address_1}</p>
                        {cart.billing_address?.address_2 && <p>{cart.billing_address?.address_2}</p>}
                        <p>
                          {cart.billing_address?.postal_code}, {cart.billing_address?.city}
                        </p>
                        <p className="font-medium">
                          {cart.billing_address?.country_code?.toUpperCase()}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                /* Loading State */
                <div className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Spinner className="w-6 h-6 text-gray-400" />
                    </div>
                    <p className="text-gray-600">Loading address information...</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <Divider className="my-8" />
    </div>
  )
}

export default Addresses
