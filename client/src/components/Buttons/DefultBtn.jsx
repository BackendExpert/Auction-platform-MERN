import React from 'react'

const DefultBtn = ({ type, btnvalue, onClick }) => {
  return (
    <button
        type={type}
        onClick={onClick}
        className='
          bg-[#FF5722] 
          duration-500 
          hover:bg-[#E64A19] 
          py-2 px-4 
          rounded 
          text-white'
    >
        {btnvalue}
    </button>
  )
}

export default DefultBtn