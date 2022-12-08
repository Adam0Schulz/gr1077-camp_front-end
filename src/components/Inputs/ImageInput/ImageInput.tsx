import './ImageInput.css'
import uploadImageDark from 'assets/icons/upload.svg'
import uploadImageLight from 'assets/icons/upload_light.svg'
import { useState } from 'react'
import axios from 'axios'


const ImageInput = () => {
  const [image, setImage] = useState('')

  const handleUpload = (files: FileList | null) => {
    if (files != null && files.length > 0) {
      var src = URL.createObjectURL(files[0])
      setImage(src)
    }
  }

  const uploadImage = () => {
    /*const data = new FormData()
    //data.append('image', image)
    data.append('image', image);
    fetch('https://api.imgur.com/3/image',
    {
      method: 'post',
      headers: {
        Authorization: "Client-ID 56a86dc37a1658b",
      },
      body: formdata
    }
    )
    .then(data => console.log(data.json()))
    
    var config = {
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
      });*/
  }

  return (
    <>
      <div className='image-input' style={image != '' ? { backgroundColor: 'rgba(0,0,0,0.5)' } : {}}>
        {image != '' &&
          <img className='image-input__preview' src={image} />
        }
        <input className='image-input__input' onChange={e => handleUpload(e.target.files)} type={'file'} />
        <div className='image-input__hint' style={image == '' ? { color: 'var(--color-gray-dark)' } : { color: 'white' }}>
          <img src={image == '' ? uploadImageDark : uploadImageLight} />
          <h5>Drag & drop an image here</h5>
          <h5>or</h5>
          <button>Choose file</button>
        </div>



      </div>
      <button onClick={uploadImage}>upload</button>
    </>
  )
}

export default ImageInput