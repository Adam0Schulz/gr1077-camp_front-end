import Form from 'react-bootstrap/Form'

interface Props {
    label: string,
    def?: string,
    onChange: (text: string) => void
}

const TextAreaInput = ({label, def, onChange}: Props) => {
  return (
    <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control as="textarea" onChange={(e) => onChange(e.target.value)} placeholder={label} defaultValue={def} />
    </Form.Group>
  )
}

export default TextAreaInput