import React from 'react'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage } from 'gatsby-plugin-image'


function HomeTemplate(contentfulPage) {
  return (
    <div> <h2>{contentfulPage.title}</h2>
      <span>Home template</span>
      {contentfulPage.image && <GatsbyImage alt={contentfulPage.title} image={contentfulPage.image.gatsbyImage} />}
    </div>
  )
}

export default HomeTemplate
