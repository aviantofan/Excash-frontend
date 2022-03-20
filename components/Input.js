import React from 'react'

export const Input = ({ icon, className, ...rest }) => {
  return (
    <div className='position-relative'>
      <input className={` px-4 py-2 ${className}`} {...rest}></input>
      <p className='position-absolute top-50 start-0 translate-middle-y m-0' style={{ eight: '24px' }}>{icon}</p>
    </div>
  )
}

export default Input