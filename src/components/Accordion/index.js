import React from "react"

// Styles
import "./Accordion.scss"

const Accordion = ({
  list = [
    {
      question: "O que é um FIDC?",
      answer:
        "FIDC - Fundo de Investimento em Direitos Creditórios -, são fundos de investimentos regulados e fiscalizados pela CVM que destinam seus recursos à aquisição de recebíveis oriundos da negociação entre cedente (quem cede o título ao fundo) e sacados (quem paga o título).",
    },
    {
      question: "Qual o perfil do cedente?",
      answer:
        "FIDC - Fundo de Investimento em Direitos Creditórios -, são fundos de investimentos regulados e fiscalizados pela CVM que destinam seus recursos à aquisição de recebíveis oriundos da negociação entre cedente (quem cede o título ao fundo) e sacados (quem paga o título).",
    },
    {
      question: "Qual a documentação necessária?",
      answer:
        "FIDC - Fundo de Investimento em Direitos Creditórios -, são fundos de investimentos regulados e fiscalizados pela CVM que destinam seus recursos à aquisição de recebíveis oriundos da negociação entre cedente (quem cede o título ao fundo) e sacados (quem paga o título).",
    },
    {
      question: "Como antecipar?",
      answer:
        "FIDC - Fundo de Investimento em Direitos Creditórios -, são fundos de investimentos regulados e fiscalizados pela CVM que destinam seus recursos à aquisição de recebíveis oriundos da negociação entre cedente (quem cede o título ao fundo) e sacados (quem paga o título).",
    },
    {
      question: "Quais papéis podem ser antecipados?",
      answer:
        "FIDC - Fundo de Investimento em Direitos Creditórios -, são fundos de investimentos regulados e fiscalizados pela CVM que destinam seus recursos à aquisição de recebíveis oriundos da negociação entre cedente (quem cede o título ao fundo) e sacados (quem paga o título).",
    },
    {
      question: "Quanto tempo leva a operação?",
      answer:
        "FIDC - Fundo de Investimento em Direitos Creditórios -, são fundos de investimentos regulados e fiscalizados pela CVM que destinam seus recursos à aquisição de recebíveis oriundos da negociação entre cedente (quem cede o título ao fundo) e sacados (quem paga o título).",
    },
  ],
}) => {
  return (
    <section className="accordion accordion-section">
      <div className="container">
        <div className="tabs">
          {list.map(({ question, answer }, index) => {
            return (
              <div className="tab" key={index}>
                <input type="checkbox" id={`chck${index + 1}`} />
                <label className="tab-label" htmlFor={`chck${index + 1}`}>
                  {question}
                </label>
                <div className="tab-content">{answer}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Accordion
