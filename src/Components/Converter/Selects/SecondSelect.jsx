import React from 'react'

const SecondSelect = ({ data }) => {
  return (
    <div className="second__select" data-state="">
      <div className="second__select__title" data-default={data.DEFAULT}>
        {data.DEFAULT}
      </div>
      <div className="second__select__content">
        <input
          id="singleSelect0"
          className="second__select__input"
          type="radio"
          name="singleSelect"
        />
        <label htmlFor="singleSelect0" className="second__select__label">
          {data.DEFAULT}
        </label>

        {data.currencies.map((currency, index) => (
          <>
            <input
              id={`singleSelect${index + 1}`}
              className="second__select__input"
              type="radio"
              name="singleSelect"
              key={`${currency}_${index + 1}`}
            />
            <label key={`${currency}_${index + 1}_label`} htmlFor={`singleSelect${index + 1}`} className="second__select__label">
              {currency}
            </label>
          </>
        ))}
      </div>
    </div>
  )
}

export default SecondSelect
