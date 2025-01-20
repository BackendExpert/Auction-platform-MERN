import React from 'react'

const InputDefult = ({
    type,
    name,
    value,
    onChange,
    placeholder,
    required
}) => {
    
  return (
    <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
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
        '
    />
  )
}

export default InputDefult