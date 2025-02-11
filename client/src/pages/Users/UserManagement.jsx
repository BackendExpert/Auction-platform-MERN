import React from 'react'
import UserData from './UserData'


const UserManagement = () => {
  return (
    <div>
        <div className="">
            <h1 className="text-xl font-semibold uppercase text-[#FF5722]">User Management</h1>
            <hr className='py-2'/>
            <UserData />
        </div>
    </div>
  )
}

export default UserManagement