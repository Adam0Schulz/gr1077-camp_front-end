import ImageInput from 'components/Inputs/Basic/ImageInput/ImageInput'
import { Image, NewImage } from 'api/models'

interface Props {
  image?: Image | NewImage,
  onChange?: (image: NewImage | Image) => void
}

const ImageSectionInput = ({image, onChange}: Props) => {
  return (
    <div className='section-input image-section-input'>
      <ImageInput image={image} onChange={onChange}/>
    </div>
  )
}

export default ImageSectionInput