import styled, { keyframes } from "styled-components";
import img1p from '../../../assets/img1produto.png'
import img2p from '../../../assets/img2produto.png'
import macbook from '../../../assets/macbook.png'
import oneplus from '../../../assets/oneplus.png'

const ButtonAnimation = keyframes`

    0%{
        transform: translateY(0px);
    }

    50%{
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0px);
    }

`

export const ContainerBig = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
    width: 100vw;
    background-color: #c3c3c3;
`

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerText = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
`
export const TextTitle = styled.h1`
    font-size: 64px;
    color: #15253F;
    letter-spacing: 3px;
    line-height: 74px;
    overflow-y: hidden;
`
export const TextDesc = styled.p`
    font-size: 20px;
    color: #15253F;
    line-height: 24px;
    overflow-y: hidden;
    width: 413px;
    margin: 20px 0;
`


export const TextButton = styled.button`
    background-color: #15253f;
    font-size: 32px;
    text-transform: uppercase;
    height: 88px;
    width: 413px;
    padding: 23px;
    color: #C3C3C3;
    border-radius: 16px;
    text-decoration: none;
    cursor: pointer;
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.5);
    font-family: 'Bebas Neue', sans-serif;
    overflow: hidden;

    &:hover{
        animation: ${ButtonAnimation} ease 1s infinite;
    }
`

export const ContainerImage = styled.div`
    width: 60%;
    height: 100%;
    overflow-y: hidden;
    
`

export const ImageSup = styled.div`
    height: 60%;
    width: 100%;
    position: relative;
    
    overflow-y: hidden;

`

export const BigImage = styled.div`
    width: 500px;
    height: 400px;
    position: absolute;
    top: 25%;
    left: 15%;
    z-index: 600;
    background-image: url(${macbook});
    background-repeat: no-repeat;
    background-position: left;
    background-size: cover;
`
export const SmallImage = styled.div`
    width: 220px;
    height: 180px;
    background-image: url(${oneplus});
    background-repeat: no-repeat;
    background-position: left;
    background-size: cover;
    position: absolute;
    top: 55%;
    left: 3%;
    z-index: 800;
`
export const ImageInf = styled.div`
    height: 40%;
    width: 100%;
    display: flex;
    flex-direction: row;

`

export const ImageInfLeft = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
export const ImageInfRight = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Image = styled.div`
    height: 50%;
    width: 45%;
    background-image: url(${props => props.Image = 'img1' ? img1p : img2p});
    background-repeat: no-repeat;
    background-position: left;
    background-size: cover;
    border-radius: 16px;
    
`
export const Description = styled.p`
    font-size: 20px;
    text-align: center;
    line-height: 24px;
    overflow-y: hidden;
`
