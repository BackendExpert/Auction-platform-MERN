import React from 'react'

const CustomBtn = ({
    btntype,
    btnvalue,
    bgColor,
    onClick
 }) => {
  return (
    <button
        type={btntype}
        onClick={onClick}
        className={
            `
                ${bgColor}
                duration-500 
                hover:bg-[#E64A19] 
                py-2 px-4 
                rounded 
                text-white
            `
        }
          
    >
        {btnvalue}
    </button>
  )
}

export default CustomBtn