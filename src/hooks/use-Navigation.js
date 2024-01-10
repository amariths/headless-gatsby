import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'



function UseNavigation() {

    const top = useStaticQuery(graphql`
    query {
      allContentfulPage(
        sort: {updatedAt: ASC}
        filter: {navigation: {eq: "top-navigation"}}
        ) {
        edges {
          node {
            title
            url
          }
        }
      }
    }
  `)




  return top.allContentfulPage.edges;
}

export default UseNavigation
