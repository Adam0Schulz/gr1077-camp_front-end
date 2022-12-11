import TextInput from 'components/Inputs/Basic/TextInput/TextInput'
import './LinkSection.css'

interface Props {
  link: string,
  text: string,
}

const LinkSectionInput = ({link, text}: Props) => {
  return (
    <div className='section-input link-section-input'>
      <TextInput label='Link' def={link} />
      <TextInput label='Text' def={text} />
    </div>
  )
}

export default LinkSectionInput