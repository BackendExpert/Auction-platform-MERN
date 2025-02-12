import React from 'react'
import { RiAuctionLine } from "react-icons/ri";
import { FaBox } from "react-icons/fa";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import CountUp from 'react-countup';

const SallerDashboard = () => {
    const sallerData = [
        {
            id: 1,
            name: 'My All Auction',
            value: 500,
            icon: RiAuctionLine
        },
        {
            id: 2,
            name: 'Items Sold',
            value: 500,
            icon: FaBox
        },
        {
            id: 3,
            name: 'My Income',
            value: 500,
            icon: FaCircleDollarToSlot
        },
    ]

  return (
    <div>
        <h1 className="font-semibold text-xl text-[#FF5722] uppercase">Saller Dashboard</h1>
        <hr />


        <div className="grid xl:grid-cols-3 gap-4">
            {
                sallerData.map((data, index) => {
                    return (
                        <div className="py-4 px-4 mt-4 bg-[#FF5722] rounded-md shadow-xl text-white" key={index}>
                            <div className="flex justify-between">
                                <div className="">
                                    <h1 className="text-xl font-semibold">{data.name}</h1>
                                    <p className="pt-2">{data.name === "My Income" ? <span className='pr-1'>$</span> : <span></span>} <CountUp end={data.value} duration={5}/></p>
                                </div>
                                <div className="">
                                    <data.icon className='h-10 w-auto' />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default SallerDashboard