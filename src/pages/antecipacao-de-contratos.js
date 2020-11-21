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
import backgroundPath from "../images/hero-antecipacao-de-contratos.jpg"
import image1 from "../images/thumb-cedula-de-produtor-rural.jpg"
import image2 from "../images/thumb-capital-de-giro.jpg"
import image3 from "../images/thumb-antecipacao-de-contratos.jpg"

export default () => {
  return (
    <Layout>
      <SEO title="Antecipação de Contratos" />
      <Header />
      <Hero
        backgroundPath={backgroundPath}
        title="Antecipação de Contratos"
        subtitle="Produtos"
        description="Modalidade de crédito perfeita para produtores rurais"
      />
      <article className="article">
        <div className="container">
          <p>
            O contrato de fornecimento de bens e serviços é uma modalidade
            consensual, pois para o aperfeiçoamento do contrato não é necessário
            que o objeto do contrato seja entregue. O acordo de vontades faz com
            que nasça a obrigação de entregar a coisa. Bilateral, porque uma das
            partes tem como obrigação a entrega contínua ou periódica dos
            produtos, enquanto que a outra se obriga ao pagamento do produto e,
            eventual, serviço a mais. Ou seja, a partir do acordo de vontades
            nasce a obrigação para o fornecedor entregar o objeto do contrato,
            além de eventuais serviços a mais, e obrigação para o fornecido de
            pagar o preço. Oneroso, porque ambas as partes auferem vantagens no
            contrato, em outras palavras, há proveito para ambas as partes.
            Comutativo, porque o fornecido e fornecedor sabem de plano as
            prestações que cada um se obrigou. Atípico, pois não há nenhuma
            regra jurídica ou tratamento sobre esse tipo de contrato na
            legislação legal. De duração ou trato sucessivo, pois a obrigação de
            fornecer estende-se no tempo. Não solene, o contrato de fornecimento
            não tem uma forma específica em lei para que seja válido. Dessa
            forma, para o contrato ser válido as partes podem convencionar que
            seja verbal ou escrito.
          </p>
          <h4 className="color-blue">Obrigações das partes</h4>
          <p>
            O fornecedor, nessa modalidade de contrato, tem as obrigações de
            entregar a coisa a que se obrigou, no prazo e nos períodos
            prometidos. Caso, as partes não tenham escrito no contrato nada a
            respeito do prazo e do preço, os usos e costumes do ramo da
            atividade serão usados para definição.
            <br />
            <br />
            Além do fornecedor ter que entregar o objeto do contrato, o produto
            deve ser entregue ao fornecido em boas condições para uso. Dessa
            forma, se a coisa, ao ser entregue, estiver com algum “problema”,
            como danificação, o fornecedor poderá responder pelos defeitos.
            <br />
            <br />
            Como o contrato de fornecimento é de duração, assim, o fornecedor
            deve comunicar, em tempo hábil ao fornecido, eventual
            impossibilidade de entregar a coisa na quantidade ou qualidade
            ajustados.
            <br />
            <br />
            O fornecido tem as obrigações de pagar o preço e de receber as
            coisas na quantidade e qualidade acordados. Se as partes não
            ajustaram no contrato a forma como se deve ser feito o pagamento, o
            fornecimento deverá pagar à vista.
            <br />
            <br />
            As partes podem ajustar nessa modalidade de contrato a cláusula de
            exclusividade para determinada área, determinados produtos ou até
            mesmo para a relação de fornecimento entre as partes. Caso, haja a
            quebra dessa cláusula pode acarretar a rescisão contratual e a
            possibilidade de indenização.
          </p>
          <h4 className="color-blue">Tipos de fornecimento</h4>
          <p>
            Sobre os bens definidos no contrato, são duráveis ou consumíveis,
            fungíveis ou infungíveis. O fornecimento, pode incidir em alienação,
            quando se relaciona a transferência de propriedade; consumo, quando
            o bem é usado para repor outro que foi consumido; ou gozo e uso,
            quando o que é transferido tem finalidade única de ser utilizado.
            Como exemplifica Silvio Venosa, na mesma ordem, fornecimento de
            propriedade transmitida (matéria-prima), o fornecimento para
            abastecimento para consumo (água e alimentos para funcionários) e
            fornecimento para o uso do bem (vestimentas para representação
            teatral).
          </p>
          <br />
          <p>
            O prazo e a duração, chamados também de vigência, definidos neste
            contrato são sem dúvida características cruciais quando se faz uma
            análise, mesmo que breve, aqui, estes elementos caracterizam o
            contrato como de fornecimento. O prazo, determinado ou não, é
            vinculado a duração da prestação de serviços, quando determinado,
            serve, também, para dar segurança para as partes, ou seja, é pelo
            prazo que se define até quando o contrato vigora, obviamente. Com o
            cumprimento da obrigação na data prevista no prazo, as partes podem
            se organizar de maneira benéfica, por exemplo, procurando outros
            fornecedores ou até esgotando o estoque de produtos comprados.
            Quando o prazo para o fim da obrigação não é determinado, a
            manifestação de uma parte em terminar o contrato, deve ser feita por
            notificação e o fim das obrigações dependem de aviso prévio, com
            tempo para encerrar o contratado, podendo assim, a parte, se
            organizar e não acabar sendo prejudicada pela outra, que
            repentinamente decidiu terminar o contrato. Há de se falar em
            indenização para parte que sofreu danos por rompimento abusivo, sem
            prévia notificação.
          </p>
          <br />
          <p>
            Em relação a execução, é definida nos termos do contrato ou em suas
            cláusulas, ou amparada pela por elas. Refere-se a frequência de
            aquisição do bem, tipo de entrega e as peculiaridades incidentes
            deste tipo de contrato. Em geral, a entrega pode se, r integral,
            parcial, continua ou como as partes definirem. Respectivamente, na
            integral, é entregue uma quantidade pré-definida de bens uma única
            vez; na parcial, a entrega é feita com proporções e épocas
            estabelecidas, em parcelas de um montante total estabelecido; e na
            continua, a coisa é entregue de forma frequente e continua, com
            proporções estabelecidas. Existindo, assim, a entrega continua de
            bens conforme a necessidade e pedido da parte, sendo a entrega
            integral e parcial presentes na simples compra e venda, e a continua
            no fornecimento, ficando evidente a diferença entre ambas.
          </p>
          <br />
          <p>
            Para uma análise mais completa dos tipos e elementos do contrato de
            fornecimento, é interessante compará-lo com outros contratos, já que
            possui elementos e características que derivam diretamente ou que
            são adaptadas de outros contratos, como o de simples compra e venda
            e o contrato de distribuição. Comparado com a simples compra e
            venda, o fornecimento se diferencia fortemente pela periodicidade e
            continuidade da entrega, mesmo quando a compra e venda é estendida,
            tendo suas prestações parceladas em diferentes momentos, tem como
            obrigação uma única prestação, porém, fracionada, ou seja, parcelas,
            sendo entregues até que o prazo total se extinga; sendo no
            fornecimento, cada entrega, remessa, pagamento e recebimento, é
            ligado à uma única obrigação. O contrato de distribuição diverge do
            de fornecimento quando analisamos a ênfase dada ás obrigações das
            partes, e nas características do produto, sendo assim, o
            distribuidor visa sempre a revenda dos bens, que segundo a
            Professora Paula A. Forgioni, em seu livro sobre contratos de
            distribuição, geralmente são bens de capital ou de consumo que
            necessitam de distribuição. A Professora, ainda releva a principal
            dessemelhança, que para ela, está presente na função econômica dos
            contratos, baseada nas palavras de Rubens Requião, o contrato de
            distribuição visa a transferência de bens para a parte que os
            compra, podendo ela revender ou dar eles em locação, e o de
            fornecimento visa satisfazer necessidades próprias do comprador.
          </p>
          <br />
          <p>
            Concluindo, no contrato de fornecimento, as partes definem a
            entrega, o fornecimento da coisa com prazo determinado, periódico ou
            não, mediante pagamento que pode ser estabelecido igual para todas
            as entregas ou diferente para cada entrega, variando de acordo com a
            quantidade, disponibilidade e circunstancias que incidirão sobre o
            preço do bem, podendo, então, o preço ser pactuado ou tabelado.
            Basicamente, um contrato de fornecimento se diferencia de outro, por
            suas cláusulas, que incidem sobre todos seus aspectos. Segundo Vera
            Helena de Mello Franco, em seu livro “Contratos – Direito civil e
            empresarial”, em regra, as cláusulas deste contrato já estão
            previamente fixadas, tornando-os, assim, de adesão, e quanto ao
            preço tabelado, mencionado anteriormente, pode ser resultado de
            tabelamento oficial, como o fornecimento de água, energia elétrica e
            de gás.
          </p>
        </div>
      </article>
      <StepsSection />
      <Related
        list={[
          {
            image: image1,
            title: "Compra de recebíveis",
            description:
              "Modalidade de crédito perfeita para produtores rurais",
            link: "/antecipacao-de-recebiveis/",
          },
          {
            image: image2,
            title: "Capital de Giro",
            description:
              "Modalidade de crédito perfeita para produtores rurais",
            link: "/capital-de-giro/",
          },
          {
            image: image3,
            title: "Antecipação de recebíveis",
            description:
              "Modalidade de crédito perfeita para produtores rurais",
            link: "/antecipacao-de-recebiveis/",
          },
        ]}
      />
      <Contact />
      <Footer />
    </Layout>
  )
}
