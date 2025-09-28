// import { listCategories } from "@lib/data/categories"
// import { listCollections } from "@lib/data/collections"
// import { Text, clx } from "@medusajs/ui"

// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import MedusaCTA from "@modules/layout/components/medusa-cta"

// export default async function Footer() {
//   const { collections } = await listCollections({
//     fields: "*products",
//   })
//   const productCategories = await listCategories()

//   const contactUs = [
//     {
//       label: "Address:",
//       value:
//         "Hitler Abi karode Rd, Adaikkakuzhi P.O Kanayakumari Tamil Nadu 629 153",
//     },
//     {
//       label: "Phone number:",
//       value: "+91 7092381019",
//     },
//     {
//       label: "Social Media:",
//       value: "@topper_manic_ @the_h.itler_abi_ @aji_yazz",
//     },
//   ]
//   return (
//     <footer className="border-t border-ui-border-base w-full">
//       {/* <div className="pb-[60px]">
//         <AboutUs />
//       </div> */}
//       <div className="content-container flex flex-col w-full border-t border-ui-border-base">
//         <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between pt-[70px] pb-[60px]">
//           <div>
//             <LocalizedClientLink
//               href="/"
//               className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
//             >
//               HitlerAbi Store
//             </LocalizedClientLink>
//           </div>

//           <div className="!text-[14px] text-small-regular gap-10 2xsmall:!gap-x-8 grid !grid-cols-1 md:gap-x-8 grid grid-cols-2 sm:!grid-cols-[repeat(3,minmax(0,250px))]">
//             <div className="flex flex-col gap-y-2">
//               <span className="txt-small-plus txt-ui-fg-base !text-[14px]">Contact Us</span>
//               <ul
//                 className="grid grid-cols-1 gap-2"
//                 data-testid="footer-categories"
//               >
//                 {contactUs.map((item, index) => {
//                   return (
//                     <li
//                       className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
//                       key={index}
//                     >
//                       <div
//                         className={clx(
//                           "hover:text-ui-fg-base",
//                           "txt-small-plus flex gap-2"
//                         )}
//                         // href=""
//                         // href={`/categories/${c.handle}`}
//                         data-testid="category-link"
//                       >
//                         <p className="!w-[40%]">{item.label}</p>
//                         <p className={`w-[60%] ${item.label === "Instagram I’d:" && "break-words"}`}>
//                           {item.label === "Instagram I’d:" ? (
//                             item.value.split(" ").map((id, i) => 
//                               id.startsWith("@") ? (
//                                 <a 
//                                   key={i} 
//                                   href={`https://www.instagram.com/${id.slice(1)}`} 
//                                   target="_blank" 
//                                   rel="noopener noreferrer"
//                                   className="text-black-500 hover:underline mr-2"
//                                 >
//                                   {id}
//                                 </a>
//                               ) : null
//                             )
//                           ) : (
//                             item.value
//                           )}
//                         </p>         
//                       </div>
//                     </li>
//                   )
//                 })}
//               </ul>
//             </div>
//             {productCategories && productCategories?.length > 0 && (
//               <div className="flex flex-col gap-y-2">
//                 <span className="txt-small-plus txt-ui-fg-base !text-[14px]">
//                   Categories
//                 </span>
//                 <ul
//                   className="grid grid-cols-1 gap-2"
//                   data-testid="footer-categories"
//                 >
//                   {productCategories?.slice(0, 6).map((c) => {
//                     if (c.parent_category) {
//                       return
//                     }

//                     const children =
//                       c.category_children?.map((child) => ({
//                         name: child.name,
//                         handle: child.handle,
//                         id: child.id,
//                       })) || null

