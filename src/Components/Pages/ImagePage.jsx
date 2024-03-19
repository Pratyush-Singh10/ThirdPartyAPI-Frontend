import React from 'react'
import { ImageData } from '../../constants'
import useFetchData from '../Hooks/useFetchData'
import RenderImages from '../Templates/FetchImage/RenderImages'
import { GetToken } from '../Utils/Utils'


const ImagePage = () => {
  const token =  GetToken('token'); 
  const{data: imageData, loaded} = useFetchData(ImageData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  })
  console.log("Image Page", loaded)

  return (
    <div>
        <RenderImages imagesData={imageData} loaded={loaded} />
    </div>
  )
}

export default ImagePage