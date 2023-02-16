import { Dispatch, SetStateAction } from 'react'
import {Form} from 'react-bootstrap'
import './style.css'

interface Props {
    options: string[],
    action: Dispatch<SetStateAction<any>>,
    def?: string
}

const Filter = ({ options, action, def }: Props) => {
    return (
        <select onChange={e => action(e.target.value)} className='filter-select' defaultValue={def}>
            {options.map(option =>
                <option value={option}>{option}</option>
            )}
        </select>
    )
}

export default Filter