//                     return (
//                       <li
//                         className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
//                         key={c.id}
//                       >
//                         <LocalizedClientLink
//                           className={clx(
//                             "hover:text-ui-fg-base",
//                             children && "txt-small-plus"
//                           )}
//                           href={`/categories/${c.handle}`}
//                           data-testid="category-link"
//                         >
//                           {c.name}
//                         </LocalizedClientLink>
//                         {children && (
//                           <ul className="grid grid-cols-1 ml-3 gap-2">
//                             {children &&
//                               children.map((child) => (
//                                 <li key={child.id}>
//                                   <LocalizedClientLink
//                                     className="hover:text-ui-fg-base"
//                                     href={`/categories/${child.handle}`}
//                                     data-testid="category-link"
//                                   >
//                                     {child.name}
//                                   </LocalizedClientLink>
//                                 </li>
//                               ))}
//                           </ul>
//                         )}
//                       </li>
//                     )
//                   })}
//                 </ul>
//               </div>
//             )}
//             {collections && collections.length > 0 && (
//               <div className="flex flex-col gap-y-2">
//                 <span className="txt-small-plus txt-ui-fg-base !text-[14px]">
//                   Collections
//                 </span>
//                 <ul
//                   className={clx(
//                     "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
//                     {
//                       "grid-cols-2": (collections?.length || 0) > 3,
//                     }
//                   )}
//                 >
//                   {collections?.slice(0, 6).map((c) => (
//                     <li key={c.id}>
//                       <LocalizedClientLink
//                         className="hover:text-ui-fg-base"
//                         href={`/collections/${c.handle}`}
//                       >
//                         {c.title}
//                       </LocalizedClientLink>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             {/* <div className="flex flex-col gap-y-2">
//               <span className="txt-small-plus txt-ui-fg-base">HitlerAbi</span>
//               <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small"> */}
//             {/* <li>
//                   <a
//                     href="https://github.com/medusajs"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     GitHub
//                   </a>
//                 </li> */}
//             {/* <li>
//                   <a
//                     href="https://docs.medusajs.com"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     Documentation
//                   </a>
//                 </li> */}
//             {/* <li>
//                   <a
//                     href="https://github.com/medusajs/nextjs-starter-medusa"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     Source code
//                   </a>
//                 </li> */}
//             {/* </ul>
//             </div> */}
//           </div>
//         </div>
//         <div className="flex flex-col gap-y-2">
//           <span className="txt-small-plus txt-ui-fg-base !text-[14px]">Policies</span>
//           <ul className="grid grid-cols-2 gap-2 text-ui-fg-subtle txt-small">
//             <li>
//               <LocalizedClientLink
//                 href="/termsandconditions"
//                 className="hover:text-ui-fg-base"
//               >
//                 Terms and Conditions
//               </LocalizedClientLink>
//             </li>
//             <li>
//               <LocalizedClientLink
//                 href="/privacy-policy"
//                 className="hover:text-ui-fg-base"
//               >
//                 Privacy Policy
//               </LocalizedClientLink>
//             </li>
//             <li>
//               <LocalizedClientLink
//                 href="/refund-policy"
//                 className="hover:text-ui-fg-base"
//               >
//                 Refund Policy
//               </LocalizedClientLink>
//             </li>
//             <li>
//               <LocalizedClientLink
//                 href="/shipping-policy"
//                 className="hover:text-ui-fg-base"
//               >
//                 Shipping Policy
//               </LocalizedClientLink>
//             </li>
//             <li>
//               <LocalizedClientLink
//                 href="/contact"
//                 className="hover:text-ui-fg-base"
//               >
//                 Contact Us
//               </LocalizedClientLink>
//             </li>
//           </ul>
//         </div>
//         <div className="flex w-full mb-6 justify-between text-ui-fg-muted">
//           <Text className="txt-compact-small">
//             © {new Date().getFullYear()} HitlerAbi Store. All rights reserved.
//           </Text>
//           {/* <MedusaCTA /> */}
//         </div>
//       </div>
//     </footer>
//   )
// }

