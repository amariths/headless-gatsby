import React from 'react'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'



function Kontakt(contentfulPage) {
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
        {renderRichText(contentfulPage.content, options)}
    </div>
  )
}

export default Kontakt
