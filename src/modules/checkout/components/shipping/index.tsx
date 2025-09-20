// "use client"

// import { RadioGroup, Radio } from "@headlessui/react"
// import { setShippingMethod } from "@lib/data/cart"
// import { calculatePriceForShippingOption } from "@lib/data/fulfillment"
// import { convertToLocale } from "@lib/util/money"
// import { CheckCircleSolid, Loader } from "@medusajs/icons"
// import { HttpTypes } from "@medusajs/types"
// import { Button, Heading, Text, clx } from "@medusajs/ui"
// import ErrorMessage from "@modules/checkout/components/error-message"
// import Divider from "@modules/common/components/divider"
// import MedusaRadio from "@modules/common/components/radio"
// import { usePathname, useRouter, useSearchParams } from "next/navigation"
// import { useEffect, useState } from "react"

// type ShippingProps = {
//   cart: HttpTypes.StoreCart
//   availableShippingMethods: HttpTypes.StoreCartShippingOption[] | null
// }

// const Shipping: React.FC<ShippingProps> = ({
//   cart,
//   availableShippingMethods,
// }) => {
//   const [isLoading, setIsLoading] = useState(false)
//   const [isLoadingPrices, setIsLoadingPrices] = useState(true)
//   const [calculatedPricesMap, setCalculatedPricesMap] = useState<
//     Record<string, number>
//   >({})
//   const [error, setError] = useState<string | null>(null)
//   const [shippingMethodId, setShippingMethodId] = useState<string | null>(
//     cart.shipping_methods?.at(-1)?.shipping_option_id || null
//   )

//   const searchParams = useSearchParams()
//   const router = useRouter()
//   const pathname = usePathname()

//   const isOpen = searchParams.get("step") === "delivery"

//   useEffect(() => {
//     setIsLoadingPrices(true)

//     if (availableShippingMethods?.length) {
//       const promises = availableShippingMethods
//         .filter((sm) => sm.price_type === "calculated")
//         .map((sm) => calculatePriceForShippingOption(sm.id, cart.id))

//       if (promises.length) {
//         Promise.allSettled(promises).then((res) => {
//           const pricesMap: Record<string, number> = {}
//           res
//             .filter((r) => r.status === "fulfilled")
//             .forEach((p) => (pricesMap[p.value?.id || ""] = p.value?.amount!))

//           setCalculatedPricesMap(pricesMap)
//           setIsLoadingPrices(false)
//         })
//       }
//     }
//   }, [availableShippingMethods])

//   const handleEdit = () => {
//     router.push(pathname + "?step=delivery", { scroll: false })
//   }

//   const handleSubmit = () => {
//     router.push(pathname + "?step=payment", { scroll: false })
//   }

//   const handleSetShippingMethod = async (id: string) => {
//     setError(null)
//     let currentId: string | null = null
//     setIsLoading(true)
//     setShippingMethodId((prev) => {
//       currentId = prev
//       return id
//     })

//     await setShippingMethod({ cartId: cart.id, shippingMethodId: id })
//       .catch((err) => {
//         setShippingMethodId(currentId)
//         setError(err.message)
//       })
//       .finally(() => {
//         setIsLoading(false)
//       })
//   }

//   useEffect(() => {
//     setError(null)
//   }, [isOpen])

//   return (
//     <div className="bg-white">
//       <div className="flex flex-row items-center justify-between mb-6">
//         <Heading
//           level="h2"
//           className={clx(
//             "flex flex-row text-3xl-regular gap-x-2 items-baseline",
//             {
//               "opacity-50 pointer-events-none select-none":
//                 !isOpen && cart.shipping_methods?.length === 0,
//             }
//           )}
//         >
//           Delivery
//           {!isOpen && (cart.shipping_methods?.length ?? 0) > 0 && (
//             <CheckCircleSolid />
//           )}
//         </Heading>
//         {!isOpen &&
//           cart?.shipping_address &&
//           cart?.billing_address &&
//           cart?.email && (
//             <Text>
//               <button
//                 onClick={handleEdit}
//                 className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
//                 data-testid="edit-delivery-button"
//               >
//                 Edit
//               </button>
//             </Text>
//           )}
//       </div>
//       {isOpen ? (
//         <div data-testid="delivery-options-container">
//           <div className="pb-8">
//             <RadioGroup
//               value={shippingMethodId}
//               onChange={handleSetShippingMethod}
//             >
//               {availableShippingMethods?.map((option) => {
//                 const isDisabled =
//                   option.price_type === "calculated" &&
//                   !isLoadingPrices &&
//                   typeof calculatedPricesMap[option.id] !== "number"

