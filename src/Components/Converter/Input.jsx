import React from 'react'

const Input = ({ value, onChange,hendlerConvertFromChange, priceData, convert }) => {


  return (
    <>
      <input
        type="text"
        autoComplete='OFF'
        value={value}
        onChange={(ev) => onChange(ev.target.value)}
        className="currency__input"
        id="crypto__currency__input"
      />
    </>
  )
}

export default Input
