import { ImageSection as Image } from '../../../api/models'
import './ImageSection.css'

interface Props {
  image: Image,
  row: number,
}

const ImageSection = ({image, row}: Props) => {
  return (
    <div style={{gridRow: row}}  className={'section-cont image-section image-section--' + (row % 2 == 0 ? 'even' : 'odd')}>
      <div className='img_cont'>
        <img src={image.image.url} alt={image.image.caption} />
      </div>
      <label>{image.altText}</label>
    </div>
  )
}

export default ImageSection