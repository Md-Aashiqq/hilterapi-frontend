// "use client"

// import { Popover, PopoverPanel, Transition } from "@headlessui/react"
// import { ArrowRightMini, XMark } from "@medusajs/icons"
// import { Text, clx, useToggleState } from "@medusajs/ui"
// import { Fragment } from "react"

// import { FiMenu } from "react-icons/fi";

// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import CountrySelect from "../country-select"
// import { HttpTypes } from "@medusajs/types"

// const SideMenuItems = {
//   "Home": "/",
//   "Customer List": "/customerlist",
//   "Store": "/store",
//   "Account": "/account",
//   "About Us": "/aboutus",
//   "Cart": "/cart",
//   "Comment": "/Comments",
// }

// const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
//   const toggleState = useToggleState()

//   return (
//     <div className="h-full">

//       <div className="flex items-center h-full">
//         <Popover className="h-full flex">
//           {({ open, close }) => (
//             <>
//               <div className="relative flex h-full">
//                 <Popover.Button
//                   data-testid="nav-menu-button"
//                   className="text-[14px] relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base"
//                 >
//                   <FiMenu className="w-[40px] text-[1.5rem]"/>
//                 </Popover.Button>
//               </div>

//               <Transition
//                 show={open}
//                 as={Fragment}
//                 enter="transition ease-out duration-150"
//                 enterFrom="opacity-0"
//                 enterTo="opacity-100 backdrop-blur-2xl"
//                 leave="transition ease-in duration-150"
//                 leaveFrom="opacity-100 backdrop-blur-2xl"
//                 leaveTo="opacity-0"
//               >
//                 <PopoverPanel className="mt-[4rem] flex flex-col absolute w-full pr-4 sm:pr-0 sm:w-1/3 2xl:w-1/4 sm:min-w-min h-[calc(100vh-1rem)] z-30 inset-x-0 text-sm text-ui-fg-on-color m-2 backdrop-blur-2xl mobileScreen: !w-[50%] !pr-[0px] tabletScreen: !w-[25%]">
//                   <div
//                     data-testid="nav-menu-popup"
//                     className="flex flex-col h-full bg-[rgba(3,7,18,0.5)] h-[calc(100%-88px)] rounded-rounded justify-between p-6"
//                   >
//                     <div className="flex justify-end" id="xmark">
//                       <button data-testid="close-menu-button" onClick={close}>
//                         <XMark />
//                       </button>
//                     </div>
//                     <ul className="flex flex-col gap-6 items-start justify-start mobileScreen: !gap-0">
//                       {Object.entries(SideMenuItems).map(([name, href]) => {
//                         return (
//                           <li key={name}>
//                             <LocalizedClientLink
//                               href={href}
//                               className="text-3xl leading-10 hover:text-ui-fg-disabled mobileScreen: !text-[16px]"
//                               onClick={close}
//                               data-testid={`${name.toLowerCase()}-link`}
//                             >
//                               {name}
//                             </LocalizedClientLink>
//                           </li>
//                         )
//                       })}
//                     </ul>
//                     <div className="flex flex-col gap-y-6">
//                       <div
//                         className="flex justify-between"
//                         onMouseEnter={toggleState.open}
//                         onMouseLeave={toggleState.close}
//                       >
//                         {regions && (
//                           <CountrySelect
//                             toggleState={toggleState}
//                             regions={regions}
//                           />
//                         )}
//                         <ArrowRightMini
//                           className={clx(
//                             "transition-transform duration-150",
//                             toggleState.state ? "-rotate-90" : ""
//                           )}
//                         />
//                       </div>
//                       <Text className="flex justify-between txt-compact-small">
//                         © {new Date().getFullYear()} HitlerAbi Store. All rights
//                         reserved.
//                       </Text>
//                     </div>
//                   </div>
//                 </PopoverPanel>
//               </Transition>
//             </>
//           )}
//         </Popover>
//       </div>
//     </div>
//   )
// }

// export default SideMenu


// "use client"

// import { Popover, PopoverPanel, Transition } from "@headlessui/react"
// import { ArrowRightMini, XMark } from "@medusajs/icons"
// import { Text, clx, useToggleState } from "@medusajs/ui"
// import { Fragment } from "react"
// import { FiMenu, FiHome, FiUsers, FiShoppingBag, FiUser, FiInfo, FiShoppingCart, FiMessageCircle } from "react-icons/fi"

// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import CountrySelect from "../country-select"
// import { HttpTypes } from "@medusajs/types"

