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
                    <td>
                        <div className="flex items-center justify-center">
                            <div className="flex items-center space-x-2 bg-gray-100 p-4 rounded-lg">
                                <img src="https://avatars.githubusercontent.com/u/138636749?v=4" alt="" className="rounded-full h-8 w-auto"/>
                                <p className="font-semibold">Jehan</p>
                            </div>
                        </div>

                    </td>
                    <td>123</td>
                    <td>$500.00</td>
                    <td>
                        <div className="flex items-center justify-center">
                            <div className="flex items-center space-x-2 bg-gray-100 p-4 rounded-lg">
                                <img src="https://avatars.githubusercontent.com/u/138636749?v=4" alt="" className="rounded-full h-8 w-auto"/>
                                <p className="font-semibold">Jehan</p>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr className='h-12 text-center bg-gray-100 border-b border-gray-200'>
                    <td className='font-semibold'>1</td>
                    <td>
                        <div className="flex items-center justify-center">
                            <div className="flex items-center space-x-2 bg-gray-100 p-4 rounded-lg">
                                <img src="https://avatars.githubusercontent.com/u/138636749?v=4" alt="" className="rounded-full h-8 w-auto"/>
                                <p className="font-semibold">Jehan</p>
                            </div>
                        </div>

                    </td>
                    <td>123</td>
                    <td>$500.00</td>
                    <td>
                        <div className="flex items-center justify-center">
                            <div className="flex items-center space-x-2 bg-gray-100 p-4 rounded-lg">
                                <img src="https://avatars.githubusercontent.com/u/138636749?v=4" alt="" className="rounded-full h-8 w-auto"/>
                                <p className="font-semibold">Jehan</p>
                            </div>
                        </div>
                    </td>
                </tr>


            </tbody>
        </table>
    </div>
  )
}

export default AdminDashTable