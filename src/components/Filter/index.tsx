import { Dispatch, SetStateAction } from 'react'
import './style.css'

interface Props {
    options: string[],
    action: Dispatch<SetStateAction<any>>,
}

const Filter = ({ options, action }: Props) => {
    return (
        <select onChange={e => action(e.target.value)} className='filter-select'>
            {options.map(option =>
                <option value={option}>{option}</option>
            )}
        </select>
    )
}

export default Filter