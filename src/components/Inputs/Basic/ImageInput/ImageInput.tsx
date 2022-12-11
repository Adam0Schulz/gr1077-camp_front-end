import './ImageInput.css'
import uploadImageDark from 'assets/icons/upload.svg'
import uploadImageLight from 'assets/icons/upload_light.svg'
import { useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import imagdz from 'assets/images/culture-girl.jpg'

interface Props {
  defaultImg?: string
}


const ImageInput = ({defaultImg}: Props) => {
  const [image, setImage] = useState({ base64: '', imgSrc: defaultImg ? defaultImg : '' })

  const handleUpload = (files: FileList | null) => {
    var base64String = "";
    if (files != null && files.length > 0) {
      var file = files[0];
      var reader = new FileReader();

      reader.onload = function () {
        base64String = (reader?.result as string)?.replace("data:", "")
          .replace(/^.+,/, "");
        setImage({ base64: base64String, imgSrc: (reader?.result as string) })
      }
      reader.readAsDataURL(file);
    }
  }


  const uploadImage = () => {
    const data = new FormData()
    data.append('image', image.base64);

    const config = {
      method: 'post',
      url: 'https://api.imgur.com/3/image',
      headers: {
        'Authorization': 'Client-ID 56a86dc37a1658b',
      },
      data: data
    };

    axios(config)
      .then(function (response: any) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }

  return (
    <>
      <Form.Label>Image</Form.Label>
      <div className='image-input' style={image.imgSrc != '' ? { backgroundColor: 'rgba(0,0,0,0.5)' } : {}} >
        {image.imgSrc != '' &&
          <img className='image-input__preview' src={image.imgSrc} />
        }
        <input className='image-input__input' onChange={e => handleUpload(e.target.files)} type={'file'} />
        <div className='image-input__hint' style={image.imgSrc == '' ? { color: 'var(--color-gray-dark)' } : { color: 'white' }}>
          <img src={image.imgSrc == '' ? uploadImageDark : uploadImageLight} />
          <h5>Drag & drop an image here</h5>
          <h5>or</h5>
          <button>Choose file</button>
        </div>



      </div>
      <button disabled onClick={uploadImage}>upload</button>
    </>
  )
}

export default ImageInput