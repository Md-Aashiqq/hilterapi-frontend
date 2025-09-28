// import { Suspense } from "react"
// import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"
// import { FiSearch } from "react-icons/fi"
// import { listRegions } from "@lib/data/regions"
// import { StoreRegion } from "@medusajs/types"
// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import CartButton from "@modules/layout/components/cart-button"
// import SideMenu from "@modules/layout/components/side-menu"
// import Image from "next/image"
// import Logo from "../../../../app/assets/Icons/logo.png"
// import ProductSearch from "@modules/home/components/hero/ProductSearch"

// export default async function Nav() {
//   const regions = await listRegions().then((regions: StoreRegion[]) => regions)

//   return (
//     <div className="sticky top-0 inset-x-0 z-50 group">
//       {/* Top Header with Social Media */}
//       <div className="h-10 bg-gray-100">
//         <div className="content-container h-full">
//           <div className="flex items-center justify-between w-full h-full 2xsmall:px-0 xsmall:px-10 ">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-ui-fg-base"
//             >
//               <FaFacebook size={16} />
//             </a>
//             <a
//               href="https://whatsapp.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-ui-fg-base"
//             >
//               <FaWhatsapp size={16} />
//             </a>
//             <div className="flex items-center h-full gap-2 bg-[#000] pe-2">
//               <LocalizedClientLink
//                 href="/"
//                 className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase flex items-center gap-2"
//                 data-testid="nav-store-link"
//               >
//                 <div className="p-[6px] ">
//                   <Image src={Logo} alt="logo" className="w-[30px]" />
//                 </div>

//                 {/* <LocalizedClientLink
//                 href="/"
//                 className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
//                 data-testid="nav-store-link"
//               > */}
//                 <p className="!text-[#fff]">HitlerAbi</p>
//               </LocalizedClientLink>
//             </div>
//             <a
//               href="https://instagram.com/the_h.itler_abi_"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-ui-fg-base"
//             >
//               <FaInstagram size={16} />
//             </a>
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-ui-fg-base"
//             >
//               <FaTwitter size={16} />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
//         <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
//           <div className="flex-1 basis-0 h-full flex items-center">
//             <div className="h-full">
//               <SideMenu regions={regions} />
//             </div>
//           </div>

//           <div className="w-full flex items-center gap-x-6 h-full flex-1 basis-0 justify-between text-[14px]">
//             <div className="relative w-full max-w-sm">
//               <ProductSearch />
//             </div>

//             <div className="hidden small:flex items-center gap-x-6 h-full text-[14px] w-full justify-between text-nowrap">
//               {/* <div className="relative">
//                 <input
//                   type="search"
//                   placeholder="Search products..."
//                   className="py-2 px-8 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-300"
//                 />
//                 <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
//               </div> */}
//               <LocalizedClientLink
//                 className="hover:text-ui-fg-base"
//                 href="/customerlist"
//                 data-testid="nav-account-link"
//               >
//                 Customer List
//               </LocalizedClientLink>
//               <LocalizedClientLink
//                 className="hover:text-ui-fg-base"
//                 href="/store"
//                 data-testid="nav-account-link"
//               >
//                 Store
//               </LocalizedClientLink>
//               <LocalizedClientLink
//                 className="hover:text-ui-fg-base"
//                 href="/account"
//                 data-testid="nav-account-link"
//               >
//                 Account
//               </LocalizedClientLink>
//               <LocalizedClientLink
//                 className="hover:text-ui-fg-base"
//                 href="/aboutus"
//                 data-testid="nav-account-link"
//               >
//                 About Us
//               </LocalizedClientLink>
//               <Suspense
//                 fallback={
//                   <LocalizedClientLink
//                     className="hover:text-ui-fg-base flex gap-2"
//                     href="/cart"
//                     data-testid="nav-cart-link"
//                   >
//                     Cart (0)
//                   </LocalizedClientLink>
//                 }
//               >
//                 <CartButton />
//               </Suspense>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   )
// }

// import { Suspense } from "react"
// import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"
// import { FiSearch, FiShoppingBag, FiUser, FiHeart } from "react-icons/fi"
// import { listRegions } from "@lib/data/regions"
// import { StoreRegion } from "@medusajs/types"
// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import CartButton from "@modules/layout/components/cart-button"
// import SideMenu from "@modules/layout/components/side-menu"
// import Image from "next/image"
// import Logo from "../../../../app/assets/Icons/logo.png"
// import ProductSearch from "@modules/home/components/hero/ProductSearch"

// export default async function Nav() {
//   const regions = await listRegions().then((regions: StoreRegion[]) => regions)

//   return (
//     <div className="sticky top-0 inset-x-0 z-50 group">
//       {/* Top Header with Social Media - Redesigned */}
//       <div className="h-12 bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-lg">
//         <div className="content-container h-full">
//           <div className="flex items-center justify-between w-full h-full px-4 sm:px-6 lg:px-8">

