import React  from 'react';


import {
  faTimes,
  faCheck,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const links = [
  {
    text: "Para sua empresa",
    to: "/#para-sua-empresa",
  },
  {
    text: "Para investidores",
    to: "/para-investidores/",
  },
  {
    text: "Quem somos",
    to: "/quem-somos/",
  },
  {
    text: "Contato",
    to: "/contato/",
  },
  {
    text: "FAQ",
    to: "/faq/",
  },
  {
    text: "Área do cliente",
    to: "http://168.0.134.22:8080/netFactor/jsp/nfrInicia.jsp",
    target: "_blank",
  },
]

export const products = {
  0: {
    slug: "antecipacao-de-recebíveis",
    title: "Antecipação de Recebíveis",
  },
  1: {
    slug: "capital-de-giro",
    title: "Capital de Giro",
  },
  2: {
    slug: "home-equity",
    title: "Home Equity",
  },
  3: {
    slug: "cedula-de-produto-rural",
    title: "Cédula de Produtor Rural",
  },
  4: {
    slug: "antecipacao-de-contratos",
    title: "Antecipação de Contratos",
  },
  5: {
    slug: "domicilio-bancario",
    title: "Domicílio Bancário",
  },
}


export const statusDictionary = {
  success: () => (
    <>
      Enviado com sucesso
      <FontAwesomeIcon icon={faCheck} />
    </>
  ),
  pending: () => (
    <>
      Carregando...
      <FontAwesomeIcon icon={faSpinner} />
    </>
  ),
  error: () => (
    <>
      Falha ao enviar o formulário
      <FontAwesomeIcon icon={faTimes} />
    </>
  ),
}