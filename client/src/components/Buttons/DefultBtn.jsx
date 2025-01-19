import React from 'react'

const DefultBtn = ({ type, btnvalue, onClick }) => {
  return (
    <button
        type={type}
        onClick={onClick}
        className='bg-[#FF5722] py-2 px-4 text-white rounded'
    >
        {btnvalue}
    </button>
  )
}

export default DefultBtn