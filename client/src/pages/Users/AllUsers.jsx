import React, { useState } from 'react'
import InputDefult from '../../components/Forms/InputDefult';


const AllUsers = () => {

    const testData = [
        {
            id: 1,
            username: 'Jehan',
            email: 'jehan@123.com',
            role: 'amdin',
            status: 'Active'
        },
        {
            id: 2,
            username: 'Perera',
            email: 'jehan@123.com',
            role: 'amdin',
            status: 'Active'
        },
        {
            id: 3,
            username: 'Amara',
            email: 'jehan@123.com',
            role: 'amdin',
            status: 'Active'
        },
        {
            id: 4,
            username: 'Kamal',
            email: 'jehan@123.com',
            role: 'amdin',
            status: 'Active'
        },
    ]

    const [searchQuery, setSearchQuery] = useState('');
    
    const filteredData = testData.filter(
        (testData) =>
            testData.username.toLowerCase().startsWith(searchQuery.toLowerCase())
      
    );


  return (
    <div>
        <div className="mb-4">
            <InputDefult 
                type={'text'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={'Search By Username'}
            />
        </div>
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

                {
                    filteredData.map((user, index) => {
                        return (
                            <tr className='h-12 bg-gray-100 border-b border-gray-200 text-center' key={index}>
                                <td className='font-semibold'>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <span className="border-2 rounded-md text-green-600 font-semibold border-green-600 px-4 py-1">Active</span>
                                    <span className="border-2 rounded-md text-red-600 font-semibold border-red-600 px-4 py-1">Active</span>
                                </td>
                                <td>
                                    VIew
                                </td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
    </div>
  )
}

export default AllUsers