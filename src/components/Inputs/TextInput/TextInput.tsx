import Form from 'react-bootstrap/Form'

interface Props {
    label: string,
    def?: string,
    onChange?: (text: string) => void
}

const TextInput = ({label, def, onChange}: Props) => {
  return (
    <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control type="text" placeholder={label} defaultValue={def} onChange={e => onChange && onChange(e.target.value)}/>
    </Form.Group>
  )
}

export default TextInput