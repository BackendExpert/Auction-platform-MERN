import React from 'react'

const AdminDashTable = () => {
  return (
    <div>
        <table className='w-full bg-[#FF5722]'>
            <thead>
                <tr className='h-12 text-white'>
                    <th>#</th>
                    <th>Buyer Name</th>
                    <th>Auction No</th>
                    <th>Cost</th>
                    <th>Saller</th>
                </tr>
            </thead>
            <tbody>
                <tr className='h-12 text-center bg-gray-100 border-b border-gray-200'>
                    <td className='font-semibold'>1</td>
                    <td>Jhean</td>
                    <td>123</td>
                    <td>$500.00</td>
                    <td>Kamal</td>
                </tr>
                <tr className='h-12 text-center bg-gray-100 border-b border-gray-200'>
                    <td className='font-semibold'>2</td>
                    <td>Jhean</td>
                    <td>123</td>
                    <td>$500.00</td>
                    <td>Kamal</td>
                </tr>
                <tr className='h-12 text-center bg-gray-100 border-b border-gray-200'>
                    <td className='font-semibold'>3</td>
                    <td>Jhean</td>
                    <td>123</td>
                    <td>$500.00</td>
                    <td>Kamal</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default AdminDashTable