import React from 'react'

const Table = ({ currenciesData }) => {

  const length = currenciesData[0].map((item) => item.name)


  return (
    <div className="crypto-table">
      <div className="crypto-table__title">
        <h3>Cамые популярные крипто-фиатные курсы</h3>
      </div>

      <table className="table table-hover">
        <thead>
          <tr>
            {/* <th scope="col"></th> */}
            <th scope="col">Криптовалюты</th>
            <th scope="col">USD</th>
            <th scope="col">UAH</th>
            <th scope="col">RUB</th>
          </tr>
        </thead>
        <tbody>

          { length.map((item, index) => (
            <tr key={`${index}_${item}_tr`}>
              {/*TODO: Сделать звёздочку "Избранное" ЗP*/}
              {/* <th className="table__first-col" scope="row">
                <div className="table__first-col__star"></div>
              </th> */}
              <td className="table__second-col">
                <div className="table__second-col__container">
                  <div className="table__second-col__image">
                    <img className="non-draggable" src={currenciesData[0].find(element => element.name === item)?.image} width="32" height="32" alt={currenciesData[0].find(element => element.name === item)?.id} />
                  </div>
                  <div className="table__second-col__text">
                    <p className="table__second-col__text__title">{item}</p>
                    <p className="table__second-col__text__subtitle">{currenciesData[0].find(element => element.name === item)?.symbol.toUpperCase()}</p>
                  </div>
                </div>
              </td>
              <td className="table__third-col">
                <p className="table__crypto-text">{currenciesData[0].find(element => element.name === item)?.price || 'Fetching Data...'}</p>
              </td>
              <td className="table__fourth-col">
                <p className="table__crypto-text">{currenciesData[1].find(element => element.name === item)?.price || 'Fetching Data...'}</p>
              </td>
              <td className="table__fifth-col">
                <p className="table__crypto-text">{currenciesData[2].find(element => element.name === item)?.price || 'Fetching Data...'}</p>
              </td>
            </tr>
          )) }

        </tbody>
      </table>
    </div>
  )
}

export default Table
