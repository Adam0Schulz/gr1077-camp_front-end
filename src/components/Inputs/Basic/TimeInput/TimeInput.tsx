import './TimeInput.css'
import Form from 'react-bootstrap/Form'

interface Props {
    label: string,
}

const TimeInput = ({label}: Props) => {
  return (
    <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control type="time" />
    </Form.Group>
  )
}

export default TimeInput