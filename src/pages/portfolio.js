import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'


import Layout from "../components/layout"

//sidans namn blir portfolio efter namnet på javascript-filen
const SecondPage = () => {
    const data = useStaticQuery(graphql`
query {

    allContentfulPortfolioItems(sort: {createdAt: ASC}) {
      edges {
        node {
          namn
          description {
            description
          }
          bild {
            gatsbyImage(layout: CONSTRAINED, width: 300, )
          }
          slug
        }
      }
    }
}
`
)

   return (
  <Layout>
    <ul className="posts">
        {data.allContentfulPortfolioItems.edges.map((edge) => {
            return(
                <li className="post" key={edge.node.id}>
                    <div className="card">
                    {edge.node.bild && <GatsbyImage class="card-img-top" alt={edge.node.namn} image={edge.node.bild.gatsbyImage} />}
                        <div className="card-body">
                         <h5 className="card-title">
                         <Link to={`/portfolio/${edge.node.slug}/`}>
                             {edge.node.namn}
                          </Link>
                         </h5>
                         { edge.node.description && <p className="card-text"> {edge.node.description.description}</p>}

                      </div>
                      </div>

                </li>
            )
        })}

    </ul>

  </Layout>
)
    }

export const Head = () => <title>Portfolio Page</title>

export default SecondPage