//             {/* Social Media Icons - Left */}
//             <div className="flex items-center gap-4">
//               <span className="text-white/70 text-xs font-medium hidden sm:block">Follow us:</span>
//               <div className="flex items-center gap-3">
//                 <a
//                   href="https://facebook.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group relative p-2 rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
//                 >
//                   <FaFacebook className="w-4 h-4 text-white group-hover:text-white transition-colors" />
//                   <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
//                 </a>
//                 <a
//                   href="https://whatsapp.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group relative p-2 rounded-full bg-white/10 hover:bg-green-500 transition-all duration-300 transform hover:scale-110"
//                 >
//                   <FaWhatsapp className="w-4 h-4 text-white group-hover:text-white transition-colors" />
//                   <div className="absolute inset-0 rounded-full bg-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
//                 </a>
//                 <a
//                   href="https://instagram.com/the_h.itler_abi_"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group relative p-2 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110"
//                 >
//                   <FaInstagram className="w-4 h-4 text-white group-hover:text-white transition-colors" />
//                   <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
//                 </a>
//                 <a
//                   href="https://twitter.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group relative p-2 rounded-full bg-white/10 hover:bg-blue-400 transition-all duration-300 transform hover:scale-110"
//                 >
//                   <FaTwitter className="w-4 h-4 text-white group-hover:text-white transition-colors" />
//                   <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
//                 </a>
//               </div>
//             </div>

//             {/* Logo - Center */}
//             <LocalizedClientLink
//               href="/"
//               className="group flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300 transform hover:scale-105"
//               data-testid="nav-store-link"
//             >
//               <div className="relative">
//                 <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-1.5 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
//                   <Image
//                     src={Logo}
//                     alt="logo"
//                     className="w-full h-full object-contain filter brightness-0 invert"
//                   />
//                 </div>
//                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse" />
//               </div>
//               <span className="text-white font-bold text-lg tracking-wide group-hover:text-blue-200 transition-colors duration-300">
//                 HitlerAbi
//               </span>
//             </LocalizedClientLink>

//             {/* Right Side Info */}
//             <div className="flex items-center gap-4 text-white/70 text-xs">
//               {/* <span className="hidden md:block">Free shipping over $50</span> */}
//               <div className="w-px h-4 bg-white/20 hidden md:block" />
//               <span className="hidden lg:block">24/7 Support</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Header - Redesigned */}
//       <header className="relative h-20 mx-auto bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
//         <nav className="content-container flex items-center justify-between w-full h-full px-4 sm:px-6 lg:px-8">

//           {/* Left - Menu */}
//           <div className="flex items-center gap-4">
//             <div className="h-full flex items-center">
//               <SideMenu regions={regions} />
//             </div>
//           </div>

//           {/* Center - Search */}
//           <div className="flex-1 max-w-2xl mx-8">
//             <div className="relative">
//               <ProductSearch />
//               {/* Enhanced search styling overlay */}
//               <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-50/0 via-blue-50/20 to-purple-50/0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </div>
//           </div>

//           {/* Right - Navigation Links */}
//           <div className="flex items-center gap-6">

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center gap-6">
//               <LocalizedClientLink
//                 className="group relative py-2 px-3 rounded-lg text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 hover:bg-blue-50"
//                 href="/customerlist"
//                 data-testid="nav-customer-link"
//               >
//                 <span className="relative z-10">Customer List</span>
//                 <div className="absolute inset-0 rounded-lg bg-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
//               </LocalizedClientLink>

//               <LocalizedClientLink
//                 className="group relative py-2 px-3 rounded-lg text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 hover:bg-blue-50"
//                 href="/store"
//                 data-testid="nav-store-link"
//               >
//                 <span className="relative z-10 flex items-center gap-2">
//                   <FiShoppingBag className="w-4 h-4" />
//                   Store
//                 </span>
//                 <div className="absolute inset-0 rounded-lg bg-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
//               </LocalizedClientLink>

//               <LocalizedClientLink
//                 className="group relative py-2 px-3 rounded-lg text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 hover:bg-blue-50"
//                 href="/account"
//                 data-testid="nav-account-link"
//               >
//                 <span className="relative z-10 flex items-center gap-2">
//                   <FiUser className="w-4 h-4" />
//                   Account
//                 </span>
//                 <div className="absolute inset-0 rounded-lg bg-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
//               </LocalizedClientLink>

//               <LocalizedClientLink
//                 className="group relative py-2 px-3 rounded-lg text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 hover:bg-blue-50"
//                 href="/aboutus"
//                 data-testid="nav-about-link"
//               >
//                 <span className="relative z-10">About Us</span>
//                 <div className="absolute inset-0 rounded-lg bg-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
//               </LocalizedClientLink>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex items-center gap-3">

