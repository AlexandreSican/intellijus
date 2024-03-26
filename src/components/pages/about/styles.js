import styled from "styled-components";
import img1 from '../../../assets/img1sobre.png'
import img2 from '../../../assets/img2sobre.png'
import img3 from '../../../assets/img3sobre.png'

export const ContainerBig = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
    width: 100vw;
    background-color: #15253F;
    
`

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 100%;
    display: flex;
`

export const ContainerText = styled.div`
    height: 100%;
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`

export const ContainerImages = styled.div`
    height: 100%;
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    position: relative;
`

export const AboutTextTitle = styled.h1`
    font-size: 64px;
    color: #c3c3c3;

`

export const AboutTextDescription = styled.p`
    font-size: 20px;
    color: #c3c3c3;
    width: 413px;
`

export const ImageOne = styled.div`
    width: 305px;
    height: 305px;
    position: absolute;
    top: 35%;
    left: 10%;
    z-index: 800;
    border-radius: 16px;
    background-image: url(${img1});
    background-repeat: no-repeat;
    background-position: left;
    background-size: cover;
`
export const ImageTwo = styled.div`
    width: 305px;
    height: 305px;
    position: absolute;
    top: 20%;
    left: 35%;
    z-index: 700;
    border-radius: 16px;
    background-image: url(${img2});
    background-repeat: no-repeat;
    background-position: left;
    background-size: cover;
`
export const ImageThree = styled.div`
    width: 305px;
    height: 305px;
    position: absolute;
    top: 45%;
    left: 60%;
    z-index: 600;
    border-radius: 16px;
    background-image: url(${img3});
    background-repeat: no-repeat;
    background-position: left;
    background-size: cover;
`