//                 return (
//                   <Radio
//                     key={option.id}
//                     value={option.id}
//                     data-testid="delivery-option-radio"
//                     disabled={isDisabled}
//                     className={clx(
//                       "flex items-center justify-between text-small-regular cursor-pointer py-4 border rounded-rounded px-8 mb-2 hover:shadow-borders-interactive-with-active",
//                       {
//                         "border-ui-border-interactive":
//                           option.id === shippingMethodId,
//                         "hover:shadow-brders-none cursor-not-allowed":
//                           isDisabled,
//                       }
//                     )}
//                   >
//                     <div className="flex items-center gap-x-4">
//                       <MedusaRadio checked={option.id === shippingMethodId} />
//                       <span className="text-base-regular">{option.name}</span>
//                     </div>
//                     <span className="justify-self-end text-ui-fg-base">
//                       {option.price_type === "flat" ? (
//                         convertToLocale({
//                           amount: option.amount!,
//                           currency_code: cart?.currency_code,
//                         })
//                       ) : calculatedPricesMap[option.id] ? (
//                         convertToLocale({
//                           amount: calculatedPricesMap[option.id],
//                           currency_code: cart?.currency_code,
//                         })
//                       ) : isLoadingPrices ? (
//                         <Loader />
//                       ) : (
//                         "-"
//                       )}
//                     </span>
//                   </Radio>
//                 )
//               })}
//             </RadioGroup>
//           </div>

//           <ErrorMessage
//             error={error}
//             data-testid="delivery-option-error-message"
//           />

//           <Button
//             size="large"
//             className="mt-6"
//             onClick={handleSubmit}
//             isLoading={isLoading}
//             // disabled={!cart.shipping_methods?.[0]}
//             data-testid="submit-delivery-option-button"
//           >
//             Continue to payment
//           </Button>
//         </div>
//       ) : (
//         <div>
//           <div className="text-small-regular">
//             {cart && (cart.shipping_methods?.length ?? 0) > 0 && (
//               <div className="flex flex-col w-1/3">
//                 <Text className="txt-medium-plus text-ui-fg-base mb-1">
//                   Method
//                 </Text>
//                 <Text className="txt-medium text-ui-fg-subtle">
//                   {cart.shipping_methods?.at(-1)?.name}{" "}
//                   {convertToLocale({
//                     amount: cart.shipping_methods.at(-1)?.amount!,
//                     currency_code: cart?.currency_code,
//                   })}
//                 </Text>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//       <Divider className="mt-8" />
//     </div>
//   )
// }

// export default Shipping


"use client"

import { RadioGroup, Radio } from "@headlessui/react"
import { setShippingMethod } from "@lib/data/cart"
import { calculatePriceForShippingOption } from "@lib/data/fulfillment"
import { convertToLocale } from "@lib/util/money"
import { CheckCircleSolid, Loader } from "@medusajs/icons"
import { HttpTypes } from "@medusajs/types"
import { Button, Heading, Text, clx } from "@medusajs/ui"
import ErrorMessage from "@modules/checkout/components/error-message"
import Divider from "@modules/common/components/divider"
import MedusaRadio from "@modules/common/components/radio"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { FiTruck, FiClock, FiDollarSign, FiEdit3, FiCheck, FiPackage } from "react-icons/fi"

type ShippingProps = {
  cart: HttpTypes.StoreCart
  availableShippingMethods: HttpTypes.StoreCartShippingOption[] | null
}

