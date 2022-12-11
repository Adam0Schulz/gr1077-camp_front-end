import { ReactNode, useState } from 'react'
import SelectInput from '../SelectInput/SelectInput'
import './SelectGroup.css'

interface Props {
    type: 'researcher' | 'external researcher',
    options: string[]
}

const SelectGroup = ({ type, options }: Props) => {

    const [count, setCount] = useState([1])
    const [opt, setOpt] = useState(options)

    console.log(count)

    return (
        <div className='select-group'>
            {type == 'researcher' ?
                <>
                    {count.map(() =>
                        <SelectInput label="Researcher" defaultOption="Select a researcher" options={options} />)
                    }

                </>
                :
                <>
                    {count.map(() => <SelectInput label="External Researcher" defaultOption="Select a researcher" options={options} />)}

                </>
            }
            <button className='select-group__more-btn' onClick={() => setCount([...count, count[count.length - 1] + 1])}>+</button>
        </div>
    )
}

export default SelectGroup