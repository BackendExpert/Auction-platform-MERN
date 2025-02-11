import React from 'react'
import { FaPeopleGroup, FaBuildingUser } from "react-icons/fa6";
import { FaUserLock, FaUserTie, FaUserFriends  } from "react-icons/fa";
import CountUp from 'react-countup';

const UserData = () => {
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
    <div className='grid xl:grid-cols-5 md:grid-cols-3 gap-4'>
        {
            userData.map((data, index) => {
                return (
                    <div className="bg-[#FF5722] py-4 text-white rounded-md shadow-xl px-4" key={index}>
                        <div className="flex justify-between">
                            <div className="">
                                <h1 className="text-xl font-semibold mb-4">{data.name}</h1>
                                <p className="flex">
                                    <CountUp end={data.value} duration={5}/>
                                    <p className="pl-1">{ data.name === "Total Users" ? <span> + </span> : <span></span>}</p>
                                </p>
                            </div>
                            <div className="">
                                <data.icon className='h-8 w-auto'/>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default UserData