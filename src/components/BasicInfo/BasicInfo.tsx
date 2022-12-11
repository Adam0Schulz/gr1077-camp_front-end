import './BasicInfo.css'
import Separator from "components/Separator/Separator"
import TextInput from "components/Inputs/Basic/TextInput/TextInput"
import ImageInput from "components/Inputs/Basic/ImageInput/ImageInput"
import SelectGroup from "components/Inputs/Select/SelectGroup/SelectGroup"
import TimeInput from "components/Inputs/Basic/TimeInput/TimeInput"
import DateInput from "components/Inputs/Basic/DateInput/DateInput"
import SmallHeading from 'components/SmallHeading/SmallHeading'

const BasicInfo = () => {
    return (
        <div className="basic-info">
            <SmallHeading text={'basic info'} />
            <div className="basic-info__body">
                <div className="basic-info__header-info">

                    <TextInput label="Title" />
                    <ImageInput />

                </div>
                <div className="basic-info__sidebar">
                    <div className="basic-info__datetime">
                        <DateInput label="Date" />
                        <TimeInput label="Start time" />
                        <TimeInput label="End time" />
                    </div>
                    <SelectGroup type="researcher" options={['adam', 'soheil', 'simona', 'robert']} />
                    <SelectGroup type="external researcher" options={['adam', 'soheil', 'simona', 'robert']} />
                </div>

            </div>
        </div>
    )
}

export default BasicInfo