// import { Heading, Text } from "@medusajs/ui"

// import InteractiveLink from "@modules/common/components/interactive-link"
// import NoCartImg from "../../../../app/assets/Icons/no-cart.png"
// import Image from "next/image"

// const EmptyCartMessage = () => {
//   return (
//     <div className="py-6 px-2 flex flex-col justify-center items-center" data-testid="empty-cart-message">
//       <div className="w-[20%] pb-[12px]">
//         <Image src={NoCartImg} alt='no-cart' className="w-full" />
//       </div>
//       <Heading
//         level="h1"
//         className="flex flex-row text-3xl-regular gap-x-2 items-baseline"
//       >
//         Cart
//       </Heading>
//       <Text className="text-base-regular mt-4 mb-6 max-w-[32rem]">
//         You don&apos;t have anything in your cart. Let&apos;s change that, use
//         the link below to start browsing our products.
//       </Text>
//       <div className="border border-[#e4e4e7] py-2 px-3 rounded-[8px]">
//         <InteractiveLink href="/store">Explore products</InteractiveLink>
//       </div>
//     </div>
//   )
// }

// export default EmptyCartMessage


import { Heading, Text } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import NoCartImg from "../../../../app/assets/Icons/no-cart.png"
import Image from "next/image"

const EmptyCartMessage = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div 
        className="w-full max-w-md lg:max-w-lg mx-auto text-center space-y-6 sm:space-y-8"
        data-testid="empty-cart-message"
      >
        {/* Illustration Container */}
        <div className="relative">
          <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-6 relative">
            {/* Background Circle with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full opacity-60"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-40"></div>
            
            {/* Image Container */}
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 relative">
                <Image 
                  src={NoCartImg} 
                  alt="Empty shopping cart illustration" 
                  className="w-full h-full object-contain opacity-80"
                  priority
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-purple-200 rounded-full opacity-60 animate-pulse delay-500"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-4 sm:space-y-6">
          {/* Heading */}
          <div className="space-y-2">
            <Heading
              level="h1"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
            >
              Your Cart is Empty
            </Heading>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Description */}
          <Text className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md mx-auto px-4">
            You don't have anything in your cart yet. Let's change that! 
            Discover amazing products waiting for you.
          </Text>
        </div>

        {/* Action Section */}
        <div className="space-y-4 pt-4">
          {/* Primary CTA Button */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative bg-white rounded-xl">
              <div className="block w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 
                  hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl
                  transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl
                  focus:outline-none focus:ring-4 focus:ring-blue-500/25
                  text-sm sm:text-base">
              <InteractiveLink 
                href="/store"
                
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Start Shopping
                </span>
              </InteractiveLink>
              </div>
            </div>
          </div>

          {/* Secondary Actions */}
          {/* <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <InteractiveLink 
              href="/categories"
              className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base
                transition-colors duration-200 flex items-center gap-1
                hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500/25 rounded"
            >
              Browse Categories
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </InteractiveLink>
            
            <span className="hidden sm:block text-gray-300">•</span>
            
            <InteractiveLink 
              href="/deals"
              className="text-purple-600 hover:text-purple-700 font-medium text-sm sm:text-base
                transition-colors duration-200 flex items-center gap-1
                hover:underline focus:outline-none focus:ring-2 focus:ring-purple-500/25 rounded"
            >
              View Deals
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </InteractiveLink>
          </div> */}
        </div>

        {/* Features/Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 text-center">
          <div className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-blue-50 border border-blue-100 hover:shadow-sm transition-shadow duration-200">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-medium text-blue-800">Free Shipping</span>
            <span className="text-xs text-blue-600">On orders over $50</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-green-50 border border-green-100 hover:shadow-sm transition-shadow duration-200">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-medium text-green-800">Easy Returns</span>
            <span className="text-xs text-green-600">30-day policy</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-purple-50 border border-purple-100 hover:shadow-sm transition-shadow duration-200">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-medium text-purple-800">Best Prices</span>
            <span className="text-xs text-purple-600">Price match guarantee</span>
          </div>
        </div>

        {/* Help Section */}
        <div className="pt-6 border-t border-gray-100">
          <Text className="text-sm text-gray-500">
            Need help finding something?{" "}
            <InteractiveLink 
              href="/contact"
              className="text-blue-600 hover:text-blue-700 font-medium hover:underline
                focus:outline-none focus:ring-2 focus:ring-blue-500/25 rounded"
            >
              Contact our support team
            </InteractiveLink>
          </Text>
        </div>
      </div>
    </div>
  )
}

export default EmptyCartMessage