import React, { useState } from "react"
import classnames from "classnames"

// Mock
import { links } from "./mock"

// Components
import Logo from "../Logo/index"
import Hamburguer from "../Hamburguer"

// Style
import "./Header.scss"

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  return (
    <header className="header">
      <div className="holder">
        <Logo />
      </div>
      <div className="holder">
        <ul
          className={classnames("menu-list", {
            "-is-opened": isMenuOpened,
          })}
        >
          {links.map(({ to, text }, index) => {
            return (
              <li key={index} className="item">
                <a href={to}>{text}</a>
              </li>
            )
          })}
        </ul>
        <Hamburguer
          isMenuOpened={isMenuOpened}
          setIsMenuOpened={setIsMenuOpened}
        />
      </div>
    </header>
  )
}

export default Header
