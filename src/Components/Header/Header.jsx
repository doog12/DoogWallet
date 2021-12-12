import React, { Fragment } from 'react'
import Logo from './Logo'
import BurgerNav from './Nav/Burger/BurgerNav'
import BurgerMenu from './Nav/Burger/BurgerMenu'
import Nav from './Nav/Nav'

const Header = () => {
  return (
    <Fragment>
      <header>
        <div className="container">
          <div className="header__content">
            <Logo />

            <Nav />

            <BurgerMenu />
          </div>
        </div>
      </header>

      <BurgerNav />
    </Fragment>
  )
}

export default Header
