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
          <address className="menu-contact">
            <p className="address">
              Rua Jerônimo da Veiga, <br />
              164 Conj. 1B - 1º Andar <br />
              Jardim Europa, São Paulo <br />
              +55 (11) 3704-0030
            </p>
            <p className="copyright">
              © {new Date().getFullYear()} Fundo Raízes - Todos os direitos
              reservados
            </p>
          </address>
        </div>
      </div>
    </footer>
  )
}

export default Footer
