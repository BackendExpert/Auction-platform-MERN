import React from 'react'

const DashFooter = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div>
        <p className="text-gray-500"><span className='text-[#FF5722]'>&copy; Hellobidder - Online Auction Platform</span> | {currentYear} | Developed by <a href="" className="text-[#FF5722]">JehanKandy</a></p>
    </div>
  )
}

export default DashFooter