//               {/* Wishlist Button */}
//               {/* <button className="group relative p-3 rounded-xl bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-200 transition-all duration-200 transform hover:scale-105">
//                 <FiHeart className="w-5 h-5 text-gray-600 group-hover:text-red-500 transition-colors duration-200" />
//                 <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
//                   3
//                 </span>
//               </button> */}

//               {/* Cart Button */}
//               <Suspense
//                 fallback={
//                   <div className="group relative p-3 rounded-xl bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 transition-all duration-200 transform hover:scale-105">
//                     <FiShoppingBag className="w-5 h-5 text-gray-600 group-hover:text-blue-500 transition-colors duration-200" />
//                     <span className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
//                       0
//                     </span>
//                   </div>
//                 }
//               >
//                 <div className="relative">
//                   <CartButton />
//                 </div>
//               </Suspense>

//               {/* User Account Button */}
//               <LocalizedClientLink
//                 href="/account"
//                 className="group relative p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
//               >
//                 <FiUser className="w-5 h-5" />
//                 <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
//               </LocalizedClientLink>
//             </div>
//           </div>
//         </nav>

//         {/* Bottom border gradient */}
//         <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
//       </header>

//       {/* Mobile Navigation Bar (appears on small screens) */}
//       <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-2">
//         <div className="flex items-center justify-around">
//           <LocalizedClientLink href="/store" className="flex flex-col items-center gap-1 p-2 text-gray-600 hover:text-blue-600 transition-colors">
//             <FiShoppingBag className="w-5 h-5" />
//             <span className="text-xs">Store</span>
//           </LocalizedClientLink>
//           <LocalizedClientLink href="/account" className="flex flex-col items-center gap-1 p-2 text-gray-600 hover:text-blue-600 transition-colors">
//             <FiUser className="w-5 h-5" />
//             <span className="text-xs">Account</span>
//           </LocalizedClientLink>
//           <LocalizedClientLink href="/aboutus" className="flex flex-col items-center gap-1 p-2 text-gray-600 hover:text-blue-600 transition-colors">
//             <FiHeart className="w-5 h-5" />
//             <span className="text-xs">About</span>
//           </LocalizedClientLink>
//         </div>
//       </div>
//     </div>
//   )
// }

