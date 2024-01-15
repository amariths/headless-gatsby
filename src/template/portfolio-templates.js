import React, {useState} from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Layout from "../components/layout"

//sidans namn blir portfolio efter namnet på javascript-filen
const Portfolio = (contentfulPage) => {
    const emptyQuery = ""
    const [state, setState] = useState({
      filteredData: [],
      query: emptyQuery,
    })

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
            gatsbyImage(layout: FULL_WIDTH, fit: CONTAIN, width: 500, height: 300)
          }
          slug
        }
      }
    }
}
`
)

const allposts = data.allContentfulPortfolioItems.edges

const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value


    // this is how we get all of our posts
    const posts = data.allContentfulPortfolioItems.edges || []


     // return all filtered posts
    const filteredData = posts.filter(post => {
      // destructure data from post frontmatter
      const { description, namn } = post.node
      return (
        // standardize data with .toLowerCase()
        // return true if the description, title or tags
        // contains the query string
        description.description.toLowerCase().includes(query.toLowerCase()) ||
        namn.toLowerCase().includes(query.toLowerCase())
      )
    })

    // update state according to the latest query and results
    setState({
      query, // with current query string from the `Input` event
      filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
    })

  }

  const { filteredData, query } = state
// if we have a fileredData in state and a non-emptyQuery then
// searchQuery then `hasSearchResults` is true
const hasSearchResults = filteredData && query !== emptyQuery

// if we have a search query then return filtered data instead of all posts; else return allPosts
const posts = hasSearchResults ? filteredData : allposts

console.log(posts)

   return (
    <div>
        <h1>{contentfulPage.title}</h1>
        <span>portfolio template</span>
        <input className="portfoliofilter"
              type="text"
              aria-label="Search"
              placeholder="Type to filter posts..."
              onChange={handleInputChange}
          />
    <ul className="posts">

        {posts && posts.map((edge) => {
            return(

                <li className="post" key={edge.node.id}>
                   
                    {edge.node.bild && <GatsbyImage className="card-img" alt={edge.node.namn} image={edge.node.bild.gatsbyImage} />}
                        <div className="card-body">
                         <h5 className="card-title">
                         <Link to={`/portfolio/${edge.node.slug}/`}>
                             {edge.node.namn}
                          </Link>
                         </h5>
                         { edge.node.description && <p className="card-text"> {edge.node.description.description}</p>}

                      </div>
                      

                </li>
            )
        })}

    </ul>
    </div>

)
    }

export const Head = () => <title>Portfolio Page</title>

export default Portfolio
