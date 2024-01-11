import React, {useState,} from 'react'
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'



function CMS(contentfulPage) {

  const emptyQuery = ""
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

 const data = useStaticQuery(graphql`
    query {
      allContentfulTekniker(sort: {createdAt: ASC}) {
        edges {
          node {
            id
            title
            description {
              description
            }
            kategori
          }
        }
      }
    }
  `)


  const allposts = data.allContentfulTekniker.edges

const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value


    // this is how we get all of our posts
    const posts = data.allContentfulTekniker.edges || []


     // return all filtered posts
    const filteredData = posts.filter(post => {
      // destructure data from post frontmatter
      const { title, kategori } = post.node
      return (
        // standardize data with .toLowerCase()
        // return true if the description, title or tags
        // contains the query string
        title.toLowerCase().includes(query.toLowerCase())||
        kategori.toLowerCase().includes(query.toLowerCase()) 
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


  return (
    <div> <h2>cms kurs</h2>
      
<input
              type="text"
              aria-label="Search"
              placeholder="Type to filter posts..."
              onChange={handleInputChange}
          />

<select onChange={handleInputChange}>
<option value="">välj cms</option>
  <option value="headless-cms">headless-cms</option>
  <option value="traditonell-cms">traditonell-cms</option>
  
</select>


      <ul className="posts">

{posts && posts.map((edge) => {
    return(

        <li className="post" key={edge.node.id}>
            <div class="card">

                <div class="card-body">
                 <h5 class="card-title">
                 {edge.node.title}
                 </h5>
                 { edge.node.description.description}

              </div>
              </div>

        </li>
    )
})}

</ul>

    </div>
  )
}

export default CMS
