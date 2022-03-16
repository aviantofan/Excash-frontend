import React from 'react'

export const Button = ({ className, ...rest }) => {
  return (
    <button className={`btn-${className}`} {...rest}></button>
  )
}

export default Butt