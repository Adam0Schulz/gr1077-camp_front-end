import './SelectInput.css'
import Form from 'react-bootstrap/Form'

interface Props {
    label: string,
    defaultOption: string,
    options: string[]
}

const SelectInput = ({label, defaultOption, options}: Props) => {
  return (
    <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Select aria-label="Select a researcher">
            <option>{defaultOption}</option>
            {options.map(option => <option value={option}>{option}</option>)}
        </Form.Select>
    </Form.Group>
  )
}

export default SelectInput