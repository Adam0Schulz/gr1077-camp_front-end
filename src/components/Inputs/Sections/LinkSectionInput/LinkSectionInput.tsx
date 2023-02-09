import TextInput from 'components/Inputs/TextInput/TextInput'
import './LinkSection.css'
import { LinkSection, NewLinkSection, emptyLinkSection } from 'api/models'
import { useEffect, useState } from 'react'

interface Props {
  link: string,
  text: string,
  onChange: (sec: LinkSection | NewLinkSection) => void
}

const LinkSectionInput = ({ link, text, onChange }: Props) => {

  const [linkSec, setLinkSec] = useState<LinkSection | NewLinkSection>(emptyLinkSection)

  useEffect(() => {
    onChange(linkSec)
  }, [linkSec])


  return (
    <div className='section-input link-section-input'>
      <TextInput onChange={(text) => setLinkSec({ ...linkSec, link: text })} label='Link' def={link} />
      <TextInput onChange={(text) => setLinkSec({ ...linkSec, text: text })} label='Text' def={text} />
    </div>
  )
}

export default LinkSectionInput