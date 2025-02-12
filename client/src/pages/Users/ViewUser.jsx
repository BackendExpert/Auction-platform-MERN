import React from 'react'
import { useParams } from 'react-router-dom'

const ViewUser = () => {
    const { id } = useParams()
  return (
    <div>
        <div className="flex">
            <table className='w-1/2 text-gray-500'>
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

            <div className="ml-2 w-1/2">
                <h1 className="">Win Auctions</h1>
                
            </div>
        </div>
    </div>
  )
}

export default ViewUser