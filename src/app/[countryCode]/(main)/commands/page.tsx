'use client';

import React, { useEffect, useState } from 'react';
import { handleGetNotes } from '@lib/data/handleGetNotes';
import { FiShoppingBag } from 'react-icons/fi';
import { HiUsers } from 'react-icons/hi';
import { IoCalendarOutline } from "react-icons/io5";
import { BsChatLeftText } from "react-icons/bs";

type Note = {
  id: string;
  content: string;
  created_at?: string;
};

const CommandList = () => {
  const [customerCommand, setCustomerCommand] = useState<Note[]>([]);

  useEffect(() => {
    const handleFetch = async () => {
      const res = await handleGetNotes();
      if (res.success) {
        setCustomerCommand(res.notes);
      }
    };

    handleFetch();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg shadow-lg">
            {/* <BsChatLeftText size={32} /> */}
            <h1 className="text-3xl font-bold">Customer Commands</h1>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-gray-50 to-gray-100 flex justify-between items-center">
            <div className="flex items-center">
              {/* <HiUsers className="h-6 w-6 text-gray-600 mr-2" /> */}
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Commands
              </h3>
            </div>
          </div>

          <div className="overflow-x-auto">
            {customerCommand?.length > 0 ? (
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Command
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {customerCommand.map((item, index) => (
                    <tr
                      key={item.id || index}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div className="flex items-center">
                          <IoCalendarOutline className="h-5 w-5 text-gray-400 mr-2" />
                          {item.created_at
                            ? new Date(item.created_at).toLocaleDateString("en-GB") // DD/MM/YYYY
                                .replace(/\//g, "-") // convert to DD-MM-YYYY
                            : "N/A"
                        }
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <BsChatLeftText className="h-5 w-5 text-gray-400 mr-2" />
                          {item.content}
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
  );
};

export default CommandList;
