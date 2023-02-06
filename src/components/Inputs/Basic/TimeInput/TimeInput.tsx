import './TimeInput.css'
import Form from 'react-bootstrap/Form'
import { Time } from 'api/models'

interface Props {
    label: string,
    onChange?: (time: Time) => void
}

const TimeInput = ({label, onChange}: Props) => {
  return (
    <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control type="time" onChange={e => onChange && onChange((e.target.value) as Time)}/>
    </Form.Group>
  )
}

export default TimeInput