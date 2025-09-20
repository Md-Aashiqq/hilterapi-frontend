
// "use client"

// import { RadioGroup } from "@headlessui/react"
// import { isStripe as isStripeFunc, paymentInfoMap } from "@lib/constants"
// import { initiatePaymentSession } from "@lib/data/cart"
// import { CheckCircleSolid, CreditCard } from "@medusajs/icons"
// import { Button, Container, Heading, Text, clx } from "@medusajs/ui"
// import ErrorMessage from "@modules/checkout/components/error-message"
// import PaymentContainer, {
//   StripeCardContainer,
// } from "@modules/checkout/components/payment-container"
// import Divider from "@modules/common/components/divider"
// import { usePathname, useRouter, useSearchParams } from "next/navigation"
// import { useCallback, useEffect, useState } from "react"

// const Payment = ({
//   cart,
//   availablePaymentMethods,
// }: {
//   cart: any
//   availablePaymentMethods: any[]
// }) => {
//   const activeSession = cart.payment_collection?.payment_sessions?.find(
//     (paymentSession: any) => paymentSession.status === "pending"
//   )

//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)
//   const [cardBrand, setCardBrand] = useState<string | null>(null)
//   const [cardComplete, setCardComplete] = useState(false)
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
//     activeSession?.provider_id ?? ""
//   )

//   const searchParams = useSearchParams()
//   const router = useRouter()
//   const pathname = usePathname()

//   const isOpen = searchParams.get("step") === "payment"

//   const isStripe = isStripeFunc(selectedPaymentMethod)

//   const setPaymentMethod = async (method: string) => {
//     setError(null)
//     setSelectedPaymentMethod(method)
//     if (isStripeFunc(method)) {
//       await initiatePaymentSession(cart, {
//         provider_id: method,
//       })
//     }
//   }

//   const paidByGiftcard =
//     cart?.gift_cards && cart?.gift_cards?.length > 0 && cart?.total === 0

//   const paymentReady =
//     (activeSession && cart?.shipping_methods.length !== 0) || paidByGiftcard

//   const createQueryString = useCallback(
//     (name: string, value: string) => {
//       const params = new URLSearchParams(searchParams)
//       params.set(name, value)

//       return params.toString()
//     },
//     [searchParams]
//   )

//   const handleEdit = () => {
//     router.push(pathname + "?" + createQueryString("step", "payment"), {
//       scroll: false,
//     })
//   }

//   const handleSubmit = async () => {
//     setIsLoading(true)
//     try {
//       const shouldInputCard =
//         isStripeFunc(selectedPaymentMethod) && !activeSession

//       const checkActiveSession =
//         activeSession?.provider_id === selectedPaymentMethod

//       if (!checkActiveSession) {
//         await initiatePaymentSession(cart, {
//           provider_id: selectedPaymentMethod,
//         })
//       }

//       if (!shouldInputCard) {
//         return router.push(
//           pathname + "?" + createQueryString("step", "review"),
//           {
//             scroll: false,
//           }
//         )
//       }


//     } catch (err: any) {
//       setError(err.message)
//     } finally {
//       setIsLoading(false)
//     }
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
//                 !isOpen && !paymentReady,
//             }
//           )}
//         >
//           Payment
//           {!isOpen && paymentReady && <CheckCircleSolid />}
//         </Heading>
//         {!isOpen && paymentReady && (
//           <Text>
//             <button
//               onClick={handleEdit}
//               className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
//               data-testid="edit-payment-button"
//             >
//               Edit
//             </button>
//           </Text>
//         )}
//       </div>
//       <div>
//         <div className={isOpen ? "block" : "hidden"}>
//           {!paidByGiftcard && availablePaymentMethods?.length && (
//             <>
//               <RadioGroup
//                 value={selectedPaymentMethod}
//                 onChange={(value: string) => setPaymentMethod(value)}
//               >
//                 {availablePaymentMethods.map((paymentMethod) => (
//                   <div key={paymentMethod.id}>
//                     {isStripeFunc(paymentMethod.id) ? (
//                       <StripeCardContainer
//                         paymentProviderId={paymentMethod.id}
//                         selectedPaymentOptionId={selectedPaymentMethod}
//                         paymentInfoMap={paymentInfoMap}
//                         setCardBrand={setCardBrand}
//                         setError={setError}
//                         setCardComplete={setCardComplete}
//                       />
//                     ) : (
//                       <PaymentContainer
//                         paymentInfoMap={paymentInfoMap}
//                         paymentProviderId={paymentMethod.id}
//                         selectedPaymentOptionId={selectedPaymentMethod}
//                       />
//                     )}
//                   </div>
//                 ))}
//               </RadioGroup>
//             </>
//           )}

