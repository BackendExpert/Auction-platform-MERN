import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage'
import DashNav from './DashNav';
import DashSide from './DashSide';
import DashFooter from './DashFooter';
import { FaArrowCircleRight, FaChevronCircleLeft  } from "react-icons/fa";


const Dashboard = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("loginE");
    const RoleUser = secureLocalStorage.getItem("loginR");
    const [openside, setopenside] = useState(false);

    const headlemenuopen = () => {
        setopenside(!openside)
    }



    if (EmailUser !== null || RoleUser !== null) {
        return (
            <div className="w-full min-h-screen dash-bg">
              <div className="xl:flex">
                {/* <div className={` xl:block shadow-custom xl:w-[19%] w-[75%] fixed overflow-y-auto bottom-4 max-h-[96%] mt-4 ml-4 rounded-lg duration-500 overflow-hidden ${openside ? "w-[75%] xl:w-[19%]" : "w-0 xl:w-[19%]"} `}>
                    <button className="xl:hidden fixed top-2 left-2 z-50 bg-blue-600 p-2 rounded font-semibold" onClick={headlemenuopen}>
                        { openside ? <FaArrowCircleRight /> : <FaChevronCircleLeft />}
                    </button>
                    <div className={` xl:block ${ openside ? '': 'hidden'}`}>
                        <DashSide />
                    </div>
                </div> */}
                <div
                    className={`p-4 xl:block fixed top-0 left-0 h-full bg-white shadow-custom z-50 xl:w-[19%] w-[75%] overflow-y-auto rounded-lg transform duration-500 ${
                        openside ? " translate-x-0" : "-translate-x-full xl:translate-x-0"
                    }`}
                    >
                    <DashSide />
                </div>

                    {/* Toggle Button */}
                <button
                    className="xl:hidden fixed top-8 left-4 z-50 bg-white p-3 rounded font-semibold"
                    onClick={headlemenuopen}
                    >
                    {openside ? (
                        <FaChevronCircleLeft className="fill-[#FF5722]" />
                    ) : (
                        <FaArrowCircleRight className="fill-[#FF5722]" />
                    )}
                </button>
                
                <div className="xl:w-full xl:ml-[19%] pt-4">
                  <DashNav />
                  <div className="px-2 xl:mr-4   xl:mx-0 ml-4 mr-4 py-8">
                    <Outlet />
                  </div>
                  <DashFooter />
                </div>
              </div>
            </div>
          );
      } else {
        useEffect(() => {
          localStorage.clear();
          navigate('/signin');
        }, []);
      }
}

export default Dashboard;