import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import React, { useState } from 'react';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuClick = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div className='py-4 md:px-32 px-8 w-full bg-[#FF5722]'>
        <div className="flex justify-between">
            <div className="flex ">
                <h1 className="logo-title text-white text-3xl">GoBidly</h1>
                <div className="pl-4 text-white">
                    <h1 className="font-semibold">Auction</h1>
                    <p className="">Platform</p>
                </div>
            </div>
            <div className="">
                <div className="flex items-center mt-3">
                    {isMenuOpen ? (
                        <IoClose onClick={handleMenuClick} className='cursor-pointer h-6 w-auto fill-white' />
                    ) : (
                        <TiThMenu onClick={handleMenuClick} className='cursor-pointer h-6 w-auto fill-white' />
                    )}
                </div>
            </div>
        </div>

        <div
          className={`text-white mt-8 absolute top-20 right-0 w-64 bg-[#FF5722] shadow-lg rounded-lg p-4 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col">
            <h1 className="mx-4 my-2 cursor-pointer"><a href="/">Home</a></h1>
            <h1 className="mx-4 my-2 cursor-pointer">How Works</h1>
            <h1 className="mx-4 my-2 cursor-pointer">About Us</h1>
            <h1 className="mx-4 my-2 cursor-pointer"><a href="signin">Login</a></h1>
          </div>
        </div>
    </div>
  )
}

export default Nav