//           {paidByGiftcard && (
//             <div className="flex flex-col w-1/3">
//               <Text className="txt-medium-plus text-ui-fg-base mb-1">
//                 Payment method
//               </Text>
//               <Text
//                 className="txt-medium text-ui-fg-subtle"
//                 data-testid="payment-method-summary"
//               >
//                 Gift card
//               </Text>
//             </div>
//           )}

//           <ErrorMessage
//             error={error}
//             data-testid="payment-method-error-message"
//           />

//           <Button
//             size="large"
//             className="mt-6"
//             onClick={handleSubmit}
//             isLoading={isLoading}
//             disabled={
//               (isStripe && !cardComplete) ||
//               (!selectedPaymentMethod && !paidByGiftcard)
//             }
//             data-testid="submit-payment-button"
//           >
//             {!activeSession && isStripeFunc(selectedPaymentMethod)
//               ? " Enter card details"
//               : "Continue to review"}
//           </Button>
//         </div>

//         <div className={isOpen ? "hidden" : "block"}>
//           {cart && paymentReady && activeSession ? (
//             <div className="flex items-start gap-x-1 w-full">
//               <div className="flex flex-col w-1/3">
//                 <Text className="txt-medium-plus text-ui-fg-base mb-1">
//                   Payment method
//                 </Text>
//                 <Text
//                   className="txt-medium text-ui-fg-subtle"
//                   data-testid="payment-method-summary"
//                 >
//                   {paymentInfoMap[activeSession?.provider_id]?.title ||
//                     activeSession?.provider_id}
//                 </Text>
//               </div>
//               <div className="flex flex-col w-1/3">
//                 <Text className="txt-medium-plus text-ui-fg-base mb-1">
//                   Payment details
//                 </Text>
//                 <div
//                   className="flex gap-2 txt-medium text-ui-fg-subtle items-center"
//                   data-testid="payment-details-summary"
//                 >
//                   <Container className="flex items-center h-7 w-fit p-2 bg-ui-button-neutral-hover">
//                     {paymentInfoMap[selectedPaymentMethod]?.icon || (
//                       <CreditCard />
//                     )}
//                   </Container>
//                   <Text>
//                     {isStripeFunc(selectedPaymentMethod) && cardBrand
//                       ? cardBrand
//                       : "Another step will appear"}
//                   </Text>
//                 </div>
//               </div>
//             </div>
//           ) : paidByGiftcard ? (
//             <div className="flex flex-col w-1/3">
//               <Text className="txt-medium-plus text-ui-fg-base mb-1">
//                 Payment method
//               </Text>
//               <Text
//                 className="txt-medium text-ui-fg-subtle"
//                 data-testid="payment-method-summary"
//               >
//                 Gift card
//               </Text>
//             </div>
//           ) : null}
//         </div>
//       </div>
//       <Divider className="mt-8" />
//     </div>
//   )
// }

// export default Payment


"use client"

