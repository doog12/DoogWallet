import React, { useState, useEffect, Fragment } from 'react'
import Arrow from '../Components/Converter/Arrow'
import Input from '../Components/Converter/Input'
import axios from 'axios'
import Table from '../Components/Converter/Table/Table'
// require('../js/selectScript')

const Converter = () => {
  //!============== CURRENCIES =========================
  const cryptoСurrencies = {
    DEFAULT: 'BTC',
    currencies: ['BTC', 'ETH', 'XMR', 'XRP', 'DOGE'],
  }
  const fiatСurrencies = {
    DEFAULT: 'USD',
    currencies: ['USD', 'RUB', 'UAH'],
  }
  //!===================================================

  //!================== HOOKS ==========================

  const [convertFrom, setConvertFrom] = useState()
  const [firstSelect, setFirstSelect] = useState('BTC')

  const [convertTo, setConvertTo] = useState()
  const [secondSelect, setSecondSelect] = useState('USD')

  const [fetchUSDState, setFetchUSDState] = useState()
  const [fetchUAHState, setFetchUAHState] = useState()
  const [fetchRUBState, setFetchRUBState] = useState()

  //!===================================================

  //!================== FETCH API =====================

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20monero%2C%20ripple%2C%20dogecoin&per_page=100&page=1&sparkline=false`,
      )
      .then((res) => {
        const data = res.data
        setFetchUSDState(data)
      })
  }, [])

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=uah&ids=bitcoin%2C%20ethereum%2C%20monero%2C%20ripple%2C%20dogecoin&per_page=100&page=1&sparkline=false`,
      )
      .then((res) => {
        const data = res.data
        setFetchUAHState(data)
      })
  }, [])

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=rub&ids=bitcoin%2C%20ethereum%2C%20monero%2C%20ripple%2C%20dogecoin&per_page=100&page=1&sparkline=false`,
      )
      .then((res) => {
        const data = res.data
        setFetchRUBState(data)
      })
  }, [])

  //!=======================================================

  //!================== SORTING DATA FROM API ==========================

  let UsdData = ''
  let UahData = ''
  let RubData = ''

  if (fetchUSDState) {
    UsdData = fetchUSDState.map((currency) => ({
      id: currency.id,
      symbol: currency.symbol,
      name: currency.name,
      price: currency.current_price,
      image: currency.image
    }))
  }
  if (fetchUAHState) {
    UahData = fetchUAHState.map((currency) => ({
      id: currency.id,
      symbol: currency.symbol,
      name: currency.name,
      price: currency.current_price,
    }))
  }
  if (fetchRUBState) {
    RubData = fetchRUBState.map((currency) => ({
      id: currency.id,
      symbol: currency.symbol,
      name: currency.name,
      price: currency.current_price,
    }))
  }

  //* SORTED ARRAY WITH DATA
  let data = [[...UsdData], [...UahData], [...RubData]] //* [0] - USD, [1] - UAH, [2] - RUB

  //!======================================================================


  //!======================== HENDLERS ===============================

  function hendlerConvertFromChange(convertFrom) {
    setConvertTo(
      convertFrom *
        data[
          secondSelect === 'USD'
            ? 0
            : secondSelect === 'UAH'
            ? 1
            : secondSelect === 'RUB'
            ? 2
            : null
        ].find((item) => item.symbol === firstSelect.toLowerCase()).price,
    )
    setConvertFrom(convertFrom)
  }

  function hendlerConvertToChange(convertTo) {
    setConvertFrom(
      convertTo /
        data[
          secondSelect === 'USD'
            ? 0
            : secondSelect === 'UAH'
            ? 1
            : secondSelect === 'RUB'
            ? 2
            : null
        ].find((item) => item.symbol === firstSelect.toLowerCase()).price,
    )
    setConvertTo(convertTo)
  }

  //!==================================================================

  return (
    <main>
      <div className="container">
        <div className="converter">
          <div className="converter__content">
            <div className="first-currency">
              <div className="currency__title">
                {/* First Select */}
                <div className="__select" data-state="">
                  <div
                    className="__select__title unselectable"
                    data-default={cryptoСurrencies.DEFAULT}>
                    {firstSelect}
                  </div>
                  <div className="__select__content">
                    <input
                      id="singleSelect0"
                      className="__select__input"
                      type="radio"
                      name="singleSelect"
                    />
                    <label htmlFor="singleSelect0" className="__select__label">
                      {cryptoСurrencies.DEFAULT}
                    </label>

                    {cryptoСurrencies.currencies.map((currency, index) => (
                      <Fragment key={`${currency}_${index + 1}_fragment`}>
                        <input
                          id={`singleSelect${index + 1}`}
                          className="__select__input"
                          type="radio"
                          name="singleSelect"
                          key={`${currency}_${index + 1}`}
                        />
                        <label
                          key={`${currency}_${index + 1}_label`}
                          htmlFor={`singleSelect${index + 1}`}
                          className="__select__label"
                          onClick={() => {
                            setFirstSelect(currency)
                          }}>
                          {currency}
                        </label>
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
              <Input value={convertFrom} onChange={hendlerConvertFromChange} />
            </div>

            <Arrow />

            <div className="second-currency">
              <div className="currency__title">
                {/* Second Select */}
                <div className="second__select" data-state="">
                  <div
                    className="second__select__title unselectable"
                    data-default={fiatСurrencies.DEFAULT}>
                    {secondSelect}
                  </div>
                  <div className="second__select__content">
                    <input
                      id="singleSelect0"
                      className="second__select__input"
                      type="radio"
                      name="singleSelect"
                    />
                    <label htmlFor="singleSelect0" className="second__select__label">
                      {fiatСurrencies.DEFAULT}
                    </label>

                    {fiatСurrencies.currencies.map((currency, index) => (
                      <Fragment key={`${currency}_${index + 1}_fragment`}>
                        <input
                          id={`singleSelect${index + 1}`}
                          className="second__select__input"
                          type="radio"
                          name="singleSelect"
                          key={`${currency}_${index + 1}`}
                        />
                        <label
                          key={`${currency}_${index + 1}_label`}
                          htmlFor={`singleSelect${index + 1}`}
                          className="second__select__label"
                          onClick={() => setSecondSelect(currency)}>
                          {currency}
                        </label>
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>

              <Input
                value={convertTo}
                onChange={hendlerConvertToChange}
                firstSelect={firstSelect}
                secondSelect={secondSelect}
              />
            </div>
          </div>
        </div>

        <Table currenciesData={data} />
      </div>
    </main>
  )
}

export default Converter
