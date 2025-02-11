import React from 'react'
import { admindata } from './DashData'
import Countup from 'react-countup'
import ChartBar from '../Charts/ChartBar'
import AdminDashTable from './AdminDashTable'


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
        <div className="xl:flex ">
            <div className="w-full my-4 md:block hidden">
                <ChartBar />
            </div>
            <div className="mt-4 w-full">
                    <h1 className="text-xl text-[#FF5722] font-semibold uppercase">Best Sallers</h1>
                    
                    <table className='table-auto w-full py-2 rounded mt-2'>
                        <thead className='bg-[#FF5722]'>
                            <tr className='text-white'>
                                <th className='py-4 w-1/4'>Rank</th>
                                <th className='py-4 w-1/2'>Name</th>
                                <th className='py-4 w-1/4'>Sales</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='h-12 text-center bg-gray-100 border-b border-gray-300'>
                                <td className='font-semibold'>1</td>
                                <td>Kamal</td>
                                <td>500</td>
                            </tr>
                            <tr className='h-12 text-center bg-gray-100 border-b border-gray-300'>
                                <td className='font-semibold'>1</td>
                                <td>Kamal</td>
                                <td>500</td>
                            </tr>
                            <tr className='h-12 text-center bg-gray-100 border-b border-gray-300'>
                                <td className='font-semibold'>1</td>
                                <td>Kamal</td>
                                <td>500</td>
                            </tr>
                            <tr className='h-12 text-center bg-gray-100 border-b border-gray-300'>
                                <td className='font-semibold'>1</td>
                                <td>Kamal</td>
                                <td>500</td>
                            </tr>
                            <tr className='h-12 text-center bg-gray-100 border-b border-gray-300'>
                                <td className='font-semibold'>1</td>
                                <td>Kamal</td>
                                <td>500</td>
                            </tr>
                        </tbody>
                    </table>


            </div>
        </div>


        <div className="mt-8">
            <AdminDashTable />
        </div>
    </div>
  )
}

export default AdminDashBoard