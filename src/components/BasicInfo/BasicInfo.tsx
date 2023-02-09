import SmallHeading from 'components/SmallHeading/SmallHeading'
import './BasicInfo.css'
import { ReactNode } from 'react'

interface Props {
    left: ReactNode,
    right: ReactNode
}

const BasicInfo = ({left, right}: Props) => {

   

  return (
    <>
        <SmallHeading text='Basic Info'/>
        <div className='basic-info__body'>

            <div>
                {left}
            </div>
            <div>
                {right}
            </div>
        </div>
        
    </>
  )
}

export default BasicInfo