// const SideMenuItems = [
//   { name: "Home", href: "/", icon: FiHome },
//   { name: "Customer List", href: "/customerlist", icon: FiUsers },
//   { name: "Store", href: "/store", icon: FiShoppingBag },
//   { name: "Account", href: "/account", icon: FiUser },
//   { name: "About Us", href: "/aboutus", icon: FiInfo },
//   { name: "Cart", href: "/cart", icon: FiShoppingCart },
//   { name: "Comments", href: "/Comments", icon: FiMessageCircle },
// ]

// const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
//   const toggleState = useToggleState()

//   return (
//     <div className="h-full">
//       <div className="flex items-center h-full">
//         <Popover className="h-full flex">
//           {({ open, close }) => (
//             <>
//               {/* Menu Button */}
//               <div className="relative flex h-full">
//                 <Popover.Button
//                   data-testid="nav-menu-button"
//                   className={clx(
//                     "relative h-full flex items-center justify-center w-12 rounded-lg",
//                     "transition-all duration-300 ease-out focus:outline-none",
//                     "hover:bg-gray-100 dark:hover:bg-gray-800",
//                     "group active:scale-95",
//                     open && "bg-gray-100 dark:bg-gray-800"
//                   )}
//                 >
//                   <div className="relative">
//                     <FiMenu 
//                       className={clx(
//                         "w-6 h-6 transition-all duration-300",
//                         "group-hover:scale-110",
//                         open && "rotate-90 scale-110"
//                       )}
//                     />
//                     {/* Animated dots */}
//                     <div className={clx(
//                       "absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full",
//                       "transition-all duration-300",
//                       open ? "scale-0" : "scale-100 animate-pulse"
//                     )} />
//                   </div>
//                 </Popover.Button>
//               </div>

//               {/* Overlay */}
//               <Transition
//                 show={open}
//                 as={Fragment}
//                 enter="transition-opacity ease-out duration-300"
//                 enterFrom="opacity-0"
//                 enterTo="opacity-100"
//                 leave="transition-opacity ease-in duration-200"
//                 leaveFrom="opacity-100"
//                 leaveTo="opacity-0"
//               >
//                 <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={close} />
//               </Transition>

//               {/* Sidebar Panel */}
//               <Transition
//                 show={open}
//                 as={Fragment}
//                 enter="transition-all ease-out duration-300"
//                 enterFrom="opacity-0 -translate-x-full"
//                 enterTo="opacity-100 translate-x-0"
//                 leave="transition-all ease-in duration-200"
//                 leaveFrom="opacity-100 translate-x-0"
//                 leaveTo="opacity-0 -translate-x-full"
//               >
//                 <PopoverPanel className="fixed left-0 top-0 h-full w-80 sm:w-96 z-50 flex flex-col">
//                   <div className="flex flex-col h-full bg-white dark:bg-gray-900 shadow-2xl border-r border-gray-200 dark:border-gray-700">
                    
//                     {/* Header */}
//                     <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
//                           <FiMenu className="w-5 h-5 text-white" />
//                         </div>
//                         <div>
//                           <Text className="font-bold text-lg text-gray-900 dark:text-white">Menu</Text>
//                           <Text className="text-xs text-gray-500 dark:text-gray-400">Navigate your store</Text>
//                         </div>
//                       </div>
                      
//                       <button 
//                         data-testid="close-menu-button" 
//                         onClick={close}
//                         className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center transition-colors duration-200 group"
//                       >
//                         <XMark className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors" />
//                       </button>
//                     </div>

//                     {/* Navigation Menu */}
//                     <div className="flex-1 overflow-y-auto py-6">
//                       <nav className="px-4">
//                         <ul className="space-y-2">
//                           {SideMenuItems.map((item, index) => {
//                             const Icon = item.icon
//                             return (
//                               <li key={item.name}>
//                                 <LocalizedClientLink
//                                   href={item.href}
//                                   onClick={close}
//                                   data-testid={`${item.name.toLowerCase()}-link`}
//                                   className={clx(
//                                     "group flex items-center gap-4 px-4 py-3 rounded-xl",
//                                     "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400",
//                                     "hover:bg-blue-50 dark:hover:bg-blue-900/20",
//                                     "transition-all duration-200 ease-out",
//                                     "transform hover:translate-x-1 hover:scale-[1.02]",
//                                     "border border-transparent hover:border-blue-100 dark:hover:border-blue-800"
//                                   )}
//                                   style={{
//                                     animationDelay: `${index * 50}ms`
//                                   }}
//                                 >
//                                   <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:bg-blue-100 dark:group-hover:bg-blue-800 transition-colors duration-200">
//                                     <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
//                                   </div>
//                                   <div className="flex-1">
//                                     <Text className="font-medium group-hover:font-semibold transition-all duration-200">
//                                       {item.name}
//                                     </Text>
//                                   </div>
//                                   <ArrowRightMini className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
//                                 </LocalizedClientLink>
//                               </li>
//                             )
//                           })}
//                         </ul>
//                       </nav>
//                     </div>

