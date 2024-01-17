import React from 'react'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from "react-helmet";


function HomeTemplate(contentfulPage) {
  return (
    <>
    <Helmet> 
          <meta name="description" content="my home page"/>
          </Helmet>
    <div> 
       
      <h2>{contentfulPage.title}</h2>
      <span>Home template2</span>
      {contentfulPage.image && <GatsbyImage alt={contentfulPage.title} image={contentfulPage.image.gatsbyImage} />}
    </div>
    </>
  )
}

export default HomeTemplate
