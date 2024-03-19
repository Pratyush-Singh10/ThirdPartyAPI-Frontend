import React, { useState } from 'react'

const InputBox = ({id,type,placeHolder,value,onChnage,required,className,clearBtnReq,handleClearBtn,regEx,isSearchBar}) => {

  const[error, setError] = useState(false)


  const handleInput = (e) => {
    const inputVal = e.target.value



      onChnage(e);
  }

  return (
    <div className={isSearchBar ? 'inline-flex items-center border-2 rounded-3xl border-zinc-500' : ''}>
      <input 
          className={`${className} outline-none h-8 w-60 rounded placeholder:italic pl-2 ${className}`}
          type={type}
          placeholder={placeHolder}
          id={id}
          value={value}
          onChange={handleInput}
          required={required}
          autoComplete='off'
      />

      {clearBtnReq && (
        <span onClick={handleClearBtn} className='material-symbols-outlined text-white px-2  cursor-pointer'>
          X
        </span>
      )}
      
      {error && (
          <div className='error-message text-red-600'>{errorMessage}</div>
      )}
    </div>
  )
}

export default InputBox