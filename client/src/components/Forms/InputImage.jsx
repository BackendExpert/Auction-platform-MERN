import React from 'react'

const InputImage = ({ name, value, accept, required, onChange }) => {
  return (
    <input 
        type='file'
        name={name}
        value={value}
        required={!!required}
        onChange={onChange}
        accept={accept}
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
            file:bg-[#FF5722] file:border-none file:text-white file:py-2 file:rounded
        '
    />
  )
}

export default InputImage