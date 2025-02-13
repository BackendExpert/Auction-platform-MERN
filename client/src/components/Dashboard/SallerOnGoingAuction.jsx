import React from 'react'

const SallerOnGoingAuction = () => {
  return (
    <div>
        <table className='w-full'>
            <thead>
                <tr className='w-full bg-[#FF5722] h-12 text-white'>
                    <th>#</th>
                    <th>Auction</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Current Bidders</th>
                </tr>
            </thead>
            <tbody>
                <tr className='text-center border-b border-gray-200 h-12'>
                    <td>1</td>
                    <td>Car</td>
                    <td>2 FEB 2025</td>
                    <td>18 FEB 2025</td>
                    <td>25</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default SallerOnGoingAuction