//                     {/* Footer */}
//                     <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
//                       {/* Country Select */}
//                       <div 
//                         className="mb-6 p-4 rounded-xl bg-white dark:bg-gray-700 shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow duration-200"
//                         onMouseEnter={toggleState.open}
//                         onMouseLeave={toggleState.close}
//                       >
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center gap-3">
//                             <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
//                               <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
//                                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
//                               </svg>
//                             </div>
//                             <div className="flex-1">
//                               {regions && (
//                                 <CountrySelect
//                                   toggleState={toggleState}
//                                   regions={regions}
//                                 />
//                               )}
//                             </div>
//                           </div>
//                           <ArrowRightMini
//                             className={clx(
//                               "w-4 h-4 text-gray-400 transition-transform duration-200",
//                               toggleState.state ? "-rotate-90" : "rotate-0"
//                             )}
//                           />
//                         </div>
//                       </div>

//                       {/* Copyright */}
//                       <div className="text-center">
//                         <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-4" />
//                         <Text className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
//                           © {new Date().getFullYear()} <span className="font-semibold text-gray-700 dark:text-gray-300">HitlerAbi Store</span>
//                           <br />
//                           All rights reserved.
//                         </Text>
                        
//                         {/* Social Icons */}
//                         <div className="flex justify-center gap-3 mt-4">
//                           {['twitter', 'facebook', 'instagram'].map((social) => (
//                             <div key={social} className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-blue-500 dark:hover:bg-blue-500 flex items-center justify-center transition-colors duration-200 cursor-pointer group">
//                               <div className="w-4 h-4 bg-gray-600 dark:bg-gray-300 group-hover:bg-white rounded-sm" />
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </PopoverPanel>
//               </Transition>
//             </>
//           )}
//         </Popover>
//       </div>
//     </div>
//   )
// }

// export default SideMenu

"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment, useEffect } from "react"
import { FiMenu, FiHome, FiUsers, FiShoppingBag, FiUser, FiInfo, FiShoppingCart, FiMessageCircle } from "react-icons/fi"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"

const SideMenuItems = [
  { name: "Home", href: "/", icon: FiHome },
  { name: "Customer List", href: "/customerlist", icon: FiUsers },
  { name: "Store", href: "/store", icon: FiShoppingBag },
  { name: "Account", href: "/account", icon: FiUser },
  { name: "About Us", href: "/aboutus", icon: FiInfo },
  { name: "Cart", href: "/cart", icon: FiShoppingCart },
  { name: "Comments", href: "/Comments", icon: FiMessageCircle },
]

