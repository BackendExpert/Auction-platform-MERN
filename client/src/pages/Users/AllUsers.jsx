import React from 'react'

const AllUsers = () => {
  return (
    <div>
        <table className='w-full'>
            <thead className='bg-[#FF5722] text-white h-12'>
                <th>#</th>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th></th>
            </thead>
            <tbody>
                <tr className='h-12 bg-gray-100 border-b border-gray-200 text-center'>
                    <td className='font-semibold'>1</td>
                    <td>Jehan</td>
                    <td>jehan@123.com</td>
                    <td>Admin</td>
                    <td>
                        <span className="border-2 rounded-md text-green-600 font-semibold border-green-600 px-4 py-1">Active</span>
                        <span className="border-2 rounded-md text-red-600 font-semibold border-red-600 px-4 py-1">Active</span>
                    </td>
                    <td>
                        VIew
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default AllUsers