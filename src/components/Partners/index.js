import React from "react"

// Styles
import "./Partners.scss"

// Assets
import partner1 from "../../images/parceiro-socopa.png"
import partner2 from "../../images/parceiro-bradesco.png"
import partner3 from "../../images/parceiro-quicksoft.png"
import partner4 from "../../images/parceiro-vadu.png"
import partner5 from "../../images/parceiro-nanodata.png"
import partner6 from "../../images/parceiro-austin.png"
import partner7 from "../../images/parceiro-serasa.png"
import partner8 from "../../images/parceiro-netfactor.png"
import partner9 from "../../images/parceiro-ouropreto.png"
import partner10 from "../../images/parceiro-uplexis.png"
import partner11 from "../../images/parceiro-bmp.png"
import partner12 from "../../images/parceiro-boavista.png"

const Partners = ({
  list = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
    partner8,
    partner9,
    partner10,
    partner11,
    partner12,
  ],
}) => {
  return (
    <section className="section partners-section">
      <div className="container">
        <h2 className="title" data-aos="fade-up" data-aos-delay={50}>Nossa estrutura</h2>
        <hr className="divider" />
        <ol className="partners-list">
          {list.map((item, index) => {
            return (
              <div className="item" key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                <img src={item} key={index} alt="" />
              </div>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default Partners
