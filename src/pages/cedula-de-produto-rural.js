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
import backgroundPath from "../images/hero-produtor-rural.jpg"
import image1 from "../images/thumb-cedula-de-produtor-rural.jpg"
import image2 from "../images/thumb-capital-de-giro.jpg"
import image3 from "../images/thumb-antecipacao-de-contratos.jpg"

export default () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <Hero
        backgroundPath={backgroundPath}
        title="Cédula de Produtor Rural"
        subtitle="Produtos"
        description="Modalidade de crédito perfeita para produtores rurais."
      />
      <article className="article">
        <div className="container">
          <p>
            O agronegócio é essencial para a economia brasileira, uma vez que
            representa 23% do PIB1. O setor é marcado por grande intervenção
            estatal, tendo quase que a totalidade de seu financiamento
            decorrente de recursos do governo federal. Tendo em vista que esses
            recursos são escassos, logo passaram a não suportar a demanda do
            agronegócio por financiamento. Diante dessa situação, o poder
            público entendeu a necessidade da participação de investidores
            privados para o melhor desenvolvimento do setor. Neste contexto, a
            lei 8.929/94 introduziu a Cédula de Produto Rural (CPR), que logo
            passou a fazer parte do cotidiano no mundo do agronegócio. Uma vez
            que apresenta a possibilidade de que sua liquidação se dê de maneira
            física ou financeira, como veremos a seguir, esta se mostra um
            importante instrumento por conta de sua flexibilidade, podendo ser
            utilizado para diversas finalidades: aquisição de produtos e
            insumos, financiamento de produção, prestação de garantia, dentre
            outras. 2) Cédula de Produto Rural De acordo com o art. 1º da lei
            antes mencionada, a CPR é um título líquido e certo que representa a
            "promessa de entrega de produtos rurais" feita por seu emitente. A
            CPR de liquidação física não apresenta um preço, simplesmente
            descrimina a quantidade e qualidade de um produto rural, que deverá
            ser entregue pelo emitente. Por produto rural podemos entender não
            somente os produtos agrícolas ou pecuários in natura, mas também os
            beneficiados e industrializados. Sendo assim, todo produto de origem
            agropecuária pode ser objeto de CPR, sendo os mais comuns aqueles
            que tem maior liquidez no mercado. Estão aptos para emitir esse
            título os produtores rurais, suas associações e cooperativas, nos
            termos do art. 2º da lei supramencionada. Para que seja um
            instrumento válido, a CPR deverá conter: a denominação "Cédula de
            Produto Rural"; a data da entrega; o nome do credor e cláusula à
            ordem; promessa pura e simples de entregar o produto, sua indicação
            e as especificações de qualidade e quantidade; o local e as
            condições da entrega; a descrição dos bens cedularmente vinculados
            em garantia; a data e lugar da emissão; a assinatura do emitente.
            Importante ressaltar que, visando trazer segurança ao título, de
            acordo com o art. 11º da lei da CPR, não pode o emitente invocar
            caso fortuito ou força maior para se eximir da obrigação inscrita no
            título. Tal disposição, encontra-se acatada na jurisprudência, como
            no recente julgado do Tribunal de Justiça de Minas Gerais, a seguir:
          </p>
          <p>
            Na CPR a existência de uma garantia não é obrigatória, entretanto,
            caso se faça presente alguma garantia, esta poderá ser feita na
            própria CPR, ou em um documento à parte assinado pelo emitente. Para
            garantir uma CPR poderá se constituir hipoteca, penhor ou alienação
            fiduciária. Uma vez que a CPR é regida pelas normas do direito
            cambial, também é aceita a constituição de garantia de aval. No
            vencimento determinado pelo título, o titular da CPR poderá exigir
            do emitente o produto, na quantidade e qualidade estabelecidas. É
            possível, ainda, o cumprimento parcial da obrigação de entrega,
            sendo este anotado no verso do título, tornando-se exigível apenas o
            restante. Para que tenha eficácia perante terceiros, a CPR deverá
            ser registrada no Cartório de Registro de Imóveis do domicílio do
            emitente e, caso haja penhor, hipoteca ou alienação fiduciária,
            deverá ser registrada, também, no Cartório de Registro de Imóveis no
            qual os bens estão empenhados ou alienados fiduciariamente, ou o
            imóvel está hipotecado ou alienado fiduciariamente. Visando trazer
            segurança para a operação, a lei determinou que os bens vinculados à
            CPR não poderão ser penhorados ou sequestrados por outras dívidas do
            emitente ou terceiro prestador de garantia real. O endosso da CPR é
            possível, sendo aplicáveis as normas do direito cambial, com algumas
            especialidades, são elas: não é permitido o endosso em branco,
            devendo ser completamente identificado o novo titular do direito; o
            endossante não responde pelo cumprimento da obrigação de entregar o
            produto, mas somente por sua existência; e não se exige o protesto
            do título para se assegurar o direito de regresso contra os
            avalistas. 3) Cédula de Produto Rural Financeira (CPRF) Com a lei
            10.200/01, foi incluído à lei 8.929/94 o Artigo 4-A, que criou a
            Cédula de Produto Rural Financeira. Enquanto a CPR Física apenas
            descrimina a quantidade e a qualidade de um produto a ser entregue,
            a CPR Financeira vai além e apresenta um método para a obtenção de
            um valor, com base em um preço ou índice de preços a ser
            multiplicado pelos produtos descritos na mesma, que deverá ser
            desembolsado pelo emitente para a liquidação do título. Com relação
            à definição da CPRF, explica Renato Buranello:
          </p>
          <p>
            "A CPR Financeira (CPRF) é uma modalidade de CPR que foi criada pela
            Medida Provisória nº 2.042/2000, convertida em lei 10.200, de 14 de
            fevereiro de 2001, que incluiu o art. 4º-A à lei 8.929/94. À
            semelhança da CPR Física, contém a descrição do produto e da
            quantidade negociada; a diferença reside na forma de liquidação da
            CPR. Na CPR Financeira, não se prevê a entrega física do produto,
            apenas a liquidação com o pagamento, no vencimento, do valor
            correspondente à multiplicação da quantidade especificada pelo preço
            fixado ou índice de preços adotado no título."2
          </p>
          <p>
            Nos termos do Artigo 4-A, a CPR-F exige que: estejam presentes os
            requisitos necessários para a "identificação do preço ou do índice
            de preços a ser utilizado no resgate do título, a instituição
            responsável por sua apuração ou divulgação, a praça ou o mercado de
            formação do preço e o nome do índice"; sejam nomeadas apenas
            instituições idôneas e de credibilidade com divulgação periódica da
            cotação dos produtos objetos da CPR; as partes tenham fácil acesso
            aos dados a serem utilizados para fixação do preço; esteja presente
            a palavra "financeira" após a denominação "Cédula de Produto Rural".
            Logo, podemos notar que a maior diferença entre a CPR Física e a CPR
            Financeira reside na forma de liquidação. Enquanto na CPR Física
            ocorre a liquidação através da entrega dos produtos na quantidade e
            qualidade descritas na mesma, na CPR Financeira a liquidação se dá
            com o pagamento em dinheiro do valor obtido através da multiplicação
            dos produtos descriminados pelo preço ou índice de preço constante
            no título. 4) Desnecessidade de Contraprestação Existem juristas que
            defendem ser requisito essencial de validade da CPR a existência de
            uma contraprestação, apesar de não haver nenhuma disposição legal
            nesse sentido. Os que defendem a necessidade de contraprestação
            justificam sua teoria afirmando que a CPR é a principal alternativa
            para que os produtores rurais, emitentes de CPR, obtenham o capital
            de giro necessário para o desenvolvimento de suas atividades.
            Afirmam, ainda, que a falta de tal contraprestação implica na
            nulidade do título, por descumprimento de requisito de validade.
            Alguns, até mesmo, sustentam que a contraprestação deve ser uma
            antecipação do preço do produto prometido na CPR em dinheiro e na
            emissão do título3. Arnaldo Wald esclarece dizendo que a CPR é
            definida como um título representativo de promessa de entrega de
            produtos rurais, com ou sem garantia cedularmente constituída, de
            acordo com a lei 8.929/94, e que a lei em questão nada dispôs sobre
            a necessidade de adiantamento da quantia correspondente ao preço da
            mercadoria descrita na CPR para que o título seja válido.4 A
            exigência da antecipação do preço do produto à época da emissão do
            título restringe operações de financiamento agropecuário.:
          </p>
        </div>
      </article>
      <StepsSection />
      <Related
        list={[
          {
            image: image1,
            title: "Home Equity",
            description:
              "Modalidade de credito para prazos mais longos",
            link: "/home-equity/",
          },
          {
            image: image2,
            title: "Capital de Giro",
            description:
              "Modalidade para incrementar  a disponibilidade  de caixa",
            link: "/capital-de-giro/",
          },
          {
            image: image3,
            title: "Antecipação de recebíveis",
            description:
              "Modalidade de credito para fluxo financeiro diário",
            link: "/antecipacao-de-recebiveis/",
          },
        ]}
      />
      <Contact />
      <Footer />
    </Layout>
  )
}
