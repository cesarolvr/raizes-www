import React from "react"

// Styles
import "./StepsSection.scss"

const StepsSection = ({
  title = "Como contratar",
  list = [
    {
      number: 1,
      title: "Cadastro",
      description:
        "Acesse nossa página de cadastro e preencha algumas informações básicas sobre sua empresa e qual produto você tem interesse.",
    },
    {
      number: 2,
      title: "Documentação",
      description:
        "Após a análise prévia, vamos precisar de alguns documentos para nosso comitê avaliador, onde vamos analisar a viabilidade do seu crédito.",
    },
    {
      number: 3,
      title: "Comitê avaliador",
      description:
        "Formamos um comitê que analisa a viabilidade da sua proposta, utilizamos uma sólida politica de crédito.",
    },
  ],
}) => {
  return (
    <section className="section steps-section">
      <div className="container">
        <h2 className="title">{title}</h2>

        <hr className="divider" />
        <ol className="steps-list">
          {list.map(({ number, title, description }, index) => {
            return (
              <li className="item" key={index}  data-aos="fade-up" data-aos-delay={index * 50}>
                <h5 className="item-number">{number}</h5>
                <p className="item-title">{title}</p>
                <p className="item-description">{description}</p>
              </li>
            )
          })}
        </ol>
        <button className="button" data-aos="fade-up" data-aos-delay={300}>
          <a href="/contratar/">Contratar</a>
        </button>
      </div>
    </section>
  )
}

export default StepsSection
