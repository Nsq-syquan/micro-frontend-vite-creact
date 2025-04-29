import React from 'react'

const AButton = ({ title = "A Button Host", onClick }) => {
  return (
    <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {title}
    </button>
  )
}

export default AButton
