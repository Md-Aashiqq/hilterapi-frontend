import React from "react"

import UnderlineLink from "@modules/common/components/interactive-link"

import AccountNav from "../components/account-nav"
import { HttpTypes } from "@medusajs/types"

interface AccountLayoutProps {
  customer: HttpTypes.StoreCustomer | null
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  return (
    <div className="flex-1 small:py-12" data-testid="account-page">
      <div className="flex-1 content-container h-full max-w-5xl bg-white flex flex-col">
        {/* <div className="grid grid-cols-1  small:grid-cols-[240px_1fr] py-12">
          <div>{customer && <AccountNav customer={customer} />}</div>
          <div className="flex-1">{children}</div>
        </div> */}
        <div className="flex flex-col small:flex-row gap-6 small:gap-8 py-8 small:py-12 px-4 small:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="w-full small:w-64 small:flex-shrink-0">
            {customer && <AccountNav customer={customer} />}
          </div>

          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              {children}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row gap-4 md:gap-6 xl:gap-8 py-6 md:py-8 xl:py-12 px-4 md:px-6 xl:px-8 max-w-screen-2xl mx-auto">
        <div className="w-full md:w-64 xl:w-80 md:flex-shrink-0">
          <div className="sticky top-24">
            {customer && <AccountNav customer={customer} />}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="flex flex-col small:flex-row items-end justify-between small:border-t border-gray-200 py-12 gap-8">
        <div>
          <h3 className="text-xl-semi mb-4">Got questions?</h3>
          <span className="txt-medium">
            You can find frequently asked questions and answers on our customer
            service page.
          </span>
        </div>
        <div>
          <UnderlineLink href="/customer-service">
            Customer Service
          </UnderlineLink>
        </div>
      </div> */}
    </div>
  )
}

export default AccountLayout
