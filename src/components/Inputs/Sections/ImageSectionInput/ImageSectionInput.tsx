import ImageInput from 'components/Inputs/Basic/ImageInput/ImageInput'
import { Image, NewImage } from 'api/models'
import TextInput from 'components/Inputs/Basic/TextInput/TextInput'

interface Props {
  image?: Image | NewImage,
}

const ImageSectionInput = ({image}: Props) => {
  return (
    <div className='section-input image-section-input'>
      <TextInput label='Image Caption' def={image?.caption}/>
      <ImageInput defaultImg={image?.url}/>
    </div>
  )
}

export default ImageSectionInput