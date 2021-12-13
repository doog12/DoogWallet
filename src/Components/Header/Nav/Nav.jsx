import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <div className="navbar__links">
        <NavLink className="navbar__links__converter" to="/">
          Конвертер
        </NavLink>
        <NavLink className="navbar__links__crypto" to="/cryptocurrencies">
          Криптовалюты
        </NavLink>
      </div>

      <div className="navbar__personal-area">
        <button className="navbar__personal-area__login">Вход</button>
        <button className="navbar__personal-area__register">Зарегистрироваться</button>
      </div>
    </nav>
  )
}

export default Nav
