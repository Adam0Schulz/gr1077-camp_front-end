import Separator from "components/Separator/Separator"
import './SmallHeading.css'

interface Props {
    text: string
}

const SmallHeading = ({text}: Props) => {
  return (
    <div className="small-heading">
        <h5 className="small-heading__heading">{text}</h5>
        <Separator />
    </div>
  )
}

export default SmallHeading