import { Suspense } from "react"
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa"
import { FiSearch, FiShoppingBag, FiUser, FiHeart } from "react-icons/fi"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Image from "next/image"
import Logo from "../../../../app/assets/Icons/logo.png"
import ProductSearch from "@modules/home/components/hero/ProductSearch"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      {/* Top Header with Social Media - Mobile Optimized */}
      <div className="h-10 sm:h-12 bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-lg">
        <div className="h-full">
          <div className="flex items-center justify-between w-full h-full px-2 sm:px-4 lg:px-8">
            {/* Social Media Icons - Left */}
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="text-white/70 text-xs font-medium hidden md:block">
                Follow us:
              </span>
              <div className="flex items-center gap-1 sm:gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                >
                  <FaFacebook className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover:text-white transition-colors" />
                  <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </a>
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-green-500 transition-all duration-300 transform hover:scale-110"
                >
                  <FaWhatsapp className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover:text-white transition-colors" />
                  <div className="absolute inset-0 rounded-full bg-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </a>
                <a
                  href="https://instagram.com/your_instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110"
                >
                  <FaInstagram className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover:text-white transition-colors" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-blue-400 transition-all duration-300 transform hover:scale-110"
                >
                  <FaYoutube className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover:text-white transition-colors" />
                  <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </a>
              </div>
            </div>

            {/* Logo - Center (Mobile Optimized) */}
            <LocalizedClientLink
              href="/"
              className="group flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300 transform hover:scale-105"
              data-testid="nav-store-link"
            >
              <div className="relative">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-1 sm:p-1.5 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={Logo}
                    alt="logo"
                    className="w-full h-full object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse" />
              </div>
              <span className="text-white font-bold text-sm sm:text-lg tracking-wide group-hover:text-blue-200 transition-colors duration-300">
                HitlerAbi
              </span>
            </LocalizedClientLink>

            {/* Right Side Info - Responsive */}
            <div className="flex items-center gap-2 sm:gap-4 text-white/70 text-xs">
              <div className="w-px h-3 sm:h-4 bg-white/20 hidden sm:block" />
              <span className="hidden lg:block text-xs">24/7 Support</span>
              <span className="block lg:hidden text-xs">Support</span>
              <LocalizedClientLink
                href="/account"
                className="group relative p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FiUser className="w-4 h-4 sm:w-5 sm:h-5" />
                <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </LocalizedClientLink>
            </div>
          </div>
        </div>
      </div>

      <header className="relative h-16 sm:h-20 mx-auto bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
        <nav className="flex items-center justify-between w-full h-full px-2 sm:px-4 lg:px-8">
          {/* Left - Menu */}
          <div className="flex items-center">
            <div className="h-full flex items-center">
              <SideMenu regions={regions} />
            </div>
          </div>

          {/* Mobile/Tablet Layout (below 768px) */}
          <div className="flex md:hidden items-center gap-x-4 h-full flex-1 basis-0 justify-between">
            <div className="relative w-full max-w-sm">
              <ProductSearch />
            </div>

            {/* Mobile Action Buttons */}
            <div className="flex items-center gap-2">
              {/* Cart Button - Always Visible on Mobile */}
              <Suspense
                fallback={
                  <div className="group relative p-2 rounded-lg bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 transition-all duration-200">
                    <FiShoppingBag className="w-5 h-5 text-gray-600 group-hover:text-blue-500 transition-colors duration-200" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                      0
                    </span>
                  </div>
                }
              >
                <div className="relative">
                  <CartButton />
                </div>
              </Suspense>

              {/* User Account Button - Mobile */}
              {/* <LocalizedClientLink
                href="/account"
                className="group relative p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FiUser className="w-5 h-5" />
                <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </LocalizedClientLink> */}
            </div>
          </div>

          {/* Desktop Layout (768px and above) */}
          <div className="hidden md:flex items-center gap-x-6 h-full flex-1 basis-0 justify-between text-[14px]">
            <div className="relative w-full max-w-sm">
              <ProductSearch />
            </div>

            {/* <div className="flex items-center gap-x-6 h-full text-[14px] justify-between text-nowrap">
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/customerlist"
                data-testid="nav-account-link"
              >
                Customer List
              </LocalizedClientLink>
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/store"
                data-testid="nav-account-link"
              >
                Store
              </LocalizedClientLink>
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/aboutus"
                data-testid="nav-account-link"
              >
                About Us
              </LocalizedClientLink>
              <Suspense
                fallback={
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base flex gap-2"
                    href="/cart"
                    data-testid="nav-cart-link"
                  >
                    Cart (0)
                  </LocalizedClientLink>
                }
              >
                <CartButton />
              </Suspense>
            </div> */}
            <div className="flex items-center gap-x-6 h-full text-[14px] justify-between text-nowrap">
              <LocalizedClientLink
                className="relative hover:text-ui-fg-base transition-all duration-300 ease-out
          hover:scale-105 hover:-translate-y-0.5
          before:content-[''] before:absolute before:bottom-0 before:left-0 
          before:w-0 before:h-0.5 before:bg-current before:transition-all before:duration-300
          hover:before:w-full
          focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:rounded-sm"
                href="/customerlist"
                data-testid="nav-account-link"
              >
                Customer List
              </LocalizedClientLink>

              <LocalizedClientLink
                className="relative hover:text-ui-fg-base transition-all duration-300 ease-out
          hover:scale-105 hover:-translate-y-0.5
          before:content-[''] before:absolute before:bottom-0 before:left-0 
          before:w-0 before:h-0.5 before:bg-current before:transition-all before:duration-300
          hover:before:w-full
          focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:rounded-sm"
                href="/store"
                data-testid="nav-account-link"
              >
                Store
              </LocalizedClientLink>

              <LocalizedClientLink
                className="relative hover:text-ui-fg-base transition-all duration-300 ease-out
          hover:scale-105 hover:-translate-y-0.5
          before:content-[''] before:absolute before:bottom-0 before:left-0 
          before:w-0 before:h-0.5 before:bg-current before:transition-all before:duration-300
          hover:before:w-full
          focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:rounded-sm"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>

              <LocalizedClientLink
                className="relative hover:text-ui-fg-base transition-all duration-300 ease-out
          hover:scale-105 hover:-translate-y-0.5
          before:content-[''] before:absolute before:bottom-0 before:left-0 
          before:w-0 before:h-0.5 before:bg-current before:transition-all before:duration-300
          hover:before:w-full
          focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:rounded-sm"
                href="/aboutus"
                data-testid="nav-account-link"
              >
                About Us
              </LocalizedClientLink>

              <Suspense
                fallback={
                  <LocalizedClientLink
                    className="relative hover:text-ui-fg-base flex gap-2 transition-all duration-300 ease-out
              hover:scale-105 hover:-translate-y-0.5
              before:content-[''] before:absolute before:bottom-0 before:left-0 
              before:w-0 before:h-0.5 before:bg-current before:transition-all before:duration-300
              hover:before:w-full
              focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:rounded-sm"
                    href="/cart"
                    data-testid="nav-cart-link"
                  >
                    Cart (0)
                  </LocalizedClientLink>
                }
              >
                {/* <CartButton /> */}
                <CartButton />
              </Suspense>
            </div>
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </header>
    </div>
  )
}
