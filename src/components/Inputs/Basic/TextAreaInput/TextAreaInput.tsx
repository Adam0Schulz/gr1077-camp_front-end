import Form from 'react-bootstrap/Form'

interface Props {
    label: string,
    def?: string
}

const TextAreaInput = ({label, def}: Props) => {
  return (
    <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control as="textarea" placeholder={label} defaultValue={def} />
    </Form.Group>
  )
}

export default TextAreaInput