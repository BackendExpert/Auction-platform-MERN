import React from 'react'
import { FaPeopleGroup } from "react-icons/fa6";
import { FaUserLock, FaUserTie, FaBuildingUser, FaUserFriends  } from "react-icons/fa";

const Data = () => {
    const userData = [
        {
            id: 1,
            name:'Total Users',
            value: 500,
            icon: FaPeopleGroup,
        },
        {
            id: 2,
            name:'Admin',
            value: 500,
            icon: FaUserLock,
        },
        {
            id: 3,
            name:'Moderators',
            value: 500,
            icon: FaUserTie,
        },
        {
            id: 4,
            name:'Sallers',
            value: 500,
            icon: FaBuildingUser,
        },
        {
            id: 5,
            name:'Buyers',
            value: 500,
            icon: FaUserFriends,
        }
    ]
  return (
    <div>Data</div>
  )
}

export default Data