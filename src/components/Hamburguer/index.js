import React from "react"
import classnames from 'classnames'

// Style
import "./Hamburguer.scss"

const Header = ({ isMenuOpened, setIsMenuOpened }) => (
  <button
    className={classnames("menu-button", {
      "-is-opened": isMenuOpened,
    })}
    onClick={() => setIsMenuOpened(!isMenuOpened)}
  ></button>
)

export default Header
