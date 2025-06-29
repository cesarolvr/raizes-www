import React, { useState } from "react"
import classnames from "classnames"

// Mock
import { links } from "../../mock"

// Components
import Logo from "../Logo/index"
import Hamburguer from "../Hamburguer"

// Style
import "./Header.scss"

const Header = ({ className }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  return (
    <header className={`header ${className}`}>
      <div className="holder">
        <Logo />
      </div>
      <div className="holder">
        <ul
          className={classnames("menu-list", {
            "-is-opened": isMenuOpened,
          })}
        >
          {links.map(({ to, text, target }, index) => {
            return (
              <li key={index} className="item">
                <a href={to} target={target}>
                  {text}
                </a>
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
