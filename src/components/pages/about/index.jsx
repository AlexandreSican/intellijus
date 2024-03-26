import React from 'react'
import * as C from './styles'

const About = () => {
  return (
    <C.ContainerBig id='about'>
      <C.Container>
        <C.ContainerText>
          <C.AboutTextTitle>Sobre</C.AboutTextTitle>
          <C.AboutTextDescriptionBig>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</C.AboutTextDescriptionBig>
          <C.AboutTextDescriptionSmall>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and </C.AboutTextDescriptionSmall>
        </C.ContainerText>
        <C.ContainerImages>
          <C.ImageOne></C.ImageOne>
          <C.ImageTwo></C.ImageTwo>
          <C.ImageThree></C.ImageThree>
        </C.ContainerImages>
      </C.Container>
    </C.ContainerBig>
  )
}

export default About