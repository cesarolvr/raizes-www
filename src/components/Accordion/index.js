import React from "react"

// Styles
import "./Accordion.scss"

const Accordion = ({
  list = [
    {
      question: "O que é um FIDC?",
      answer:
        "FIDC ou Fundo de Investimento em Direitos Creditórios, são fundos de investimentos regulados e fiscalizados pela CVM que destinam seus recursos à aquisição de recebíveis oriundos da negociação entre cedente (quem cede o título ao fundo) e sacados (quem paga o título).",
    },
    {
      question: "Qual o perfil do cedente (cliente)?",
      answer:
        "Pequenas e médias empresas com atividade industrial de bens e servicos situadas no estado de São Paulo, com faturamento anual a partir de 10MM (dez milhões) com mais de 3 anos de fundação.",
    },
    {
      question: "Qual a documentação necessária?",
      answer:
        "Documentos cadastrais dos sócios e avalistas da operação (RG/CNH, CPF, Comprovante de Endereço, Declaração de IR e Certidão de Casamento); consolidação do contrato social, faturamento dos últimos 36 meses, relação de endividamento com instituições financeiras e DRE completo do último exercício assinado pelo contador.",
    },
    {
      question: "Como antecipar?",
      answer:
        "Uma vez aprovado cadastro em ate 3 dias úteis, recepcionamos as NFs atraves do nosso sistema,  sera  analisada a operacao de credito com as devidas confirmacoes  (validacao e entrega da mercadoria), o tempo estimado deste processo é de aproximadamente ate duas horas para o cliente (cedente) receber os recursos.",
    },
    {
      question: "Quais papéis podem ser antecipados?",
      answer:
        "Qualquer recebível futuro, com prazo mínimo de 7 (sete) dias pode ser antecipado, sejam eles duplicatas, cheques, contrato de prestação de serviços ou fornecimento, CCB, CPR, cartão de crédito, dentre outros a analisar.",
    },
    {
      question: "Quanto tempo leva a operação?",
      answer:
        "Uma vez aprovado e o contrato homologado, você terá acesso ao sistema operacional, onde deverá ser enviados os recebíveis para análise da operação. O tempo entre o envio do borderô no sistema, análise da operação e formalização da operação pode variar entre 45 minutos e até 2 horas, dependendo do volume de documentos a serem analisados. Após a operação formalizada segue a liberação do crédito pelo banco.",
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