import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa"
import { FiMail, FiPhone, FiMapPin, FiClock, FiArrowRight } from "react-icons/fi"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { NewsletterForm, ScrollToTopButton } from "./FooterClientComponents"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  const contactUs = [
    {
      label: "Address:",
      value: "Hitler Abi karode Rd, Adaikkakuzhi P.O Kanayakumari Tamil Nadu 629 153",
      icon: FiMapPin,
    },
    {
      label: "Phone:",
      value: "+91 7092381019",
      icon: FiPhone,
    },
    {
      label: "Email:",
      value: "hitlerabi63@gmail.com",
      icon: FiMail,
    },
    {
      label: "Hours:",
      value: "Mon - Sat: 9:00 AM - 8:00 PM",
      icon: FiClock,
    },
  ]

  const socialLinks = [
    { name: "Facebook", icon: FaFacebook, url: "https://facebook.com", color: "hover:text-blue-600" },
    { name: "Instagram", icon: FaInstagram, url: "https://instagram.com/the_h.itler_abi_", color: "hover:text-pink-600" },
    { name: "Youtube", icon: FaYoutube, url: "https://youtube.com", color: "hover:text-blue-400" },
    { name: "WhatsApp", icon: FaWhatsapp, url: "https://whatsapp.com", color: "hover:text-green-500" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Main Footer Content */}
      <div className="relative">
        {/* Top Section */}
        <div className="border-b border-gray-700/50">
          <div className="content-container py-16 lg:py-20">
            
            {/* Newsletter Section */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Stay Updated
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Get the latest updates on new products, exclusive offers, and special discounts delivered straight to your inbox.
                  </p>
                </div>
                
                {/* Newsletter Form - Client Component */}
                <NewsletterForm />
              </div>

              {/* Brand Section */}
              <div className="space-y-6">
                <LocalizedClientLink
                  href="/"
                  className="inline-block group"
                >
                  <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                    HitlerAbi Store
                  </h2>
                </LocalizedClientLink>
                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  Your premier destination for quality products and exceptional service. We're committed to bringing you the best shopping experience.
                </p>
                
                {/* Social Media Links */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Follow Us</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={clx(
                            "group relative p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-gray-600/30",
                            "hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1",
                            social.color
                          )}
                        >
                          <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Footer Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-6 relative">
                  Contact Us
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                </h3>
                <div className="space-y-4">
                  {contactUs.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="group flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-colors duration-300">
                          <Icon className="w-4 h-4 text-blue-400" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-gray-300">{item.label}</p>
                          <p className="text-white text-sm leading-relaxed">{item.value}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Categories */}
              {productCategories && productCategories?.length > 0 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-6 relative">
                    Categories
                    <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  </h3>
                  <ul className="space-y-3">
                    {productCategories?.slice(0, 6).map((c) => {
                      if (c.parent_category) return null

                      return (
                        <li key={c.id}>
                          <LocalizedClientLink
                            className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 py-2"
                            href={`/categories/${c.handle}`}
                            data-testid="category-link"
                          >
                            <FiArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                            <span className="group-hover:translate-x-2 transition-transform duration-300">{c.name}</span>
                          </LocalizedClientLink>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}

              {/* Collections */}
              {collections && collections.length > 0 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-6 relative">
                    Collections
                    <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  </h3>
                  <ul className="space-y-3">
                    {collections?.slice(0, 6).map((c) => (
                      <li key={c.id}>
                        <LocalizedClientLink
                          className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 py-2"
                          href={`/collections/${c.handle}`}
                        >
                          <FiArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                          <span className="group-hover:translate-x-2 transition-transform duration-300">{c.title}</span>
                        </LocalizedClientLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Policies */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-6 relative">
                  Policies
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: "Terms & Conditions", href: "/termsandconditions" },
                    { name: "Privacy Policy", href: "/privacy-policy" },
                    { name: "Refund Policy", href: "/refund-policy" },
                    { name: "Shipping Policy", href: "/shipping-policy" },
                    { name: "Contact Us", href: "/contact" },
                  ].map((policy) => (
                    <li key={policy.name}>
                      <LocalizedClientLink
                        href={policy.href}
                        className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 py-2"
                      >
                        <FiArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        <span className="group-hover:translate-x-2 transition-transform duration-300">{policy.name}</span>
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="content-container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Text className="text-gray-400 text-sm">
                © {new Date().getFullYear()} HitlerAbi Store. All rights reserved.
              </Text>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span>Made with ❤️ in India</span>
                <span className="w-px h-4 bg-gray-600" />
                <span>Secure Shopping</span>
              </div>
            </div>
            
            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">We Accept:</span>
              <div className="flex items-center gap-2">
                {['Visa', 'Razor Pay', 'PayPal', 'GPay'].map((method) => (
                  <div
                    key={method}
                    className="px-3 py-1 bg-white/10 rounded-md text-xs font-medium text-gray-300 backdrop-blur-sm"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - Client Component */}
      <ScrollToTopButton />
    </footer>
  )
}
