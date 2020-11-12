import React from "react"

// Mock
import { links } from "../../mock"

// Components
import Logo from "../Logo"

// Styles
import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Logo />
        <hr className="divider" />
        <div className="holder">
          <ul className="menu-footer">
            {links.map(({ to, text }, index) => {
              return (
                <li key={index} className="item">
                  <a href={to}>{text}</a>
                </li>
              )
            })}
          </ul>
          <div className="menu-contact">
            <p className="address">
              Rua Jerônimo da Veiga, 164 Conj. 1B - 1º Andar Jardim Europa, São
              Paulo +55 (11) 3704-0030
            </p>
            <p className="copyright">
              © {new Date().getFullYear()} Fundo Raízes - Todos os direitos
              reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
