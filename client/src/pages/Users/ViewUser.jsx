import React from 'react'
import { useParams } from 'react-router-dom'
import { RiAuctionLine, RiAuctionFill } from "react-icons/ri";


const ViewUser = () => {
    const { id } = useParams()
  return (
    <div>
        <div className="md:flex">
            <table className='md:w-1/2 w-full text-gray-500'>
                <tr className='bg-gray-100 border-b border-gray-200 h-12'>
                    <td className='font-semibold pl-4'>Username: </td>
                    <td>Jhean</td>
                </tr>
                <tr className='bg-gray-100 border-b border-gray-200 h-12'>
                    <td className='font-semibold pl-4'>Email: </td>
                    <td>jehan@123.com</td>
                </tr>
                <tr className='bg-gray-100 border-b border-gray-200 h-12'>
                    <td className='font-semibold pl-4'>Role: </td>
                    <td>Admin</td>
                </tr>
                <tr className='bg-gray-100 border-b border-gray-200 h-12'>
                    <td className='font-semibold pl-4'>Status: </td>
                    <td>
                        <span>Active</span>
                    </td>
                </tr>
            </table>

            <div className="ml-2 md:w-1/2 w-full md:mt-0 mt-4">
                <div className="md:flex">
                    <div className="md:mb-0 mb-4 w-full bg-[#FF5722] py-4 pl-4 flex justify-between rounded-md shadow-xl text-white">
                        <div className="">
                            <h1 className="">All Auctions</h1>
                            <p className="pt-2">500</p>
                        </div>
                        <div className="mr-4 mt-1">
                            <RiAuctionLine className='h-10 w-auto'/>
                        </div>
                    </div>
                    <div className="md:ml-2 w-full bg-[#FF5722] py-4 pl-4 flex justify-between rounded-md shadow-xl text-white">
                        <div className="">
                            <h1 className="">Win Auctions</h1>
                            <p className="pt-2">500</p>
                        </div>
                        <div className="mr-4 mt-1">
                            <RiAuctionFill className='h-10 w-auto'/>
                        </div>
                    </div>
                </div>               
            </div>
        </div>
        <div className="w-full mt-4">
            <table className='w-full'>
                <thead>
                    <tr className='h-12 text-center w-full bg-[#FF5722] text-white'>
                        <th>#</th>
                        <th>Name</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-center h-12 border-b border-gray-200'>
                        <td>1</td>
                        <td>jehan</td>
                        <td>20 FEB 2025</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ViewUser