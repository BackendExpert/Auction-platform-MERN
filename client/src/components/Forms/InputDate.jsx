import React from 'react'

const InputDate = ({ name, value, required, onChange }) => {
  return (
    <input 
        type='date'
        value={value}
        name={name}
        required={!!required}
        onChange={onChange}
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
        '
    />
  )
}

export default InputDate