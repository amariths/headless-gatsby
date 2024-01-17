import React from 'react'
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Layout from '../components/layout';
import Layout2 from '../components/layout2';



export const query = graphql`
query ($slug: String!)  {

    contentfulPortfolioItems(slug: { eq: $slug }) {
        namn
        description {
          description
        }
          bild {
            gatsbyImage(layout: CONSTRAINED, width: 300, )
          }

    }
}
`

function Items(props) {


  return (
    <Layout2>
    <Link to="/portfolio/">Visit the portfolio items Page</Link>
    <div className="content">
      <h1>{props.data.contentfulPortfolioItems.namn}</h1>
      <span>{props.data.contentfulPortfolioItems.description.description}</span>
    </div>
  </Layout2>
  )
}

export default Items


//     const { contentfulPortfolioItems } = props.data;

//     // Check if the data is not available
//     if (!contentfulPortfolioItems) {
//       return (
//         <Layout>
//           <p>Loading...</p>
//         </Layout>
//       );
//     }

//     // Destructure properties further
//     const { namn, description, bild } = contentfulPortfolioItems;
//     const image = getImage(bild);

//     return (
//       <Layout>
//         <Link to="/portfolio/">Visit the portfolio items Page</Link>
//         <div className="content">
//           <h1>{namn}</h1>
//           {/* Check if image is available before rendering */}
//           {image && <GatsbyImage image={image} alt={namn} />}
//           <p>{description.description}</p>
//         </div>
//       </Layout>
//     );
//   }
