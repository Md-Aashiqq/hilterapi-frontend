// "use client"

// import { clx } from "@medusajs/ui"
// import { ArrowRightOnRectangle } from "@medusajs/icons"
// import { useParams, usePathname } from "next/navigation"

// import ChevronDown from "@modules/common/icons/chevron-down"
// import User from "@modules/common/icons/user"
// import MapPin from "@modules/common/icons/map-pin"
// import Package from "@modules/common/icons/package"
// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import { HttpTypes } from "@medusajs/types"
// import { signout } from "@lib/data/customer"

// const AccountNav = ({
//   customer,
// }: {
//   customer: HttpTypes.StoreCustomer | null
// }) => {
//   const route = usePathname()
//   const { countryCode } = useParams() as { countryCode: string }

//   const handleLogout = async () => {
//     localStorage.clear()
//     await signout(countryCode)
//   }

//   return (
//     <div>
//       <div className="small:hidden" data-testid="mobile-account-nav">
//         {route !== `/${countryCode}/account` ? (
//           <LocalizedClientLink
//             href="/account"
//             className="flex items-center gap-x-2 text-small-regular py-2"
//             data-testid="account-main-link"
//           >
//             <>
//               <ChevronDown className="transform rotate-90" />
//               <span>Account</span>
//             </>
//           </LocalizedClientLink>
//         ) : (
//           <>
//             <div className="text-xl-semi mb-4 px-8">
//               Hello {customer?.first_name}
//             </div>
//             <div className="text-base-regular">
//               <ul>
//                 <li>
//                   <LocalizedClientLink
//                     href="/account/profile"
//                     className="flex items-center justify-between py-4 border-b border-gray-200 px-8"
//                     data-testid="profile-link"
//                   >
//                     <>
//                       <div className="flex items-center gap-x-2">
//                         <User size={20} />
//                         <span>Profile</span>
//                       </div>
//                       <ChevronDown className="transform -rotate-90" />
//                     </>
//                   </LocalizedClientLink>
//                 </li>
//                 <li>
//                   <LocalizedClientLink
//                     href="/cart"
//                     className="flex items-center justify-between py-4 border-b border-gray-200 px-8"
//                     data-testid="addresses-link"
//                   >
//                     <>
//                       <div className="flex items-center gap-x-2">
//                         <MapPin size={20} />
//                         <span>Cart</span>
//                       </div>
//                       <ChevronDown className="transform -rotate-90" />
//                     </>
//                   </LocalizedClientLink>
//                 </li>
//                 <li>
//                   <LocalizedClientLink
//                     href="/account/addresses"
//                     className="flex items-center justify-between py-4 border-b border-gray-200 px-8"
//                     data-testid="addresses-link"
//                   >
//                     <>
//                       <div className="flex items-center gap-x-2">
//                         <MapPin size={20} />
//                         <span>Addresses</span>
//                       </div>
//                       <ChevronDown className="transform -rotate-90" />
//                     </>
//                   </LocalizedClientLink>
//                 </li>
//                 <li>
//                   <LocalizedClientLink
//                     href="/account/orders"
//                     className="flex items-center justify-between py-4 border-b border-gray-200 px-8"
//                     data-testid="orders-link"
//                   >
//                     <div className="flex items-center gap-x-2">
//                       <Package size={20} />
//                       <span>Orders</span>
//                     </div>
//                     <ChevronDown className="transform -rotate-90" />
//                   </LocalizedClientLink>
//                 </li>
//                 <li>
//                   <button
//                     type="button"
//                     className="flex items-center justify-between py-4 border-b border-gray-200 px-8 w-full"
//                     onClick={handleLogout}
//                     data-testid="logout-button"
//                   >
//                     <div className="flex items-center gap-x-2">
//                       <ArrowRightOnRectangle />
//                       <span>Log out</span>
//                     </div>
//                     <ChevronDown className="transform -rotate-90" />
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </>
//         )}
//       </div>
//       <div className="hidden small:block" data-testid="account-nav">
//         <div>
//           <div className="pb-4">
//             <h3 className="text-base-semi">Account</h3>
//           </div>
//           <div className="text-base-regular">
//             <ul className="flex mb-0 justify-start items-start flex-col gap-y-4">
//               <li>
//                 <AccountNavLink
//                   href="/account"
//                   route={route!}
//                   data-testid="overview-link"
//                 >
//                   Overview
//                 </AccountNavLink>
//               </li>
//               <li className="hover:bg-gray-100 hover:px-[9px] hover:py-[2px] transition-all duration-300 ease-in-out">
//                 <AccountNavLink
//                   href="/account/profile"
//                   route={route!}
//                   data-testid="profile-link"
//                 >
//                   <div className="flex items-center gap-x-2">
//                     <User size={20} />
//                     <span>Profile</span>
//                   </div>
//                 </AccountNavLink>
//               </li>
//               <li className="hover:bg-gray-100 hover:px-[9px] hover:py-[2px] transition-all duration-300 ease-in-out">
//                 <AccountNavLink
//                   href="/cart"
//                   route={route!}
//                   data-testid="orders-link"
//                 >
//                   <div className="flex items-center gap-x-2">
//                     <Package size={20} />
//                     <span>Cart</span>
//                   </div>
//                 </AccountNavLink>
//               </li>
//               <li className="hover:bg-gray-100 hover:px-[9px] hover:py-[2px] transition-all duration-300 ease-in-out">
//                 <AccountNavLink
//                   href="/account/addresses"
//                   route={route!}
//                   data-testid="addresses-link"
//                 >
//                   <div className="flex items-center gap-x-2">
//                     <MapPin size={20} />
//                     <span>Addresses</span>
//                   </div>
//                 </AccountNavLink>
//               </li>

