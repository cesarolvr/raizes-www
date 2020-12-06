import React from "react"

// Styles
import "./OurProcesses.scss"

const OurProcesses = () => {
  return (
    <section className="section ourprocesses-section">
      <div className="container">
        <div className="holder">
          <div className="title" data-aos="fade-up" data-aos-delay={50}>Nosso processo</div>
          <hr className="divider" />
        </div>
        <div className="holder">
          <ul className="processes-list">
            <li className="item">
              <h3 className="item-title" data-aos="fade-up" data-aos-delay={150}>Avaliação de crédito</h3>
              <p className="subtitle" data-aos="fade-up" data-aos-delay={200}>
                As decisões de concessão de crédito são tomadas em comitê,
                baseadas em uma sólida política de crédito. Analisamos: ciclo
                operacional, financeiro e econômico, garantias, governança,
                estrutura de capital e societária.Empregamos as melhores
                ferramentas tecnológicas disponíveis, aliadas a experiência de
                uma equipe qualificada. Somente são aceitas operações
                transparentes e aderentes ao regulamento do fundo, independente
                da rentabilidade que possa oferecer.
              </p>
            </li>
            <li className="item">
              <h3 className="item-title" data-aos="fade-up" data-aos-delay={250}>Avaliação da operação de crédito</h3>
              <p className="subtitle" data-aos="fade-up" data-aos-delay={300}>
                As operações passam por uma minuciosa avaliação de risco
                operacional e de crédito. Temos como procedimento: confirmação
                de títulos, análise do sacado e contratos, concentração e prazo
                médio.
              </p>
            </li>
            <li className="item">
              <h3 className="item-title"  data-aos="fade-up" data-aos-delay={350}>Monitoramento e Cobrança</h3>
              <p className="subtitle" data-aos="fade-up" data-aos-delay={400}>
                Acompanhamento diário de nossos clientes, validação dos títulos,
                índice de liquidez e restritivos dos cedentes e
                sacados.Executamos os comitês revisionais e visitas constantes
                de nossos comerciais. Realizamos o stress test da carteira
                regularmente, utilizando a teoria de Monte Carlo. Diligentemente
                conduzimos a cobrança simples, extra-judicial e judicial.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default OurProcesses
