import React from 'react'

const InputImage = ({ name, value, onChange, required }) => {
  return (
    <input 
        type="file" 
        name={name}
        value={value}
        onChange={onChange}
        required={!!required}
        className='
            h-12 
            bg-gray-200/50 
            w-full 
            border-b 
            border-gray-300 
            pl-2 
            duration-500 
            focus:outline-none 
            focus:border-[#FF5722]
            file:bg-[#FF5722] 
            file:border-none
            file:text-white
            file:h-full
            file:px-4 
            file:cursor-pointer           
        '
    />
  )
}

export default InputImage