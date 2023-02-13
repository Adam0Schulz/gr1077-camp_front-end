import Form from 'react-bootstrap/Form'
import searchIcon from 'assets/icons/search.svg'
import './TextInput.css'

interface Props {
  label: string,
  def?: string,
  onChange?: (text: string) => void,
  placeholder?: string,
  search?: boolean
}

const TextInput = ({ label, def, onChange, placeholder, search }: Props) => {
  return (
    <Form.Group className="mb-3 text-input">
      {label == '' || !(label) ? <></> : <Form.Label>{label}</Form.Label>}
      {search ? <img className='text-input__search-icon' src={searchIcon} /> : <></>}
      <Form.Control className='text-input__form-control' type="text" placeholder={placeholder ? placeholder : label} defaultValue={def} onChange={e => onChange && onChange(e.target.value)} />
    </Form.Group>
  )
}

export default TextInput