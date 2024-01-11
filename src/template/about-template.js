import React from 'react'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage } from 'gatsby-plugin-image'

function AboutTemplate(contentfulPage) {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {

      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2>{children}</h2>
      },
    },
  }

  return (
    <div>
        <h2>{contentfulPage.title}</h2>
      about template
      om oss
      {renderRichText(contentfulPage.content, options)}
      {contentfulPage.image && <GatsbyImage alt={contentfulPage.title} image={contentfulPage.image.gatsbyImage} />}

    </div>
  )
}

export default AboutTemplate
