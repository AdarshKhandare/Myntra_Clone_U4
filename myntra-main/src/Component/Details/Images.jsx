import React from 'react'
import { ImageContainer} from './detailStyled'
function Images(props) {
    let images = props.image[0].images
    console.log(images)
  return (
      <ImageContainer  >
          <img src={images.image1}/>
          <img src={images.image2}/>
          <img src={images.image3}/>
          <img src={images.image4}/>
    </ImageContainer>
  )
}

export default Images