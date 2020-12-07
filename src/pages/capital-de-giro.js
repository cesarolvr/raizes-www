import React from "react"

// Components
import Layout from "../components/Layout"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import SEO from "../components/Seo"
import StepsSection from "../components/StepsSection"
import Related from "../components/Related"
import Contact from "../components/Contact"

// Assets
import backgroundPath from "../images/hero-capital-de-giro.jpg"
import image1 from "../images/thumb-antecipacao-de-contratos.jpg"
import image2 from "../images/thumb-capital-de-giro.jpg"
import image3 from "../images/thumb-antecipacao-de-recebiveis.jpg"

export default () => {
  return (
    <Layout>
      <SEO title="Capital de Giro" />
      <Header />
      <Hero
        backgroundPath={backgroundPath}
        title="Capital de Giro"
        subtitle="Produtos"
        description="Modalidade de credito para incrementar  a disponibilidade  de caixa."
      />
      <article className="article">
        <div className="container">
          <p>
            Embora você não possa prever tudo sobre a administração de uma
            empresa, uma visão clara do capital de giro pode ajudar você a
            operar sem problemas hoje — e com estimativas realistas de longo
            prazo. Veja alguns pontos negativos de operar com baixo capital de
            giro logo abaixo.
            <br />
            <br />
            <strong>Dificuldade de atrair investidores</strong>
            <br />
            <br />
            A falta de capital de giro pode dificultar a captação de
            investimentos e financiamentos. Um saldo positivo demonstra que a
            companhia possui a capacidade de pagar o empréstimo e de gerar
            receita suficiente que permita um bom retorno aos investidores.
            Quanto menor o capital de giro, maior o risco da operação.
            <br />
            <br />
            <strong>Falhas nas operações do dia a dia</strong>
            <br />
            <br />
            O capital de giro também sinaliza a capacidade de uma organização de
            transformar ativos de curto prazo em dinheiro. A falta desse capital
            pode comprometer a capacidade de financiar as operações diárias,
            além de desproteger a companhia de emergências ou imprevistos.
            <br />
            <br />
            <strong>Crescimento limitado</strong>
            <br />
            <br />
            O capital de giro positivo permite que as organizações cresçam no
            futuro. Quando uma loja deseja crescer ou está tentando atender às
            demandas dos clientes, geralmente, compra ativos adicionais
            necessários para fabricar produtos ou oferecer serviços em um ritmo
            mais rápido e em maior escala.
            <br />
            A falta de capital impede uma marca de adquirir o que precisa para
            expandir. Se uma companhia continuar enfrentando problemas com o
            crescimento, poderá perder clientes para os concorrentes.
            <br />
            <br />
            <strong>Oportunidades desperdiçadas</strong>
            <br />
            <br />
            Quando uma empresa opera sem sobra de caixa, ela não pode explorar
            oportunidades repentinas. Um capital de giro negativo, além de não
            suportar a atual operação, elimina qualquer outro investimento em
            novos negócios, tecnologias, contratações etc.
            <br />
            <br />
            <strong>Como evitar a falta de capital de giro?</strong>
            <br />
            <br />
            A fórmula mais simples para melhorar o capital de giro é coletar os
            recebíveis antecipadamente e desacelerar os pagamentos — é claro que
            isso é mais fácil dizer do que fazer. Muitas empresas se perdem e
            ficam sem dinheiro, portanto, é necessário monitorar constantemente
            o fluxo de caixa. Veja algumas dicas.
            <br />
            <br />
            <strong>Incentivar recebíveis</strong>
            <br />
            <br />
            Incentive os clientes a pagarem à vista. Isso reduz a inadimplência
            e aumenta o poder de caixa da empresa. Não faça negócios com
            clientes com histórico de inadimplência.
            <br />
            <br />
            <strong>Cumprir as obrigações de pagamentos</strong>
            <br />
            <br />
            Garanta que todos os transações sejam cumpridas no prazo. Use
            sistemas de pagamento eletrônico para garantir operações pontuais e
            evitar situações que atrasam os pagamentos e geram multas.
            <br />
            <br />
            <strong>Analisar custos fixos e variáveis</strong>
            <br />
            <br />
            Determine se os custos fixos e variáveis podem ser reduzidos. Se
            você examinar cuidadosamente cada pequena despesa, será capaz de
            identificar as que são desnecessárias. Ao eliminar esses custos,
            você terá mais liquidez para o capital de giro.
            <br />
            <br />
            <strong>Gerenciar inventário</strong>
            <br />
            <br />
            Não exagere no estoque. Certifique-se de que os produtos acabados
            sejam vendidos o mais rápido possível e não estejam ociosos no
            armazém. Corte produtos e serviços que não estão funcionando.
            <br />
            <br />
            <strong>
              Identifique outras maneiras de melhorar o capital de giro
            </strong>
            <br />
            <br />
            O capital de giro sempre pode ser aprimorado: forçando lucros
            maiores, emitindo ações da companhia, assumindo mais dívidas e
            vendendo ativos. No entanto, essas estratégias devem ser
            consideradas apenas como último recurso.
            <br />
            <br />
            <strong>
              Veja 4 razões que podem exigir capital de giro adicional:
            </strong>
            <br />
            <br />
            as diferenças sazonais no fluxo de caixa são típicas de muitas
            empresas, que podem precisar de capital extra para se prepararem
            para uma estação movimentada ou para manter a operação funcionando
            quando houver menos dinheiro entrando;
            <br />
            quase todas as companhias terão momentos em que é necessário
            dinheiro adicional para financiar obrigações com fornecedores,
            funcionários e com o governo, enquanto aguarda os pagamentos dos
            clientes;
            <br />
            o dinheiro extra pode ajudar a melhorar os negócios de outras
            maneiras. Um exemplo é permitindo que você aproveite os descontos
            dos fornecedores comprando em grandes quantidades;
            <br />
            <br />O capital também pode ser usado para pagar funcionários
            temporários ou para cobrir outras despesas relacionadas ao projeto.
          </p>
        </div>
      </article>
      <StepsSection />
      <Related
        list={[
          {
            image: image1,
            title: "Antecipação de Contratos",
            description:
              "Antecipe contratos de suprimento ou prestação de serviços.",
            link: "/antecipacao-de-contratos/",
          },
          {
            image: image2,
            title: "Capital de Giro",
            description:
              "Modalidade para incrementar  a disponibilidade  de caixa.",
            link: "/capital-de-giro/",
          },
          {
            image: image3,
            title: "Antecipação de recebíveis",
            description: "Modalidade de credito para fluxo financeiro diário.",
            link: "/antecipacao-de-recebiveis/",
          },
        ]}
      />
      <Contact />
      <Footer />
    </Layout>
  )
}
