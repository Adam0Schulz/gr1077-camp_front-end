import Form from 'react-bootstrap/Form'

interface Props {
    label: string,
}

const TextInput = ({label}: Props) => {
  return (
    <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control type="text" placeholder={label} />
    </Form.Group>
  )
}

export default TextInput