export const links = [
  {
    text: 'Para sua empresa',
    to: '/#para-sua-empresa'
  },
  {
    text: 'Para investidores',
    to: '/para-investidores/'
  },
  {
    text: 'Quem somos',
    to: '/quem-somos/'
  },
  {
    text: 'Contato',
    to: '/contato/'
  },
  {
    text: 'FAQ',
    to: '/faq/'
  },
  {
    text: 'Área do cliente',
    to: 'http://168.0.134.22:8080/netFactor/jsp/nfrInicia.jsp',
    target: '_blank'
  },
]

export const endpoints = {
  contactForm: {
    dev: 'http://localhost:5000/raizes-b6208/us-central1/emailMessage',
    prod: 'https://us-central1-raizes-b6208.cloudfunctions.net/emailMessage',
  }
}