import './DateInput.css'
import Form from 'react-bootstrap/Form'

interface Props {
    label: string,
}

const DateInput = ({label}: Props) => {
  return (
    <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control type="date" />
    </Form.Group>
  )
}

export default DateInput