const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
  const toggleState = useToggleState()

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    const handleBodyScroll = (isOpen: boolean) => {
      if (isOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
      }
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => {
            // Handle body scroll effect
            useEffect(() => {
              if (open) {
                document.body.style.overflow = 'hidden'
              } else {
                document.body.style.overflow = 'unset'
              }
              
              return () => {
                document.body.style.overflow = 'unset'
              }
            }, [open])

            return (
              <>
                {/* Menu Button */}
                <div className="relative flex h-full">
                  <Popover.Button
                    data-testid="nav-menu-button"
                    className={clx(
                      "relative h-full flex items-center justify-center w-12 rounded-lg",
                      "transition-all duration-300 ease-out focus:outline-none",
                      "hover:bg-gray-100 dark:hover:bg-gray-800",
                      "group active:scale-95",
                      open && "bg-gray-100 dark:bg-gray-800"
                    )}
                  >
                    <div className="relative">
                      <FiMenu 
                        className={clx(
                          "w-6 h-6 transition-all duration-300",
                          "group-hover:scale-110",
                          open && "rotate-90 scale-110"
                        )}
                      />
                      {/* Animated dots */}
                      <div className={clx(
                        "absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full",
                        "transition-all duration-300",
                        open ? "scale-0" : "scale-100 animate-pulse"
                      )} />
                    </div>
                  </Popover.Button>
                </div>

                {/* Overlay - Full Screen */}
                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition-opacity ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div 
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]" 
                    onClick={close}
                    style={{ height: '100vh', width: '100vw' }}
                  />
                </Transition>

                {/* Sidebar Panel - Full Height */}
                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition-all ease-out duration-300"
                  enterFrom="opacity-0 -translate-x-full"
                  enterTo="opacity-100 translate-x-0"
                  leave="transition-all ease-in duration-200"
                  leaveFrom="opacity-100 translate-x-0"
                  leaveTo="opacity-0 -translate-x-full"
                >
                  <PopoverPanel 
                    className="fixed left-0 top-0 w-80 sm:w-96 z-[70]"
                    style={{ height: '100vh', maxHeight: '100vh' }}
                  >
                    <div 
                      className="flex flex-col bg-white dark:bg-gray-900 shadow-2xl border-r border-gray-200 dark:border-gray-700"
                      style={{ height: '100vh', minHeight: '100vh' }}
                    >
                      
                      {/* Header - Fixed Height */}
                      <div className="flex-shrink-0 flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                            <FiMenu className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <Text className="font-bold text-lg text-gray-900 dark:text-white">Menu</Text>
                            <Text className="text-xs text-gray-500 dark:text-gray-400">Navigate your store</Text>
                          </div>
                        </div>
                        
                        <button 
                          data-testid="close-menu-button" 
                          onClick={close}
                          className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center transition-colors duration-200 group"
                        >
                          <XMark className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors" />
                        </button>
                      </div>

                      {/* Navigation Menu - Scrollable Content */}
                      <div className="flex-1 overflow-y-auto py-6" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                        <nav className="px-4">
                          <ul className="space-y-2">
                            {SideMenuItems.map((item, index) => {
                              const Icon = item.icon
                              return (
                                <li key={item.name}>
                                  <LocalizedClientLink
                                    href={item.href}
                                    onClick={close}
                                    data-testid={`${item.name.toLowerCase()}-link`}
                                    className={clx(
                                      "group flex items-center gap-4 px-4 py-3 rounded-xl",
                                      "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400",
                                      "hover:bg-blue-50 dark:hover:bg-blue-900/20",
                                      "transition-all duration-200 ease-out",
                                      "transform hover:translate-x-1 hover:scale-[1.02]",
                                      "border border-transparent hover:border-blue-100 dark:hover:border-blue-800"
                                    )}
                                    style={{
                                      animationDelay: `${index * 50}ms`
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:bg-blue-100 dark:group-hover:bg-blue-800 transition-colors duration-200">
                                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                                    </div>
                                    <div className="flex-1">
                                      <Text className="font-medium group-hover:font-semibold transition-all duration-200">
                                        {item.name}
                                      </Text>
                                    </div>
                                    <ArrowRightMini className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                                  </LocalizedClientLink>
                                </li>
                              )
                            })}
                          </ul>
                        </nav>
                      </div>

                      {/* Footer - Fixed Height */}
                      <div className="flex-shrink-0 p-6 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                        {/* Country Select */}
                        <div 
                          className="mb-6 p-4 rounded-xl bg-white dark:bg-gray-700 shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow duration-200"
                          onMouseEnter={toggleState.open}
                          onMouseLeave={toggleState.close}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                {regions && (
                                  <CountrySelect
                                    toggleState={toggleState}
                                    regions={regions}
                                  />
                                )}
                              </div>
                            </div>
                            <ArrowRightMini
                              className={clx(
                                "w-4 h-4 text-gray-400 transition-transform duration-200",
                                toggleState.state ? "-rotate-90" : "rotate-0"
                              )}
                            />
                          </div>
                        </div>

                        {/* Copyright */}
                        <div className="text-center">
                          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-4" />
                          <Text className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                            © {new Date().getFullYear()} <span className="font-semibold text-gray-700 dark:text-gray-300">HitlerAbi Store</span>
                            <br />
                            All rights reserved.
                          </Text>
                          
                          {/* <div className="flex justify-center gap-3 mt-4">
                            {['twitter', 'facebook', 'instagram'].map((social) => (
                              <div key={social} className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-blue-500 dark:hover:bg-blue-500 flex items-center justify-center transition-colors duration-200 cursor-pointer group">
                                <div className="w-4 h-4 bg-gray-600 dark:bg-gray-300 group-hover:bg-white rounded-sm" />
                              </div>
                            ))}
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </PopoverPanel>
                </Transition>
              </>
            )
          }}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu