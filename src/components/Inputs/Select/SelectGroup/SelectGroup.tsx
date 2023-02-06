import { DBObject, ExternalResearcher, Researcher } from 'api/models'
import { useAtom } from 'jotai'
import { newEvent } from 'lib/atomStore'
import { useState } from 'react'
import { toast } from 'react-toastify'
import SelectInput from '../SelectInput/SelectInput'
import './SelectGroup.css'

interface Props {
    type: 'researcher' | 'external researcher',
    options: Researcher[] | ExternalResearcher[],
    onSelect?: (selectedOptions: DBObject[]) => void
}

const SelectGroup = ({ type, options, onSelect }: Props) => {

    const [count, setCount] = useState([1])
    const [selected, setSelected] = useState<DBObject[]>([])


    const addSelected = (value: DBObject, index: number) => {
        const newSelected = Array.from(selected)
        if(value == undefined) {
            newSelected.splice(index, 1)
            setSelected(newSelected)

        } else if (selected.find(e => JSON.stringify(e) == JSON.stringify(value))) {
            newSelected.splice(index, 1)
            setSelected(newSelected)
            toast.warning("You've tried to add two of the same researchers. Only one will be added")

        } else if(selected[index]) {
            newSelected[index] = value
            setSelected(newSelected)

        }  else {
           
            setSelected([...selected, value])
        }

    }

    const handleOnSelect = (value: DBObject, index: number) => {
        addSelected(value, index)
        if(onSelect) {
            onSelect(selected)
        }

    }

    return (
        <div className='select-group'>
            {type == 'researcher' ?
                <>
                    {count.map((count, index) =>
                        <SelectInput 
                            label="Researcher" 
                            defaultOption="Select a researcher" 
                            onSelect={value => handleOnSelect(value as DBObject, index, )} 
                            options={options.map(option => {return {text: option.firstName + ' ' + option.lastName, id: option.id}})} 
                            objectOptions={options}
                        />
                    )}

                </>
                :
                <>
                    {count.map((count, index) => 
                        <SelectInput 
                            label="External Researcher" 
                            defaultOption="Select a researcher" 
                            onSelect={value => addSelected(value as DBObject, index)} 
                            options={options.map(option => {return {text: option.firstName + ' ' + option.lastName, id: option.id}})} 
                            objectOptions={options}
                        />
                    )}

                </>
            }
            <button 
                disabled={(count.length < options.length) ? false : true} 
                className='select-group__more-btn' 
                onClick={() => setCount([...count, count[count.length - 1] + 1])}
            >+</button>
        </div>
    )
}

export default SelectGroup