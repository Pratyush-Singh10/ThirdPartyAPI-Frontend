import React from 'react'

const Notify = ({text, color}) => {
  return (
    <div className={`absolute right-0 top-[60px] transform -translate-x-1  text-white px-5 py-3 rounded-md shadow-md z-50 opacity-90 transition-opacity duration-300 ${color}`}>
        <p>{text}</p>
    </div>
  )
}

export default Notify