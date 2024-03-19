import React from 'react'

function Label({lableName}) {
  return (
    <label className='mb-1.5 block text-xl text-white italic' htmlFor={lableName}>
        {lableName} : 
    </label>
  )
}

export default Label