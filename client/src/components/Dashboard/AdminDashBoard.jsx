import React from 'react'
import { admindata } from './DashData'

const AdminDashBoard = () => {
  return (
    <div>
        <h1 className="uppercase text-[#FF5722] font-semibold text-xl">admin dashboard</h1>

        <div className="">
            <div className="grid xl:grid-cols-4 gap-4">
                {
                    admindata.map((data, index) => {
                        return (
                            <div className="bg-[#FF5722] text-white rounded shadow-xl py-4 px-6" key={index}>
                                <h1 className="">{data.name}</h1>
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