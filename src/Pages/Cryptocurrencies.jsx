import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Cryptocurrencies = () => {

   //!================== HOOKS ==========================

   const [fetchUSDState, setFetchUSDState] = useState()
   const [fetchUAHState, setFetchUAHState] = useState()
   const [fetchRUBState, setFetchRUBState] = useState()

   //!===================================================

   //!================== FETCH API =====================

   useEffect(() => {
      axios
      .get(
         `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`,
      )
      .then((res) => {
         const data = res.data
         setFetchUSDState(data)
      })
   }, [])

   useEffect(() => {
      axios
      .get(
         `https://api.coingecko.com/api/v3/coins/markets?vs_currency=uah`,
      )
      .then((res) => {
         const data = res.data
         setFetchUAHState(data)
      })
   }, [])

   useEffect(() => {
      axios
      .get(
         `https://api.coingecko.com/api/v3/coins/markets?vs_currency=rub`,
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
      image: currency.image,
      // sparkline: currency.sparkline_in_7d.price
   }))
   }
   if (fetchUAHState) {
   UahData = fetchUAHState.map((currency) => ({
      name: currency.name,
      price: currency.current_price,
   }))
   }
   if (fetchRUBState) {
   RubData = fetchRUBState.map((currency) => ({
      name: currency.name,
      price: currency.current_price,
   }))
   }

   //* SORTED ARRAY WITH DATA
   let data = [[...UsdData], [...UahData], [...RubData]] //* [0] - USD, [1] - UAH, [2] - RUB

   //!======================================================================

   const length = data[0].map((item) => item.name)


  return (
    <main>
      <div className="container">
        <div className="cryptocurrencies">
          <div className="cryptocurrencies__content">
              {/* <div className="cryptocurrencies__table__title">
                <h3>Cамые популярные крипто-фиатные курсы</h3>
              </div> */}

              <table className="table table-hover">
                <thead>
                  <tr>
                    <th id='first-table-header' scope="col" style={{textAlign: 'center'}}>#</th>
                    <th scope="col">Криптовалюты</th>
                    <th scope="col">USD</th>
                    <th scope="col">UAH</th>
                    <th scope="col">RUB</th>
                  </tr>
                </thead>
                <tbody>

                  { length.map((item, index) => (
                     <tr key={`${index}_${item}_tr`}>
                        <th className="table__first-col" style={{width: 40, textAlign: 'center', fontSize: '1.3rem', fontWeight: 'normal'}} scope="row">
                           <div className="table__first-col__star">{index + 1}</div>
                        </th>
                        <td className="table__second-col">
                           <div className="table__second-col__container">
                              <div className="table__second-col__image">
                                 <img className="non-draggable" src={data[0].find(element => element.name === item)?.image} width="32" height="32" alt={data[0].find(element => element.name === item)?.id} />
                              </div>
                              <div className="table__second-col__text">
                                 <p className="table__second-col__text__title">{item}</p>
                                 <p className="table__second-col__text__subtitle">{data[0].find(element => element.name === item)?.symbol.toUpperCase()}</p>
                              </div>
                           </div>
                        </td>
                        <td className="table__third-col">
                           <p className="table__crypto-text">{data[0].find(element => element.name === item)?.price || 'Fetching Data...'}</p>
                        </td>
                        <td className="table__fourth-col">
                           <p className="table__crypto-text">{data[1].find(element => element.name === item)?.price || 'Fetching Data...'}</p>
                        </td>
                        <td className="table__fifth-col">
                           <p className="table__crypto-text">{data[2].find(element => element.name === item)?.price || 'Fetching Data...'}</p>
                        </td>
                     </tr>
                  )) }

                </tbody>
              </table>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Cryptocurrencies
