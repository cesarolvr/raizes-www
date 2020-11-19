import React from "react"
import classnames from "classnames"

// Style
import "./Hamburguer.scss"

const Header = ({ isMenuOpened, setIsMenuOpened }) => (
  <div
    className={classnames("menu-button", {
      "-is-opened": isMenuOpened,
    })}
    onClick={() => setIsMenuOpened(!isMenuOpened)}
  >
    <span></span>
    <span></span>
    <span></span>
  </div>
)

export default Header
