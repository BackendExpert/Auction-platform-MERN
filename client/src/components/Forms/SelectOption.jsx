import React from 'react'

const SelectOption = ({ dataoption, name, onChange, required }) => {
  return (
    <select 
        name={name} 
        onChange={onChange}
        required={!!required}
        className='
            h-12 w-full
            bg-white
            pl-2
            border
            duration-500 
            focus:outline-none 
            focus:border-[#FF5722]
        '
    >
        <option value="">Select Option</option>
        {dataoption.map((data, index) => {
            return (
                <option value={data.value}>{data.name}</option>
            )
        })}
    </select>
  )
}

export default SelectOption