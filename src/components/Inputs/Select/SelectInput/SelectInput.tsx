import './SelectInput.css'
import Form from 'react-bootstrap/Form'
import { DBObject } from 'api/models'

interface Props {
    label: string,
    defaultOption: string,
    objectOptions?: DBObject[],
    options: {id: number, text: string}[],
    onSelect?: (value: string | DBObject) => void,
    disabled?: boolean
}

const SelectInput = ({label, defaultOption, objectOptions, options, onSelect, disabled}: Props) => {

  const returnObjectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if(objectOptions) {
      return objectOptions.find(item => item.id === Number(e.target.options[e.target.selectedIndex].value))
    }

  }

  return (
    <Form.Group className="mb-3 select-input ">
        <Form.Label>{label}</Form.Label>
        <Form.Select disabled={disabled} aria-label={label} onChange={e => onSelect && onSelect((returnObjectOption(e) as DBObject))}>
            <option>{defaultOption}</option>
            {options.map(option => <option value={option.id}>{option.text}</option>)}
        </Form.Select>
    </Form.Group>
  )
}

export default SelectInput