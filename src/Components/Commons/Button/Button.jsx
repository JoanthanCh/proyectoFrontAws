import React from 'react'
import './Button.scss'

const Btn = ({buttonDescription, onClick, type, className}) => {
  return (
    <>
      <button type={type} className={`btn ${className}`} onClick={onClick}>
        {buttonDescription}
      </button>
    </>
  )
}

export default Btn