//               <li className="hover:bg-gray-100 hover:px-[9px] hover:py-[2px] transition-all duration-300 ease-in-out">
//                 <AccountNavLink
//                   href="/account/orders"
//                   route={route!}
//                   data-testid="orders-link"
//                 >
//                   <div className="flex items-center gap-x-2">
//                     <Package size={20} />
//                     <span>Orders</span>
//                   </div>
//                 </AccountNavLink>
//               </li>
//               <li className="text-grey-700 hover:bg-gray-100 hover:px-[9px] hover:py-[2px] transition-all duration-300 ease-in-out">
//                 <button
//                   type="button"
//                   onClick={handleLogout}
//                   data-testid="logout-button"
//                 >
//                   <div className="flex items-center gap-x-2">
//                     <ArrowRightOnRectangle />
//                     <span>Log out</span>
//                   </div>
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// type AccountNavLinkProps = {
//   href: string
//   route: string
//   children: React.ReactNode
//   "data-testid"?: string
// }

// const AccountNavLink = ({
//   href,
//   route,
//   children,
//   "data-testid": dataTestId,
// }: AccountNavLinkProps) => {
//   const { countryCode }: { countryCode: string } = useParams()

//   const active = route.split(countryCode)[1] === href
//   return (
//     <LocalizedClientLink
//       href={href}
//       className={clx("text-ui-fg-subtle hover:text-ui-fg-base", {
//         "text-ui-fg-base font-semibold": active,
//       })}
//       data-testid={dataTestId}
//     >
//       {children}
//     </LocalizedClientLink>
//   )
// }

// export default AccountNav

"use client"

import { clx } from "@medusajs/ui"
import { ArrowRightOnRectangle } from "@medusajs/icons"
import { useParams, usePathname } from "next/navigation"
import { useState } from "react"

import ChevronDown from "@modules/common/icons/chevron-down"
import User from "@modules/common/icons/user"
import MapPin from "@modules/common/icons/map-pin"
import Package from "@modules/common/icons/package"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"
import { signout } from "@lib/data/customer"

