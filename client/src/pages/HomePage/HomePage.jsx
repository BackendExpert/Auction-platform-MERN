import React from 'react'

const HomePage = () => {
  return (
    <div className='my-24 md:px-32 px-8'>
      <h1 className="">HomePage</h1>

      <input type="text" name="" id="" className="h-12 bg-gray-200/50 w-full border-b border-gray-300 pl-2 duration-500 focus:outline-none focus:border-[#FF5722]" placeholder='Enter Test'/>
      <div className="my-4"></div>
      <textarea name="" id="" className='h-24 bg-gray-200/50 w-full border-b border-gray-300 p-2 duration-500 focus:outline-none focus:border-[#FF5722]' placeholder='Enter Text area'></textarea>
    
      <button className='bg-[#FF5722] duration-500 hover:bg-[#E64A19] py-2 px-4 rounded text-white'>Button</button>
    </div>
  )
}

export default HomePage