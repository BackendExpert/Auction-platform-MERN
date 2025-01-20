import React from 'react'

const InputTextArea = ({
    name,
    value,
    onChange,
    placeholder,
    required
}) => {

  return (
    <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={!!required}
        className='
            h-24 
            bg-gray-200/50 
            w-full border-b 
            border-gray-300 
            p-2 
            duration-500 
            focus:outline-none 
            focus:border-[#FF5722]
        '
    >
    </textarea>
  )
}

export default InputTextArea