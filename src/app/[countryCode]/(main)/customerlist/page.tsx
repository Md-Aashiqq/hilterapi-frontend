import React from "react";
import logo from "../../../assets/Icons/logo.png"
import Image from "next/image";

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
            <div className="p-4 flex flex-col gap-4 my-8">
                {CustomerData.length > 0? (
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
                )}
            </div>
        </>
    )
}

export default CustomerList;