// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import ChevronDown from "@modules/common/icons/chevron-down"
// import MedusaCTA from "@modules/layout/components/medusa-cta"
// import Image from "next/image"
// import Logo from "../../assets/Icons/logo.png"

// export default function CheckoutLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <div className="w-full bg-white relative small:min-h-screen">
//       <div className="h-16 bg-white border-b ">
//         <nav className="flex h-full items-center content-container justify-between">
//           <LocalizedClientLink
//             href="/cart"
//             className="text-small-semi text-ui-fg-base flex items-center gap-x-2 uppercase flex-1 basis-0"
//             data-testid="back-to-cart-link"
//           >
//             <ChevronDown className="rotate-90" size={16} />
//             <span className="mt-px hidden small:block txt-compact-plus text-ui-fg-subtle hover:text-ui-fg-base ">
//               Back to shopping cart
//             </span>
//             <span className="mt-px block small:hidden txt-compact-plus text-ui-fg-subtle hover:text-ui-fg-base">
//               Back
//             </span>
//           </LocalizedClientLink>
//           <LocalizedClientLink
//             href="/"
//             className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase flex items-center gap-2"
//             data-testid="store-link"
//           >
//             <Image src={Logo} alt="logo" className="w-[30px]" />
//             HitlerAbi
//           </LocalizedClientLink>
//           <div className="flex-1 basis-0" />
//         </nav>
//       </div>
//       <div className="relative" data-testid="checkout-container">{children}</div>
//       <div className="py-4 w-full flex items-center justify-center">
//         <MedusaCTA />
//       </div>
//     </div>
//   )
// }

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/chevron-down"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import Image from "next/image"
import Logo from "../../assets/Icons/logo.png"
import { FiArrowLeft, FiShield, FiLock } from "react-icons/fi"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full bg-gray-50 relative min-h-screen">
      {/* Security Bar */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-2">
        <div className="content-container">
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <FiShield className="w-4 h-4" />
            <span className="hidden sm:inline">Secure Checkout</span>
            <span className="sm:hidden">Secure</span>
            <span className="mx-2">•</span>
            <FiLock className="w-4 h-4" />
            <span className="hidden sm:inline">SSL Encrypted</span>
            <span className="sm:hidden">Encrypted</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
        <nav className="content-container">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            
            {/* Back to Cart Link */}
            <div className="flex-1 flex items-center">
              <LocalizedClientLink
                href="/cart"
                className="group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                data-testid="back-to-cart-link"
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center transition-colors duration-200">
                  <FiArrowLeft className="w-4 h-4 text-gray-600 group-hover:text-blue-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    <span className="hidden sm:inline">Back to Cart</span>
                    <span className="sm:hidden">Back</span>
                  </span>
                  <span className="text-xs text-gray-500 hidden sm:block">
                    Review your items
                  </span>
                </div>
              </LocalizedClientLink>
            </div>

            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <LocalizedClientLink
                href="/"
                className="group flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-gray-50 transition-all duration-200"
                data-testid="store-link"
              >
                <div className="relative">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 p-2 shadow-lg group-hover:shadow-xl transition-shadow duration-200">
                    <Image 
                      src={Logo} 
                      alt="Store logo" 
                      className="w-full h-full object-contain filter brightness-0 invert" 
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse" />
                </div>
                <div className="hidden sm:block">
                  <div className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    HitlerAbi
                  </div>
                  <div className="text-xs text-gray-500">
                    Secure Checkout
                  </div>
                </div>
              </LocalizedClientLink>
            </div>

            {/* Right Section */}
            <div className="flex-1 flex items-center justify-end">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="hidden md:flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Secure</span>
                </div>
                <div className="hidden lg:block text-gray-300">|</div>
                <div className="hidden lg:block">
                  Need help?
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Progress Indicator */}
      {/* <div className="bg-white border-b border-gray-200">
        <div className="content-container py-3">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-medium">
                  1
                </div>
                <span className="text-gray-600 hidden sm:inline">Checkout</span>
              </div>
              <div className="w-8 h-px bg-gray-300" />
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-xs font-medium">
                  2
                </div>
                <span className="text-gray-400 hidden sm:inline">Payment</span>
              </div>
              <div className="w-8 h-px bg-gray-300" />
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-xs font-medium">
                  3
                </div>
                <span className="text-gray-400 hidden sm:inline">Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="relative bg-gray-50" data-testid="checkout-container">
        <div className="content-container py-8 lg:py-12">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="content-container">
          <div className="flex flex-col items-center gap-6">
            
            {/* Security Badges */}
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <FiShield className="w-4 h-4 text-green-600" />
                <span>256-bit SSL</span>
              </div>
              <div className="w-px h-4 bg-gray-300" />
              <div className="flex items-center gap-2">
                <FiLock className="w-4 h-4 text-blue-600" />
                <span>PCI Compliant</span>
              </div>
            </div>

            {/* CTA */}
            {/* <div className="text-center">
              <MedusaCTA />
            </div> */}

            {/* Additional Footer Info */}
            <div className="text-center text-xs text-gray-400 space-y-2">
              <p>Your payment information is encrypted and secure</p>
              <div className="flex items-center justify-center gap-4">
                <span>© 2025 HitlerAbi</span>
                <span>•</span>
                <LocalizedClientLink href="/privacy" className="hover:text-gray-600 transition-colors">
                  Privacy Policy
                </LocalizedClientLink>
                <span>•</span>
                <LocalizedClientLink href="/terms" className="hover:text-gray-600 transition-colors">
                  Terms
                </LocalizedClientLink>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
