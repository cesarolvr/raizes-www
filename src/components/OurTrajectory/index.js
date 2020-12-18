import React from "react"

// Styles
import "./OurTrajectory.scss"

const OurTrajectory = ({
  timeline = [
    {
      year: "2014",
      money: "Aqui começa a nossa história!",
      description:
        "Com o objetivo de levar segurança, retorno eficiente e qualidade no atendimento aos investidores, clientes, colaboradores e fornecedores, o Fundo Raízes foi constituído junto aos órgãos reguladores.",
    },
    {
      year: "2015",
      money: "30.000.000",
      complement: "Em créditos concedidos",
      description:
        "Iniciamos nossas operações e fechamos o ano com a marca de 30 milhões de crédito concedido em uma carteira de 30 cedentes ativos.",
    },
    {
      year: "2016",
      money: "50.000.000",
      complement: "Em créditos concedidos",
      description:
        "Este foi um ano de investimento em tecnologia. Estruturamos nossa área de Gestão de Risco com profissionais qualificados e sistemas de análise e operação.",
    },
    {
      year: "2017",
      money: "107.000.000",
      complement: "Em créditos concedidos",
      description:
        "Como parte complementar da nossa estrutura digital, desenvolvemos o Banco Digital Raízes. Permitindo mais agilidade e eficiência na concessão do crédito.",
    },
    {
      year: "2018",
      money: "150.000.000",
      complement: "Em créditos concedidos",
      description:
        "Após a estruturação de toda a gestão de risco, passamos a investir na implementação de novas políticas de governança para o mercado institucional e investidores. Como resultado do Banco Digital Raízes, foram abertas 60 contas digitais e a carteira de cedentes ativos atingiu a marca de 130 empresas.",
    },
    {
      year: "2019",
      money: "215.000.000",
      complement: "Em créditos concedidos",
      description:
        "O Banco Digital Raízes passa a ter maior expressão, permitindo que nossos clientes operem com conta digital e forneçam aos seus colaboradores nossa linha de crédito consignado. Nossa estrutura agora conta com 20 colaboradores e 7 sistemas integrados para a gestão de risco, crédito, cobrança e operação.",
    },
    {
      year: "2020",
      money: "190.000.000",
      complement: "Em créditos concedidos",
      description:
        "Com o mercado Agro em alta, implementamos a nossa Plataforma Agrícola, exclusiva para concessão de crédito rural através de CPR-F e Boi Gordo. Aumentamos nossa área de atuação e chegamos ao Centro Oeste do País.",
    },
  ],
}) => {
  return (
    <section className="section our-trajectory-section">
      <div className="container">
        <div className="holder">
          <div className="title">Nossa trajetória</div>
          <hr className="divider" />
          <div className="timeline-list">
            {timeline.map(({ year, money, description, complement }, index) => {
              return (
                <div
                  className="item"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="content">
                    <h4 className="year">{year}</h4>
                    <h5 className="money">{money}</h5>
                    <h6 className="complement">{complement}</h6>
                    <p className="description">{description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTrajectory
