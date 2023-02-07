import ImageInput from 'components/Inputs/ImageInput/ImageInput'
import { Image, ImageSection, NewImage, NewImageSection } from 'api/models'

interface Props {
  image?: Image | NewImage,
  onChange: (image: NewImageSection | ImageSection) => void
}

const ImageSectionInput = ({image, onChange}: Props) => {
  return (
    <div className='section-input image-section-input'>
      <ImageInput image={image} onChange={(img) => onChange({
        image: img,
        altText: img.caption,
        seq: 0
      })}/>
    </div>
  )
}

export default ImageSectionInput