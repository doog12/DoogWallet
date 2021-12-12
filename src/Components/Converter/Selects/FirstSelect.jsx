import React from 'react'

const FirstSelect = ({ data }) => {
  return (
    <div className="__select" data-state="">
      <div className="__select__title" data-default={data.DEFAULT}>
        {data.DEFAULT}
      </div>
      <div className="__select__content">
        <input id="singleSelect0" className="__select__input" type="radio" name="singleSelect" />
        <label htmlFor="singleSelect0" className="__select__label">
          {data.DEFAULT}
        </label>

        {data.currencies.map((currency, index) => (
          <>
            <input
              id={`singleSelect${index + 1}`}
              className="__select__input"
              type="radio"
              name="singleSelect"
              key={`${currency}_${index + 1}`}
            />
            <label key={`${currency}_${index + 1}_label`} htmlFor={`singleSelect${index + 1}`} className="__select__label">
              {currency}
            </label>
          </>
        ))}

      </div>
    </div>
  )
}

export default FirstSelect
