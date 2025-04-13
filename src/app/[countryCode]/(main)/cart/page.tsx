import { retrieveCart } from "@lib/data/cart"
import { retrieveCustomer } from "@lib/data/customer"
import EmptyCartMessage from "@modules/cart/components/empty-cart-message"
import CartTemplate from "@modules/cart/templates"
import { Metadata } from "next"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Cart",
  description: "View your cart",
}

export default async function Cart() {
  const cart = await retrieveCart()
  const customer = await retrieveCustomer()

  if (!cart) {
    // return notFound()
    return <EmptyCartMessage />
  }

  return <CartTemplate cart={cart} customer={customer} />
}
