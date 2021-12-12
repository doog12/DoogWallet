import React from 'react'
import { NavLink } from 'react-router-dom'

const BurgerNav = () => {
  return (
    <div className="burger-nav">
      <ul>
        <li>
          <NavLink className="burger-nav__link" to="/">Конвертер</NavLink>
        </li>
        <li>
          <NavLink className="burger-nav__link" to="/cryptocurrencies">Криптовалюты</NavLink>
        </li>
        <li>
          <NavLink className="burger-nav__link" to="/login">Вход</NavLink>
        </li>
        <li>
          <NavLink className="burger-nav__link" to="/register">Зарегистрироваться</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default BurgerNav
