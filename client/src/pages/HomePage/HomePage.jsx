import React from 'react'
import HomePageData from '../../components/Data/HomePageData'


const HomePage = () => {
  return (
    <div className='my-24 md:px-32 px-8'>
      <h1 className="my-4 font-semibold text-gray-500 text-xl">On Going Items</h1>
      <HomePageData />

    </div>
  )
}

export default HomePage