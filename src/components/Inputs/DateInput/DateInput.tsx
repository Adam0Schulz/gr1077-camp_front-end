import './DateInput.css'
import Form from 'react-bootstrap/Form'

interface Props {
  label: string,
  def?: Date,
  onChange: (date: Date) => void
}

const DateInput = ({ label, onChange, def }: Props) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control type="date" onChange={e => onChange(new Date(e.target.value))} />
    </Form.Group>
  )
}

export default DateInput