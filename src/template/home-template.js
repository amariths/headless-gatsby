import React from 'react'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

function HomeTemplate(contentfulPage) {
  return (
    <div> <h2>{contentfulPage.title}</h2>
      Home template

    </div>
  )
}

export default HomeTemplate