const AccountNav = ({
  customer,
}: {
  customer: HttpTypes.StoreCustomer | null
}) => {
  const route = usePathname()
  const { countryCode } = useParams() as { countryCode: string }
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      localStorage.clear()
      await signout(countryCode)
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      setIsLoggingOut(false)
    }
  }

  const navigationItems = [
    {
      href: "/account",
      label: "Overview",
      icon: User,
      description: "Account dashboard"
    },
    {
      href: "/account/profile",
      label: "Profile",
      icon: User,
      description: "Personal information"
    },
    {
      href: "/cart",
      label: "Shopping Cart",
      icon: Package,
      description: "Items in your cart"
    },
    {
      href: "/account/addresses",
      label: "Addresses",
      icon: MapPin,
      description: "Shipping & billing addresses"
    },
    {
      href: "/account/orders",
      label: "Order History",
      icon: Package,
      description: "View past orders"
    }
  ]

  return (
    <div className="w-full">
      {/* Mobile Navigation */}
      <div className="block small:hidden" data-testid="mobile-account-nav">
        {route !== `/${countryCode}/account` ? (
          <LocalizedClientLink
            href="/account"
            className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
            data-testid="account-main-link"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900">Account</div>
              <div className="text-sm text-gray-500">Manage your account</div>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400 transform rotate-90" />
          </LocalizedClientLink>
        ) : (
          <div className="space-y-4">
            {/* Mobile Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-lg font-semibold">
                    Hello, {customer?.first_name || 'User'}!
                  </div>
                  <div className="text-blue-100 text-sm">
                    Welcome back to your account
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {navigationItems.map((item, index) => {
                const Icon = item.icon
                const isActive = route.split(countryCode)[1] === item.href
                
                return (
                  <LocalizedClientLink
                    key={item.href}
                    href={item.href}
                    className={clx(
                      "flex items-center gap-4 p-4 transition-all duration-200",
                      "hover:bg-blue-50 active:bg-blue-100",
                      index !== navigationItems.length - 1 && "border-b border-gray-100",
                      isActive && "bg-blue-50 border-l-4 border-l-blue-500"
                    )}
                    data-testid={`${item.label.toLowerCase().replace(' ', '-')}-link`}
                  >
                    <div className={clx(
                      "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                      isActive 
                        ? "bg-blue-500 text-white" 
                        : "bg-gray-100 text-gray-600"
                    )}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className={clx(
                        "font-medium transition-colors",
                        isActive ? "text-blue-600" : "text-gray-900"
                      )}>
                        {item.label}
                      </div>
                      <div className="text-sm text-gray-500">{item.description}</div>
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-400 transform -rotate-90" />
                  </LocalizedClientLink>
                )
              })}

              {/* Mobile Logout */}
              <button
                type="button"
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="flex items-center gap-4 p-4 w-full text-left hover:bg-red-50 transition-all duration-200 disabled:opacity-50"
                data-testid="logout-button"
              >
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  {isLoggingOut ? (
                    <div className="w-5 h-5 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <ArrowRightOnRectangle className="w-5 h-5 text-red-600" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-red-600">
                    {isLoggingOut ? 'Signing out...' : 'Sign Out'}
                  </div>
                  <div className="text-sm text-red-400">End your session</div>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden small:block" data-testid="account-nav">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 px-4">
          {/* Desktop Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Account</h3>
                <p className="text-gray-500">Manage your account settings</p>
              </div>
            </div>
            {customer && (
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                <div className="text-sm text-gray-600">Welcome back,</div>
                <div className="font-semibold text-gray-900">
                  {customer.first_name} {customer.last_name}
                </div>
              </div>
            )}
          </div>

          {/* Desktop Menu Items */}
          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = route.split(countryCode)[1] === item.href
              
              return (
                <AccountNavLink
                  key={item.href}
                  href={item.href}
                  route={route!}
                  isActive={isActive}
                  data-testid={`${item.label.toLowerCase().replace(' ', '-')}-link`}
                >
                  <div className="flex items-center gap-3 group-hover:gap-4 transition-all duration-200">
                    <Icon className={clx(
                      "w-5 h-5 transition-colors",
                      isActive ? "text-blue-600" : "text-gray-500 group-hover:text-blue-600"
                    )} />
                    <div className="flex-1">
                      <div className={clx(
                        "font-medium transition-colors",
                        isActive ? "text-blue-600" : "text-gray-900 group-hover:text-blue-600"
                      )}>
                        {item.label}
                      </div>
                      <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </AccountNavLink>
              )
            })}

            {/* Desktop Logout */}
            <div className="pt-4 mt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="group flex items-center gap-3 w-full p-3 rounded-xl text-left hover:bg-red-50 transition-all duration-200 disabled:opacity-50"
                data-testid="logout-button"
              >
                <div className="flex items-center gap-3 group-hover:gap-4 transition-all duration-200">
                  {isLoggingOut ? (
                    <div className="w-5 h-5 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <ArrowRightOnRectangle className="w-5 h-5 text-red-600" />
                  )}
                  <div className="flex-1">
                    <div className="font-medium text-red-600">
                      {isLoggingOut ? 'Signing out...' : 'Sign Out'}
                    </div>
                    <div className="text-sm text-red-400 group-hover:text-red-500 transition-colors">
                      End your session securely
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

type AccountNavLinkProps = {
  href: string
  route: string
  children: React.ReactNode
  isActive: boolean
  "data-testid"?: string
}

const AccountNavLink = ({
  href,
  route,
  children,
  isActive,
  "data-testid": dataTestId,
}: AccountNavLinkProps) => {
  return (
    <LocalizedClientLink
      href={href}
      className={clx(
        "group block p-3 rounded-xl transition-all duration-200",
        "hover:bg-blue-50 hover:shadow-sm",
        isActive && "bg-blue-50 shadow-sm border-l-4 border-l-blue-500"
      )}
      data-testid={dataTestId}
    >
      {children}
    </LocalizedClientLink>
  )
}

export default AccountNav