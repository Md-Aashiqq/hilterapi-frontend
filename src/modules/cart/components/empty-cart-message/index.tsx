import { Heading, Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import NoCartImg from "../../../../app/assets/Icons/no-cart.png"
import Image from "next/image"

const EmptyCartMessage = () => {
  return (
    <div className="py-6 px-2 flex flex-col justify-center items-center" data-testid="empty-cart-message">
      <div className="w-[20%] pb-[12px]">
        <Image src={NoCartImg} alt='no-cart' className="w-full" />
      </div>
      <Heading
        level="h1"
        className="flex flex-row text-3xl-regular gap-x-2 items-baseline"
      >
        Cart
      </Heading>
      <Text className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        You don&apos;t have anything in your cart. Let&apos;s change that, use
        the link below to start browsing our products.
      </Text>
      <div className="border border-[#e4e4e7] py-2 px-3 rounded-[8px]">
        <InteractiveLink href="/store">Explore products</InteractiveLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
