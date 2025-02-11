import React from 'react'

const AdminDashTable = () => {
  return (
    <div>
        <table className='w-full bg-[#FF5722]'>
            <tr className='h-12 text-white'>
                <th>#</th>
                <th>Buyer Name</th>
                <th>Auction No</th>
                <th>Cost</th>
                <th>Saller</th>
                <th>Win Date</th>
            </tr>
        </table>
    </div>
  )
}

export default AdminDashTable