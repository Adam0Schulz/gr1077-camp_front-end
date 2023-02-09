import { useEffect, useState } from 'react';
import './SelectGroup.css';
import { DBObject } from 'api/models';
import SelectInput from '../SelectInput/SelectInput';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

interface Props {
  label: string;
  defaultText: string;
  displayOptions: { id: number; text: string }[];
  objectOptions: DBObject[];
  onChange: (choices: DBObject[]) => void;
  defaultOptions?: DBObject[];
}

const SelectGroup = ({ label, defaultText, displayOptions, objectOptions, onChange, defaultOptions }: Props) => {
  const [selected, setSelected] = useState<DBObject[]>(defaultOptions || [{ id: 0 }]);

  const addSelected = (value: DBObject, index: number) => {
    const newSelected = Array.from(selected);
    if (value === undefined) {
      newSelected.splice(index, 1);
      setSelected(newSelected);
    } else if (selected.find((e) => JSON.stringify(e) === JSON.stringify(value))) {
      newSelected.splice(index, 1);
      setSelected(newSelected);
      toast.warning("You've tried to add two of the same researchers. Only one will be added");
    } else if (selected[index]) {
      newSelected[index] = value;
      setSelected(newSelected);
    } else {
      setSelected([...selected, value]);
    }
  };

  const handleOnSelect = (value: DBObject, index: number) => {
    addSelected(value, index);
  };

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  return (
    <div className='select-group'>
      <Form.Label>{label}</Form.Label>
      {selected.map((item, index) => (
        <SelectInput
          label=""
          defaultText={defaultText}
          displayOptions={displayOptions}
          objectOptions={objectOptions}
          defaultOption={item.id}
          onChange={(obj) => handleOnSelect(obj, index)}
        />
      ))}
      <button
        className='select-group__btn'
        disabled={selected.length >= displayOptions.length}
        onClick={(e) => setSelected([...selected, { id: 0 }])}
      >
        +
      </button>
    </div>
  );
};

export default SelectGroup;