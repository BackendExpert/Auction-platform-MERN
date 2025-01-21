import React, { useEffect, useState } from 'react'
import secureLocalStorage from 'react-secure-storage'
import { BiSolidDashboard } from "react-icons/bi";
import { FaSearchDollar, FaHistory, FaChartLine } from "react-icons/fa";
import { FaMoneyBillTrendUp, FaUsers } from "react-icons/fa6";
import { IoMdTrophy } from "react-icons/io";
import { PiUserListBold } from "react-icons/pi";
import { RiAuctionFill } from "react-icons/ri";
import { MdOutlineRequestQuote, MdOutlineReport  } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { BsFillGearFill } from "react-icons/bs";
import { IoIosNotifications, IoIosHelpCircle  } from "react-icons/io";
import DashUser from '../../assets/DashUser.png';
import { Link } from 'react-router-dom';



const DashSide = () => {
    const EmailUser = secureLocalStorage.getItem('loginE')
    const UsernameUser = secureLocalStorage.getItem('loginU')
    const RoleUser = secureLocalStorage.getItem('loginR')

    const [activeId, setActiveId] = useState(() => {
        const savedId = localStorage.getItem("activeMenuId");
        return savedId ? parseInt(savedId, 10) : 1;
    });
    
    const handleMenuClick = (id) => {
        setActiveId(id);
        localStorage.setItem("activeMenuId", id); // Save the active ID to localStorage
    };

    const menu = [
        {
            id: 1,
            name: "Dashboard",
            link: '/Dashboard/Home',
            icon: <BiSolidDashboard className='h-8 w-auto'/>
        },
        {
            id: 2,
            name: "My Bids",
            link: '/Dashboard/MyBids',
            icon: <FaSearchDollar className='h-8 w-auto'/>
        },
        {
            id: 3,
            name: "Watchlist",
            link: '/Dashboard/Watchlist',
            icon: <FaMoneyBillTrendUp className='h-8 w-auto'/>
        },
        {
            id: 4,
            name: "Won Auctions",
            link: '/Dashboard/WonAuctions',
            icon: <IoMdTrophy className='h-8 w-auto'/>
        },
        {
            id: 5,
            name: "Payment History",
            link: '/Dashboard/PaymentHistory',
            icon: <FaHistory className='h-8 w-auto'/>
        },
        {
            id: 6,
            name: "My Listings",
            link: '/Dashboard/MyListings',
            icon: <PiUserListBold className='h-8 w-auto'/>
        },
        {
            id: 7,
            name: "Create Auction",
            link: '/Dashboard/CreateAuction',
            icon: <RiAuctionFill className='h-8 w-auto'/>
        },
        {
            id: 8,
            name: "Sales Analytics",
            link: '/Dashboard/SalesAnalytics',
            icon: <FaChartLine className='h-8 w-auto'/>
        },
        {
            id: 9,
            name: "Withdrawal Requests",
            link: '/Dashboard/WithdrawalRequests',
            icon: <MdOutlineRequestQuote className='h-8 w-auto'/>
        },
        {
            id: 10,
            name: "User Management",
            link: '/Dashboard/UserManagement',
            icon: <FaUsers className='h-8 w-auto'/>
        },
        {
            id: 11,
            name: "Auction Management",
            link: '/Dashboard/AuctionManagement',
            icon: <RiAuctionFill className='h-8 w-auto'/>
        },
        {
            id: 12,
            name: "Reported Items",
            link: '/Dashboard/ReportedItems',
            icon: <MdOutlineReport className='h-8 w-auto'/>
        },
        {
            id: 13,
            name: "Platform Analytics",
            link: '/Dashboard/PlatformAnalytics',
            icon: <TbBrandGoogleAnalytics className='h-8 w-auto'/>
        },
        {
            id: 14,
            name: "Settings",
            link: '/Dashboard/Settings ',
            icon: <BsFillGearFill className='h-8 w-auto'/>
        },
        {
            id: 15,
            name: "Notifications",
            link: '/Dashboard/Notifications',
            icon: <IoIosNotifications className='h-8 w-auto'/>
        },
        {
            id: 16,
            name: "Help Center",
            link: '/Dashboard/HelpCenter ',
            icon: <IoIosHelpCircle className='h-8 w-auto'/>
        },
    ]
  return (
    <div>
        <div className="text-center text-[#FF5722]">
            <h1 className="logo-title text-xl ">GoBidly</h1>
            <p className="">Auction Platform</p>

            <center><img src={DashUser} alt="" className='my-4'/></center>

            <h1 className="uppercase">{RoleUser}</h1>
        </div>

        <hr className="" />

        <div className="my-4">
            {
                menu.map((data, index) => {
                    return (
                        <Link to={data.link} key={data.id}>
                            <div
                                className={`w-full py-4 px-2 rounded-md my-2 cursor-pointer transition duration-300 ${
                                    activeId === data.id ? 'bg-[#FF5722] text-white' : 'bg-[#FF5722]/10 text-[#FF5722]'
                                }`}
                                onClick={() => handleMenuClick(data.id)} // Set active item
                            >
                                <div className="flex">
                                    <div className="">
                                        {data.icon}
                                    </div>
                                    <div className="mt-1 pl-2 font-semibold">
                                        {data.name}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default DashSide