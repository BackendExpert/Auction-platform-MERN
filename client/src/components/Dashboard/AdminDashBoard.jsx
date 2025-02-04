import React from 'react'
import { admindata } from './DashData'
import Countup from 'react-countup'

const AdminDashBoard = () => {
  return (
    <div>
        <h1 className="uppercase text-[#FF5722] font-semibold text-xl">admin dashboard</h1>

        <div className="">
            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4 mt-4">
                {
                    admindata.map((data, index) => {
                        return (
                            <div className="bg-[#FF5722] text-white rounded shadow-xl py-8 px-6" key={index}>
                                <div className="flex justify-between">
                                    <div className="">
                                        <data.icon className='h-16 w-auto' />
                                    </div>
                                    <div className="">
                                        <h1 className="text-xl font-semibold">{data.name}</h1>
                                        <p className="text-right text-xl pt-2">{ data.id === 4 ? <span className='font-semibold pr-2'>$</span> : <span></span>}<Countup end={data.value} duration={5}/> + </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    </div>
  )
}

export default AdminDashBoard