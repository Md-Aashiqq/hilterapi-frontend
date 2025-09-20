
// "use client";

// import { Button } from "@medusajs/ui"
// import Spinner from "@modules/common/icons/spinner"
// import React, { useCallback, useEffect, useState } from "react"
// import  {useRazorpay, RazorpayOrderOptions } from "react-razorpay"
// import { HttpTypes } from "@medusajs/types"
// import {  placeOrder,  } from "@lib/data/cart"
// import { CurrencyCode } from "react-razorpay/dist/constants/currency"
// export const RazorpayPaymentButton = ({
//   session,
//   notReady,
//   cart
// }: {
//   session: HttpTypes.StorePaymentSession
//   notReady: boolean
//   cart: HttpTypes.StoreCart
// }) => {
//   const [disabled, setDisabled] = useState(false)
//   const [submitting, setSubmitting] = useState(false)
//   const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)
//   const {Razorpay
//    } = useRazorpay();
  
//   const [orderData,setOrderData] = useState({razorpayOrder:{id:""}})

  
//   console.log(`session_data: `+JSON.stringify(session))
//   const onPaymentCompleted = async () => {
//     await placeOrder().catch(() => {
//       setErrorMessage("An error occurred, please try again.")
//       setSubmitting(false)
//     })
//   }
//   useEffect(()=>{
//     setOrderData(session.data as {razorpayOrder:{id:string}})
//   },[session.data])

  


//   const handlePayment = useCallback(async() => {
//     const onPaymentCancelled = async () => {
//         setErrorMessage("PaymentCancelled")
//         setSubmitting(false)
//       }
    
//     const options: RazorpayOrderOptions = {
//       key:process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID??process.env.NEXT_PUBLIC_RAZORPAY_TEST_KEY_ID??"your_key_id",
//       callback_url: `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/razorpay/hooks`,
//       // amount: session.amount*100*100,
//       amount: session.amount * 100,
//       order_id: orderData.razorpayOrder.id,
//       currency: cart.currency_code.toUpperCase() as CurrencyCode,
//       name: process.env.COMPANY_NAME ?? "your company name ",
//       description: `Order number ${orderData.razorpayOrder.id}`,
//       remember_customer:true,
      

//       image: "https://example.com/your_logo",
//       modal: {
//         backdropclose: true,
//         escape: true,
//         handleback: true,
//         confirm_close: true,
//         ondismiss: async () => {
//           setSubmitting(false)
//           setErrorMessage(`payment cancelled`)
//           await onPaymentCancelled()
//         },
//         animation: true,
//       },
      
//       handler: async () => {
//         onPaymentCompleted()
//       },
//       "prefill": {
//         "name": cart.billing_address?.first_name + " " + cart?.billing_address?.last_name,
//         "email": cart?.email,
//         "contact": (cart?.shipping_address?.phone) ?? undefined
//       },
      
      
//     };
//     console.log(JSON.stringify(options.amount))
//     //await waitForPaymentCompletion();
    
    
//     const razorpay = new Razorpay(options);
//     if(orderData.razorpayOrder.id)
//     razorpay.open();
//     razorpay.on("payment.failed", function (response: any) {
//       setErrorMessage(JSON.stringify(response.error))
   
//     })
//    razorpay.on("payment.authorized" as any, function (response: any) {
//     const authorizedCart = placeOrder().then(authorizedCart=>{
//     JSON.stringify(`authorized:`+ authorizedCart)
//     })
//     })
//     // razorpay.on("payment.captured", function (response: any) {

//     // }
//     // )
//   }, [Razorpay, cart.billing_address?.first_name, 
//     cart.billing_address?.last_name, cart.currency_code,
//      cart?.email, cart?.shipping_address?.phone, orderData.razorpayOrder.id, 
//      session.amount, session.provider_id]);
//   console.log("orderData"+JSON.stringify(orderData))
//   return (
//     <>
//       <Button
//         disabled={submitting || notReady || !orderData?.razorpayOrder?.id||orderData?.razorpayOrder?.id == ''}
//         onClick={()=>{
//           console.log(`processing order id: ${orderData.razorpayOrder.id}`)
//           handlePayment()}
//         }
//       >
//         {submitting ? <Spinner /> : "Checkout"}
//       </Button>
//       {errorMessage && (
//         <div className="text-red-500 text-small-regular mt-2">
//           {errorMessage}
//         </div>
//       )}
//     </>
//   )
// }


