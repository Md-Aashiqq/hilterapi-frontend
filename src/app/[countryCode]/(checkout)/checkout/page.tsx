import { retrieveCart } from "@lib/data/cart"
import { retrieveCustomer } from "@lib/data/customer"
import PaymentWrapper from "@modules/checkout/components/payment-wrapper"
import CheckoutForm from "@modules/checkout/templates/checkout-form"
import CheckoutSummary from "@modules/checkout/templates/checkout-summary"
import { Metadata } from "next"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Checkout",
}

export default async function Checkout() {
  const cart = await retrieveCart()

  if (!cart) {
    return notFound()
  }

  const customer = await retrieveCustomer()

  return (
    // <div className="grid grid-cols-1 small:grid-cols-[1fr_416px] content-container gap-x-40 py-12">
    //   <PaymentWrapper cart={cart}>
    //     <CheckoutForm cart={cart} customer={customer} />
    //   </PaymentWrapper>
    //   <CheckoutSummary cart={cart} />
    // </div>
    <div className="!p-0 grid grid-cols-1 lg:grid-cols-[3fr_2fr] xl:grid-cols-[60%_40%] content-container gap-6 lg:gap-8 xl:gap-12">
      {/* Payment Section - 60% width */}
      <div className="w-full">
        <PaymentWrapper cart={cart}>
          <CheckoutForm cart={cart} customer={customer} />
        </PaymentWrapper>
      </div>
      
      {/* Summary Section - 40% width */}
      <div className="w-full">
        <CheckoutSummary cart={cart} />
      </div>
    </div>
  )
}