import { RadioGroup } from "@headlessui/react"
import { isStripe as isStripeFunc, paymentInfoMap } from "@lib/constants"
import { initiatePaymentSession } from "@lib/data/cart"
import { CheckCircleSolid, CreditCard } from "@medusajs/icons"
import { Button, Container, Heading, Text, clx } from "@medusajs/ui"
import ErrorMessage from "@modules/checkout/components/error-message"
import PaymentContainer, {
  StripeCardContainer,
} from "@modules/checkout/components/payment-container"
import Divider from "@modules/common/components/divider"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { FiCreditCard, FiGift, FiShield, FiEdit3, FiCheck, FiDollarSign, FiLock } from "react-icons/fi"

// Loading Modal Component
const LoadingModal = ({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Processing...</h3>
          <p className="text-gray-600">Preparing your order for review...</p>
        </div>
      </div>
    </div>
  )
}

const Payment = ({
  cart,
  availablePaymentMethods,
}: {
  cart: any
  availablePaymentMethods: any[]
}) => {
  const activeSession = cart.payment_collection?.payment_sessions?.find(
    (paymentSession: any) => paymentSession.status === "pending"
  )

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [cardBrand, setCardBrand] = useState<string | null>(null)
  const [cardComplete, setCardComplete] = useState(false)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    activeSession?.provider_id ?? ""
  )
  const [isSubmitting, setIsSubmitting] = useState(false)

  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const isOpen = searchParams.get("step") === "payment"
  const isStripe = isStripeFunc(selectedPaymentMethod)

  const setPaymentMethod = async (method: string) => {
    setError(null)
    setSelectedPaymentMethod(method)
    if (isStripeFunc(method)) {
      await initiatePaymentSession(cart, {
        provider_id: method,
      })
    }
  }

  const paidByGiftcard =
    cart?.gift_cards && cart?.gift_cards?.length > 0 && cart?.total === 0

  const paymentReady =
    (activeSession && cart?.shipping_methods.length !== 0) || paidByGiftcard

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  const handleEdit = () => {
    router.push(pathname + "?" + createQueryString("step", "payment"), {
      scroll: false,
    })
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    setIsSubmitting(true)
    
    try {
      const shouldInputCard =
        isStripeFunc(selectedPaymentMethod) && !activeSession

      const checkActiveSession =
        activeSession?.provider_id === selectedPaymentMethod

      if (!checkActiveSession) {
        await initiatePaymentSession(cart, {
          provider_id: selectedPaymentMethod,
        })
      }

      if (!shouldInputCard) {
        // Add delay to show loading state
        await new Promise(resolve => setTimeout(resolve, 1000))
        return router.push(
          pathname + "?" + createQueryString("step", "review"),
          { scroll: false }
        )
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    setError(null)
  }, [isOpen])

  return (
    <div className="bg-white">
      {/* Loading Modal */}
      <LoadingModal isOpen={isSubmitting} />

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                !isOpen && paymentReady
                  ? 'bg-green-500 text-white' 
                  : 'bg-gradient-to-br from-purple-500 to-blue-600 text-white'
              }`}>
                {!isOpen && paymentReady ? (
                  <FiCheck className="w-6 h-6" />
                ) : paidByGiftcard ? (
                  <FiGift className="w-6 h-6" />
                ) : (
                  <FiCreditCard className="w-6 h-6" />
                )}
              </div>
              <div>
                <Heading level="h2" className="text-2xl font-bold text-gray-900">
                  Payment Method
                </Heading>
                <p className="text-sm text-gray-600 mt-1">
                  {!isOpen && paymentReady
                    ? 'Payment method confirmed' 
                    : paidByGiftcard
                    ? 'Paid with gift card'
                    : 'Choose how you\'d like to pay'
                  }
                </p>
              </div>
            </div>
            
            {!isOpen && paymentReady && (
              <button
                onClick={handleEdit}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-gray-700 font-medium"
                data-testid="edit-payment-button"
              >
                <FiEdit3 className="w-4 h-4" />
                Edit Payment
              </button>
            )}
          </div>
        </div>

        <div className="p-6">
          {/* Payment Form */}
          <div className={clx("space-y-6", isOpen ? "block" : "hidden")}>
            
            {/* Security Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <FiShield className="w-5 h-5 text-blue-600" />
                <div>
                  <h4 className="font-medium text-blue-900">Secure Payment</h4>
                  <p className="text-sm text-blue-700">Your payment information is encrypted and secure</p>
                </div>
              </div>
            </div>

            {!paidByGiftcard && availablePaymentMethods?.length ? (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Payment Method</h3>
                <RadioGroup
                  value={selectedPaymentMethod}
                  onChange={(value: string) => setPaymentMethod(value)}
                  className="space-y-4"
                >
                  {availablePaymentMethods.map((paymentMethod) => {
                    const isSelected = selectedPaymentMethod === paymentMethod.id
                    return (
                      <div 
                        key={paymentMethod.id}
                        className={clx(
                          "border-2 rounded-xl transition-all duration-200",
                          isSelected 
                            ? "border-purple-500 bg-purple-50 shadow-md" 
                            : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                        )}
                      >
                        {isStripeFunc(paymentMethod.id) ? (
                          <StripeCardContainer
                            paymentProviderId={paymentMethod.id}
                            selectedPaymentOptionId={selectedPaymentMethod}
                            paymentInfoMap={paymentInfoMap}
                            setCardBrand={setCardBrand}
                            setError={setError}
                            setCardComplete={setCardComplete}
                          />
                        ) : (
                          <PaymentContainer
                            paymentInfoMap={paymentInfoMap}
                            paymentProviderId={paymentMethod.id}
                            selectedPaymentOptionId={selectedPaymentMethod}
                          />
                        )}
                      </div>
                    )
                  })}
                </RadioGroup>
              </div>
            ) : paidByGiftcard ? (
              <div className="bg-green-50 rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <FiGift className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Gift Card Payment</h3>
                    <p className="text-sm text-gray-600">Your order is fully covered by gift card balance</p>
                  </div>
                </div>
              </div>
            ) : null}

            {/* Error Message */}
            <ErrorMessage
              error={error}
              data-testid="payment-method-error-message"
              className="mb-4"
            />

            {/* Continue Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="large"
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                onClick={handleSubmit}
                isLoading={isLoading || isSubmitting}
                disabled={
                  isLoading ||
                  isSubmitting ||
                  (isStripe && !cardComplete) ||
                  (!selectedPaymentMethod && !paidByGiftcard)
                }
                data-testid="submit-payment-button"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </span>
                ) : !activeSession && isStripeFunc(selectedPaymentMethod) ? (
                  "Enter Card Details"
                ) : (
                  "Continue to Review"
                )}
              </Button>
            </div>
          </div>

          {/* Payment Summary */}
          <div className={clx("space-y-6", isOpen ? "hidden" : "block")}>
            {cart && paymentReady && activeSession ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Payment Method */}
                <div className="bg-purple-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                      <FiDollarSign className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Payment Method</h3>
                  </div>
                  <p className="text-gray-600" data-testid="payment-method-summary">
                    {paymentInfoMap[activeSession?.provider_id]?.title ||
                      activeSession?.provider_id}
                  </p>
                </div>

                {/* Payment Details */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <FiLock className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Payment Details</h3>
                  </div>
                  <div className="flex items-center gap-3" data-testid="payment-details-summary">
                    <Container className="flex items-center h-8 w-fit p-2 bg-white rounded-lg border">
                      {paymentInfoMap[selectedPaymentMethod]?.icon || <CreditCard />}
                    </Container>
                    <span className="text-gray-600">
                      {isStripeFunc(selectedPaymentMethod) && cardBrand
                        ? `${cardBrand} card`
                        : "Payment details will be entered next"}
                    </span>
                  </div>
                </div>
              </div>
            ) : paidByGiftcard ? (
              <div className="bg-green-50 rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <FiGift className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Gift Card Payment</h3>
                    <p className="text-sm text-gray-600" data-testid="payment-method-summary">
                      Your order total is covered by gift card balance
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCreditCard className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-600">Payment method not configured</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Divider className="my-8" />
    </div>
  )
}

export default Payment