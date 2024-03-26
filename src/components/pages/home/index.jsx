import React from 'react'
import * as C from './styles'
import MediumButton from '../../../assets/mediumbutton.png'

const Home = () => {
  return (
    <C.Container id='home'>
      <C.ContainerBig>
        <C.HomeText>
          <C.HomeTextTitle>INTELLIJUS <br /> SUA VIDA MAIS FÁCIL</C.HomeTextTitle>
          <C.HomeTextSubTitle>Planejamento e organização <br />com a intellijus tudo se torna possível</C.HomeTextSubTitle>
          <C.HomeButton>conheça nossos planos</C.HomeButton>
        </C.HomeText>
        <C.HomeBlanked></C.HomeBlanked>
        <C.HomeMore>
          <C.HomeMoreText>conheça mais sobre</C.HomeMoreText>
        </C.HomeMore>
      </C.ContainerBig>
      
    </C.Container>
  )
}

export default Home