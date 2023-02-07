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
      <Form.Control type="date" value={def?.toString()} onChange={e => onChange(new Date(e.target.value))} />
      {/* <Form.Control type="date" value={def ? def.toString() : undefined} style={{ backgroundColor: "red" }}/> */}
    </Form.Group>
  )
}

export default DateInput