import React from 'react'

export const InputField = ({value = "", placeholder= "Please input here...", onChange}) => {
  return (
    <div>
        <input type="text" placeholder={placeholder} value={value} onChange={onChange} className="border-2 border-gray-300 p-2 rounded" />
    </div>
  )
}
