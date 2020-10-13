/*
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
  	type Query {
  		setting(id: ID!): setting
  		allSetting(id: ID!): [setting]
  	}

    type setting implements Node {
      name: String!
      value: String!
    }
  `)
}
*/

exports.createPages = async ({ graphql, actions, getNodesByType }) => {
	const { createPage } = actions

	const result = await graphql(query)

	result.data.allPage.nodes.map(async (page) => {
		createPage({
			path: page.slug,
			component: __dirname + '/src/components/Page.js',
			context: {page}
		})
	})
}

const query = `
query MyQuery {
  allPage {
    nodes {
      ID
      codice_body
      codice_head
      data_pubblicazione
      href
      html_class
      html_title
      immagine
      slug
      titolo
      sezioni {
        ID
        titolo
        testo
        testo_chiusura
        immagine_sfondo
        colore_sfondo
        margine_colonne
        edge_to_edge
        raccolta_articoli
        categoria_pagina
        max_articoli
        articoli_per_riga
        link_read_more
        tag_titolo
        css_path
        js_path
        html_class
        ratio_ritaglio_immagini
        parametri
        sort
        aspetto
        style
        col_width
        img_width
        form_open
        paragrafi {
          titolo
          immagine
          testo
          data_pubblicazione
          html_attrs
          linked_page_id
          ID
          url_traduzione_collegamento
          title
          documento
          url_collegamento
          html_class
          sort
          link {
            href
            label
            target
          }
        }
      }
      template {
        ID
        body_class
        footer
        gruppo_menu
        nome
      }
    }
  }
}
`
