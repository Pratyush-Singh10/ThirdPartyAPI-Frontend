import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HomePath } from '../../constants'
import Buttons from '../Atoms/Button/Buttons'

function PageNotFound() {
   
  const navigate = useNavigate()

  return (
    <div className='relative flex flex-row bg-cover bg-center justify-center items-center bg-no-repeat overflow-hidden h-screen bg-black'>
        <h1 className='text-white'>404</h1>
        <h3 text-white>PAGE NOT FOUND</h3>
        <p text-white>Page does not exisit.</p>
        <Buttons name="Go to HomePage" onClick={navigate(HomePath)} />
    </div>
  )
}

export default PageNotFound