import { Suspense } from "react"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Image from "next/image"
import Logo from "../../../../app/assets/Icons/logo.png"
export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      {/* Top Header with Social Media */}
      <div className="h-10 bg-gray-100">
        <div className="content-container h-full">
          <div className="flex items-center justify-between w-full h-full px-10">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-ui-fg-base">
              <FaFacebook size={16} />
            </a>
            <a href="https://instagram.com/the_h.itler_abi_" target="_blank" rel="noopener noreferrer" className="hover:text-ui-fg-base">
              <FaInstagram size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-ui-fg-base">
              <FaTwitter size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full gap-2 bg-[#000] pe-2">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase flex items-center gap-2"
              data-testid="nav-store-link"
            >
              <div className="p-[6px] "><Image src={Logo} alt="logo" className="w-[30px]" /></div>
              
              {/* <LocalizedClientLink
                href="/"
                className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
                data-testid="nav-store-link"
              > */}
              <p className="!text-[#fff]">HitlerAbi</p>
              
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end text-[14px]">
            <div className="hidden small:flex items-center gap-x-6 h-full text-[14px]">
              {/* <div className="relative">
                <input
                  type="search"
                  placeholder="Search products..."
                  className="py-2 px-8 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-300"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              </div> */}
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
            </div>
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
          </div>
        </nav>
      </header>
    </div>
  )
}
