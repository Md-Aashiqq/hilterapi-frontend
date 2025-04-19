'use client'
import React, { useState } from "react"
import { listCustomers } from "@lib/data/customer"
import { FiShoppingBag, FiSearch } from "react-icons/fi"
import { HiUsers } from "react-icons/hi"
import CustomerBanner from "./banner"
import CommandBox from "@modules/common/components/ChatBox"

interface Customer {
  product_name: string;
  customer_bought_first_name: string[];
}

const CustomerList = () => {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  
  React.useEffect(() => {
    const fetchCustomers = async () => {
      const data = await listCustomers()
      if (data && Array.isArray(data)) {
        setCustomers(data as Customer[])
      } else {
        setCustomers([])
      }
    }
    fetchCustomers()
  }, [])

  const filteredCustomers = customers.filter(customer => 
    customer.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.customer_bought_first_name.some(name => 
      name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  return (
    <div className="min-h-screen bg-gray-50 py-8">
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg shadow-lg">
            <FiShoppingBag size={32} />
            <h1 className="text-3xl font-bold">Customer Purchases</h1>
          </div>
        </div>
        <div className="w-full flex justify-center pb-4"><CommandBox /></div>
        {/* Search Bar */}
        
        <div className="pb-4">
          <CustomerBanner />
        </div>
        {/* Table Section */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-gray-50 to-gray-100 flex justify-between items-center">
            <div className="flex items-center">
              <HiUsers className="h-6 w-6 text-gray-600 mr-2" />
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Purchase Details
              </h3>
            </div>
            <div className="mb-6">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search customers..."
              />
            </div>
          </div>
          </div>
          
          <div className="overflow-x-auto">
            {filteredCustomers.length > 0 ? (
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    {/* <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product Name
                    </th> */}
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customers
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredCustomers.map((item, index) => (
                    <tr 
                      key={index}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div className="flex items-center">
                          <FiShoppingBag className="h-5 w-5 text-gray-400 mr-2" />
                          {item.product_name}
                        </div>
                      </td> */}
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <HiUsers className="h-5 w-5 text-gray-400 mr-2" />
                          {item.customer_bought_first_name.join(", ")}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No results found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerList