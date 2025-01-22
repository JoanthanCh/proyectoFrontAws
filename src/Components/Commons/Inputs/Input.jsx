import React from 'react'
import './Input.scss'

const Input = ({type, name, id, value, onChange, className}) => {
  return (
    <>
      <input 
      className={`input ${className}`} 
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      />
    </>
  )
}

export default Input