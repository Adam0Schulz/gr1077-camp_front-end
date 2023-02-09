import { DBObject } from 'api/models'
import './SelectInput.css'
import Form from 'react-bootstrap/Form'

interface Props {
  label: string,
  defaultText: string,
  displayOptions: { id: number, text: string }[],
  objectOptions: DBObject[],
  onChange: (choice: DBObject) => void,
  disabled?: boolean,
  defaultOption?: number

}
const SelectInput = ({ label, defaultText, displayOptions, objectOptions, onChange, disabled, defaultOption }: Props) => {

  const select = (id: number) => {
    onChange(objectOptions.find(obj => obj.id === id) as DBObject)
  }


  return (
    <Form.Group className="mb-3 select-input ">
      {label == '' || !(label) ? <></> : <Form.Label>{label}</Form.Label>}
      <Form.Select disabled={disabled} aria-label={label} value={defaultOption} onChange={e => select(Number(e.target.options[e.target.selectedIndex].value))}>
        <option value={0}>{defaultText}</option>
        {displayOptions.map(option => <option value={option.id}>{option.text}</option>)}
      </Form.Select>
    </Form.Group>
  )
}

export default SelectInput