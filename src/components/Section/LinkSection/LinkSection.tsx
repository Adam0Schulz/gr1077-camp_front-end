import { LinkSection as Link } from 'api/models'
import React from 'react'

interface Props {
    link: Link,
    row: number,

}

const LinkSection = ({link, row}: Props) => {
  return (
    <div style={{gridRow: row}} className={'section-cont link-section'}>{link.link}</div>
  )
}

export default LinkSection