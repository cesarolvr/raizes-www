module.exports = {
  siteMetadata: {
    title: `Fundo Raízes`,
    description: `Fundo de investimentos especializado na compra de recebíveis provenientes de vendas mercantis de bens e serviços nos diversos segmentos da economia.`,
    author: `@cesarolvr`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `raizes-web`,
        short_name: `raizes-web`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
