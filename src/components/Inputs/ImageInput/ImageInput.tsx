import './ImageInput.css'
import uploadImageDark from 'assets/icons/upload.svg'
import uploadImageLight from 'assets/icons/upload_light.svg'
import { useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import TextInput from '../TextInput/TextInput'
import { Image, NewImage } from 'api/models'

interface Props {
  image?: Image | NewImage,
  onChange?: (image: NewImage | Image) => void
}


const ImageInput = ({ image, onChange }: Props) => {
  
  const [img, setImg] = useState<Image | NewImage>((image ? image : { url: '', caption: '' }) as Image)

  const handleUpload = (files: FileList | null) => {

    if (files != null && files.length > 0) {
      var base64String = "";
      var file = files[0];
      var reader = new FileReader();

      reader.onload = function () {
        base64String = (reader?.result as string)?.replace("data:", "")
          .replace(/^.+,/, "");
        uploadImage(base64String)
        if (onChange) {
          onChange({ url: img.url, caption: img.caption })
        }

      }
      reader.readAsDataURL(file);

    }
  }

  const uploadImage = (base64: string) => {
    const data = new FormData()
    data.append('image', base64);

    const config = {
      method: 'post',
      url: 'https://api.imgur.com/3/image',
      headers: {
        'Authorization': 'Client-ID 56a86dc37a1658b',
      },
      data: data
    };

    return (axios(config)
      .then((response: any) => setImg({ caption: img.caption, url: response.data.data.link }))
      .catch((error: any) => console.log(error)))
  }

  const imageExists = img.url != '' && !(image?.url)

  return (
    <>

      <Form.Label>Image</Form.Label>
      <div className='image-input' style={imageExists ? { backgroundColor: 'rgba(0,0,0,0.5)' } : {}} >
        {img.url != '' &&
          <img className='image-input__preview' src={img.url} />
        }

        {image?.url != '' && image ?
          <img className='image-input__preview' src={image.url} />
          :
          <></>
        }
        <input className='image-input__input' onChange={e => handleUpload(e.target.files)} type={'file'} />
        <div className='image-input__hint' style={!imageExists ? { color: 'var(--color-gray-dark)' } : { color: 'white' }}>
          <img src={!imageExists ? uploadImageDark : uploadImageLight} />
          <h5>Drag & drop an image here</h5>
          <h5>or</h5>
          <button>Choose file</button>
        </div>
      </div>
      <TextInput label='Image Caption' def={image?.caption} onChange={(text) => { setImg({ ...img, caption: text }); onChange && onChange({ url: img.url, caption: text }) }} />
    </>
  )
}

export default ImageInput