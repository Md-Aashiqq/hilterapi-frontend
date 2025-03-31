import React from "react";
import logo from "../../../assets/Icons/logo.png"
import Image from "next/image";
import style from "./customerList.module.css"

const CustomerList = () => {
    const CustomerData = [
        {
            name: "Guhan",
            product: "T-Shirt",
            productImg: logo
        },
        {
            name: "Ashick",
            product: "T-Shirt",
            productImg: logo
        }
    ]
    return(
        <>
            <p className="text-center p-4 txt-compact-xlarge-plus uppercase pt-[40px]">Customer List</p>
            <div className={`p-4 flex flex-col gap-4 my-8 ${style.customerListContainer}`}>
            <table className="border-collapse border border-gray-300 w-full">
  <thead>
    <tr className="bg-gray-200">
      <th className="border border-gray-300 px-4 py-2">S.no</th>
      <th className="border border-gray-300 px-4 py-2">Name</th>
      <th className="border border-gray-300 px-4 py-2">Product Name</th>
      <th className="border border-gray-300 px-4 py-2">Date</th>
    </tr>
  </thead>
  <tbody>
    {CustomerData.length > 0 ? (
      CustomerData.map((item, i) => (
        <tr key={i} className="hover:bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">{i + 1}</td>
          <td className="border border-gray-300 px-4 py-2">{item.name}</td>
          <td className="border border-gray-300 px-4 py-2">{item.product}</td>
          <td className="border border-gray-300 px-4 py-2">12/12/12</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={4} className="text-center py-4">No data available</td>
      </tr>
    )}
  </tbody>
</table>

                {/* {CustomerData.length > 0? (
                    <>
                        {CustomerData.map((item, i) => {
                            return (
                                <div key={i} className="flex flex-col gap-4 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] py-4 px-4 rounded-md min-h-[100px]">
                                    <div className="flex justify-between">
                                        <div>
                                            <p>{item.name}</p>
                                            <p>{item.product}</p>
                                        </div>
                                        <div className="shadow-md p-4 border border-black-500">
                                            <Image src={item.productImg} alt="product-image" className="w-[100px]"/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                ) : (
                    <>
                    <div>
                        <p>No Data Found</p>
                    </div>
                    </>
                )} */}
            </div>
        </>
    )
}

export default CustomerList;