// Loading Modal Component
const LoadingModal = ({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Processing...</h3>
          <p className="text-gray-600">Proceeding to payment options...</p>
        </div>
      </div>
    </div>
  )
}

const Shipping: React.FC<ShippingProps> = ({
  cart,
  availableShippingMethods,
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingPrices, setIsLoadingPrices] = useState(true)
  const [calculatedPricesMap, setCalculatedPricesMap] = useState<
    Record<string, number>
  >({})
  const [error, setError] = useState<string | null>(null)
  const [shippingMethodId, setShippingMethodId] = useState<string | null>(
    cart.shipping_methods?.at(-1)?.shipping_option_id || null
  )
  const [isSubmitting, setIsSubmitting] = useState(false)

  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const isOpen = searchParams.get("step") === "delivery"
  const hasShippingMethod = (cart.shipping_methods?.length ?? 0) > 0

  useEffect(() => {
    setIsLoadingPrices(true)

    if (availableShippingMethods?.length) {
      const promises = availableShippingMethods
        .filter((sm) => sm.price_type === "calculated")
        .map((sm) => calculatePriceForShippingOption(sm.id, cart.id))

      if (promises.length) {
        Promise.allSettled(promises).then((res) => {
          const pricesMap: Record<string, number> = {}
          res
            .filter((r) => r.status === "fulfilled")
            .forEach((p) => (pricesMap[p.value?.id || ""] = p.value?.amount!))

          setCalculatedPricesMap(pricesMap)
          setIsLoadingPrices(false)
        })
      } else {
        setIsLoadingPrices(false)
      }
    } else {
      setIsLoadingPrices(false)
    }
  }, [availableShippingMethods])

  const handleEdit = () => {
    router.push(pathname + "?step=delivery", { scroll: false })
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      // Add a small delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 1000))
      router.push(pathname + "?step=payment", { scroll: false })
    } catch (error) {
      console.error('Navigation error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSetShippingMethod = async (id: string) => {
    setError(null)
    let currentId: string | null = null
    setIsLoading(true)
    setShippingMethodId((prev) => {
      currentId = prev
      return id
    })

    await setShippingMethod({ cartId: cart.id, shippingMethodId: id })
      .catch((err) => {
        setShippingMethodId(currentId)
        setError(err.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    setError(null)
  }, [isOpen])

  // Get delivery speed for different shipping methods
  const getDeliveryInfo = (methodName: string) => {
    const name = methodName.toLowerCase()
    if (name.includes('express') || name.includes('overnight') || name.includes('next day')) {
      return { speed: 'Express', time: '1-2 days', icon: 'fast' }
    } else if (name.includes('standard') || name.includes('regular')) {
      return { speed: 'Standard', time: '3-5 days', icon: 'standard' }
    } else if (name.includes('economy') || name.includes('slow')) {
      return { speed: 'Economy', time: '5-7 days', icon: 'slow' }
    }
    return { speed: 'Standard', time: '3-5 days', icon: 'standard' }
  }

  return (
    <div className="bg-white">
      {/* Loading Modal */}
      <LoadingModal isOpen={isSubmitting} />

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                !isOpen && hasShippingMethod
                  ? 'bg-green-500 text-white' 
                  : 'bg-gradient-to-br from-green-500 to-blue-600 text-white'
              }`}>
                {!isOpen && hasShippingMethod ? (
                  <FiCheck className="w-6 h-6" />
                ) : (
                  <FiTruck className="w-6 h-6" />
                )}
              </div>
              <div>
                <Heading level="h2" className="text-2xl font-bold text-gray-900">
                  Delivery Options
                </Heading>
                <p className="text-sm text-gray-600 mt-1">
                  {!isOpen && hasShippingMethod
                    ? 'Shipping method selected' 
                    : 'Choose your preferred delivery method'
                  }
                </p>
              </div>
            </div>
            
            {!isOpen && cart?.shipping_address && cart?.billing_address && cart?.email && (
              <button
                onClick={handleEdit}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-gray-700 font-medium"
                data-testid="edit-delivery-button"
              >
                <FiEdit3 className="w-4 h-4" />
                Edit Method
              </button>
            )}
          </div>
        </div>

        <div className="p-6">
          {isOpen ? (
            <div data-testid="delivery-options-container">
              <div className="space-y-4 mb-8">
                <RadioGroup
                  value={shippingMethodId}
                  onChange={handleSetShippingMethod}
                  className="space-y-4"
                >
                  {availableShippingMethods?.map((option) => {
                    const isDisabled =
                      option.price_type === "calculated" &&
                      !isLoadingPrices &&
                      typeof calculatedPricesMap[option.id] !== "number"

                    const deliveryInfo = getDeliveryInfo(option.name)
                    const isSelected = option.id === shippingMethodId

                    return (
                      <Radio
                        key={option.id}
                        value={option.id}
                        data-testid="delivery-option-radio"
                        disabled={isDisabled}
                        className={clx(
                          "flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-200",
                          "hover:shadow-md hover:border-blue-300",
                          {
                            "border-blue-500 bg-blue-50 shadow-md": isSelected,
                            "border-gray-200 bg-white": !isSelected,
                            "opacity-50 cursor-not-allowed hover:border-gray-200 hover:shadow-none": isDisabled,
                          }
                        )}
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <div className="flex items-center">
                            <MedusaRadio checked={isSelected} />
                          </div>
                          
                          <div className="flex items-center gap-4 flex-1">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                              isSelected ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
                            }`}>
                              {deliveryInfo.icon === 'fast' ? (
                                <FiTruck className="w-6 h-6" />
                              ) : deliveryInfo.icon === 'slow' ? (
                                <FiPackage className="w-6 h-6" />
                              ) : (
                                <FiTruck className="w-6 h-6" />
                              )}
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                                <div className="flex-1">
                                  <h3 className="font-semibold text-gray-900 mb-1">
                                    {option.name}
                                  </h3>
                                  <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <FiClock className="w-4 h-4" />
                                    <span>{deliveryInfo.time}</span>
                                    <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
                                      {deliveryInfo.speed}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 ml-4">
                          <FiDollarSign className="w-4 h-4 text-gray-500" />
                          <span className={`font-semibold ${isSelected ? 'text-blue-600' : 'text-gray-900'}`}>
                            {option.price_type === "flat" ? (
                              convertToLocale({
                                amount: option.amount!,
                                currency_code: cart?.currency_code,
                              })
                            ) : calculatedPricesMap[option.id] ? (
                              convertToLocale({
                                amount: calculatedPricesMap[option.id],
                                currency_code: cart?.currency_code,
                              })
                            ) : isLoadingPrices ? (
                              <div className="flex items-center gap-1">
                                <Loader className="w-4 h-4 animate-spin" />
                                <span className="text-sm text-gray-500">Calculating...</span>
                              </div>
                            ) : (
                              <span className="text-gray-400">-</span>
                            )}
                          </span>
                        </div>
                      </Radio>
                    )
                  })}
                </RadioGroup>
              </div>

              {/* Error Message */}
              <ErrorMessage
                error={error}
                data-testid="delivery-option-error-message"
                className="mb-6"
              />

              {/* Continue Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="large"
                  className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  onClick={handleSubmit}
                  isLoading={isLoading || isSubmitting}
                  disabled={isLoading || isSubmitting || !shippingMethodId}
                  data-testid="submit-delivery-option-button"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    'Continue to Payment'
                  )}
                </Button>
              </div>
            </div>
          ) : (
            /* Summary View */
            <div>
              {hasShippingMethod ? (
                <div className="bg-green-50 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <FiTruck className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">Selected Shipping Method</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="font-medium text-gray-900">
                          {cart.shipping_methods?.at(-1)?.name}
                        </span>
                        <span className="text-gray-600">•</span>
                        <span className="font-semibold text-green-600">
                          {convertToLocale({
                            amount: cart.shipping_methods.at(-1)?.amount!,
                            currency_code: cart?.currency_code,
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FiCheck className="w-4 h-4 text-green-500" />
                    <span>Shipping method confirmed</span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiTruck className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-600">No shipping method selected</p>
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

export default Shipping