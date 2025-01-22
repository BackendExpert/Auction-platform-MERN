import React from 'react'

const DashNav = () => {
  return (
    <div className='rounded bg-[#FF5722] text-white py-6 md:mr-4 mr-0 md:ml-0 ml-2 px-4'>
        <div className="flex justify-between">
            <div className="">
                <h1 className="font-semibold md:pl-2 pl-12 text-xl">E-Auction</h1>
            </div>
            <div className="">
                <button className='bg-white text-[#FF5722] py-1 px-4 rounded'>
                    Browes Auction
                </button>
            </div>
        </div>
    </div>
  )
}

export default DashNav