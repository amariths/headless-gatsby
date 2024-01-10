import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'



function BottomNavigation() {

    const bottom = useStaticQuery(graphql`
    query {
      allContentfulPage(
        sort: {url: ASC}
        filter: {navigation: {eq: "bottom-navigation"}}
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




  return bottom.allContentfulPage.edges;
}

export default BottomNavigation