"use client";

import { Button } from "@medusajs/ui"
import Spinner from "@modules/common/icons/spinner"
import React, { useCallback, useEffect, useState } from "react"
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay"
import { HttpTypes } from "@medusajs/types"
import { placeOrder } from "@lib/data/cart"
import { CurrencyCode } from "react-razorpay/dist/constants/currency"

export const RazorpayPaymentButton = ({
  session,
  notReady,
  cart
}: {
  session: HttpTypes.StorePaymentSession
  notReady: boolean
  cart: HttpTypes.StoreCart
}) => {
  const [disabled, setDisabled] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)
  const [orderData, setOrderData] = useState<{razorpayOrder:{id:string}} | null>(null)
  const [mounted, setMounted] = useState(false)
  
  const { Razorpay } = useRazorpay();
  
  // Ensure component is mounted before accessing browser APIs
  useEffect(() => {
    setMounted(true)
  }, [])

  // Validate environment and setup
  useEffect(() => {
    if (mounted) {
      // Check if Razorpay key is configured
      const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ?? process.env.NEXT_PUBLIC_RAZORPAY_TEST_KEY_ID
      if (!razorpayKey || razorpayKey === 'your_key_id') {
        console.error('Razorpay key not configured properly')
        setErrorMessage("Payment system configuration error")
        return
      }

      // Validate session data
      if (session?.data) {
        try {
          const sessionData = session.data as {razorpayOrder:{id:string}}
          if (!sessionData.razorpayOrder?.id) {
            throw new Error('Missing order ID in session data')
          }
          setOrderData(sessionData)
          console.log('Session data loaded successfully:', {
            orderId: sessionData.razorpayOrder.id,
            amount: session.amount,
            currency: cart.currency_code
          })
        } catch (error) {
          console.error('Error parsing session data:', error)
          setErrorMessage("Invalid payment session data")
        }
      }
    }
  }, [session?.data, session.amount, cart.currency_code, mounted])

  const onPaymentCompleted = async () => {
    try {
      await placeOrder()
      setSubmitting(false)
    } catch (error) {
      console.error('Payment completion error:', error)
      setErrorMessage("An error occurred, please try again.")
      setSubmitting(false)
    }
  }

  const validatePaymentData = () => {
    const errors = []
    
    if (!orderData?.razorpayOrder?.id || orderData.razorpayOrder.id === '') {
      errors.push('Invalid order ID')
    }
    
    if (!session.amount || session.amount <= 0) {
      errors.push('Invalid amount')
    }
    
    if (!cart.currency_code) {
      errors.push('Invalid currency')
    }
    
    const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ?? process.env.NEXT_PUBLIC_RAZORPAY_TEST_KEY_ID
    if (!razorpayKey || razorpayKey === 'your_key_id') {
      errors.push('Razorpay key not configured')
    }
    
    return errors
  }

  const handlePayment = useCallback(async () => {
    if (!mounted || !Razorpay) {
      setErrorMessage("Payment system not ready")
      return
    }

    // Validate all required data
    const validationErrors = validatePaymentData()
    if (validationErrors.length > 0) {
      setErrorMessage(`Validation failed: ${validationErrors.join(', ')}`)
      return
    }

    setSubmitting(true)
    setErrorMessage(undefined)

    const onPaymentCancelled = async () => {
      setErrorMessage("Payment cancelled")
      setSubmitting(false)
    }

    try {
      // Ensure amount is properly formatted (in paise)
      const amountInPaise = Math.round(session.amount * 100)
      
      // Sanitize phone number
      let phoneNumber = cart?.shipping_address?.phone || cart?.billing_address?.phone
      if (phoneNumber) {
        // Remove all non-digits and ensure it's a valid format
        phoneNumber = phoneNumber.replace(/\D/g, '')
        if (phoneNumber.length < 10 || phoneNumber.length > 15) {
          phoneNumber = undefined // Invalid phone number
        }
      }

      // Get the razorpay key
      const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ?? process.env.NEXT_PUBLIC_RAZORPAY_TEST_KEY_ID

      const options: RazorpayOrderOptions = {
        key: razorpayKey!,
        amount: amountInPaise,
        order_id: orderData!.razorpayOrder.id,
        currency: cart.currency_code.toUpperCase() as CurrencyCode,
        name: process.env.NEXT_PUBLIC_COMPANY_NAME ?? "Your Company Name",
        description: `Order #${orderData!.razorpayOrder.id}`,
        
        // Remove callback_url for frontend integration
        // callback_url: `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/razorpay/hooks`,
        
        remember_customer: true,
        image: process.env.NEXT_PUBLIC_COMPANY_LOGO ?? undefined,
        
        modal: {
          backdropclose: true,
          escape: true,
          handleback: true,
          confirm_close: true,
          ondismiss: async () => {
            console.log('Payment modal dismissed')
            setSubmitting(false)
            setErrorMessage("Payment cancelled by user")
          },
          animation: true,
        },
        
        handler: async (response: any) => {
          console.log('Payment successful:', response)
          try {
            await onPaymentCompleted()
          } catch (error) {
            console.error('Error in payment completion:', error)
            setErrorMessage("Payment completed but order processing failed")
          }
        },
        
        prefill: {
          name: (() => {
            const firstName = cart.billing_address?.first_name?.trim()
            const lastName = cart.billing_address?.last_name?.trim()
            if (firstName && lastName) {
              return `${firstName} ${lastName}`
            }
            return firstName || lastName || undefined
          })(),
          email: cart?.email?.trim() || undefined,
          contact: phoneNumber
        },
        
        // Add timeout to prevent hanging
        timeout: 300, // 5 minutes
        
        // Add retry configuration
        retry: {
          enabled: false // Disable automatic retry to avoid conflicts
        }
      }

      console.log('Initializing Razorpay with options:', {
        ...options,
        key: '[HIDDEN]',
        amount: amountInPaise,
        currency: options.currency,
        order_id: options.order_id
      })

      const razorpay = new Razorpay(options)
      
      // Set up event listeners before opening
      razorpay.on("payment.failed", function (response: any) {
        console.error('Payment failed:', response)
        const errorMsg = response?.error?.description || 
                        response?.error?.reason || 
                        'Payment failed. Please try again.'
        setErrorMessage(errorMsg)
        setSubmitting(false)
      })

      razorpay.on("payment.authorized" as any, function (response: any) {
        console.log('Payment authorized:', response)
      })

      // Add a small delay to ensure everything is set up
      setTimeout(() => {
        try {
          razorpay.open()
        } catch (openError) {
          console.error('Error opening Razorpay modal:', openError)
          setErrorMessage("Failed to open payment modal. Please refresh and try again.")
          setSubmitting(false)
        }
      }, 100)
      
    } catch (error: any) {
      console.error('Error initializing payment:', error)
      
      // More specific error handling
      let errorMessage = "Failed to initialize payment"
      
      if (error?.message) {
        if (error.message.includes('network')) {
          errorMessage = "Network error. Please check your connection and try again."
        } else if (error.message.includes('key')) {
          errorMessage = "Payment configuration error. Please contact support."
        } else if (error.message.includes('amount')) {
          errorMessage = "Invalid payment amount. Please try again."
        } else {
          errorMessage = `Payment error: ${error.message}`
        }
      }
      
      setErrorMessage(errorMessage)
      setSubmitting(false)
    }
  }, [
    mounted,
    Razorpay, 
    cart.billing_address?.first_name, 
    cart.billing_address?.last_name, 
    cart.currency_code,
    cart?.email, 
    cart?.shipping_address?.phone, 
    orderData?.razorpayOrder?.id, 
    session.amount
  ])

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <Button disabled>
        <Spinner />
      </Button>
    )
  }

  const isReady = !submitting && 
                  !notReady && 
                  orderData?.razorpayOrder?.id && 
                  orderData.razorpayOrder.id !== '' &&
                  Razorpay

  return (
    <>
      <Button
        disabled={!isReady}
        onClick={() => {
          console.log(`Processing order id: ${orderData?.razorpayOrder?.id}`)
          handlePayment()
        }}
      >
        {submitting ? <Spinner /> : "Checkout"}
      </Button>
      {errorMessage && (
        <div className="text-red-500 text-small-regular mt-2">
          {errorMessage}
        </div>
      )}
    </>
  )
}