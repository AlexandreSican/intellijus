import styled, { keyframes } from "styled-components";
import bgpomba from '../../../assets/bgpomba.jpg'
import MediumButton from '../../../assets/mediumbutton.png'

//ANIMATIONS 

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

//Container Home

export const Container = styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-image: url(${bgpomba});
    background-repeat: no-repeat;
    background-position: left;
    background-size: cover;
`

export const ContainerBig = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media (max-width: 1280px) {
        max-width: 1024px;
    }
    @media (max-width: 1024px) {
        max-width: 900px;
    }

    @media (max-width: 768px) {
        max-width: 600px;
    }
    @media (max-width: 435px) {
        width: 365px;
    }
`

export const HomeText = styled.div`
    
    width: 50%;
    height: 90%;
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px) {
        width: 100%;
    }

   

`

export const HomeTextTitle = styled.h1`
    color: #15253f;
    font-size: 64px;
    line-height: 77px;
    letter-spacing: 8px;
    overflow-y: hidden;

    @media (max-width: 768px) {
        letter-spacing: 6px;
    }

`

export const HomeTextSubTitle = styled.h2`
    color: #15253f;
    width: 413px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 3px;
`

export const HomeButton = styled.button`
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

    @media (max-width: 435px) {
        width: 350px;
    }

`

export const HomeBlanked = styled.div`
    width: 50%;
    height: 90%;
    @media (max-width: 768px) {
        display: none;
    }
`

export const HomeMore = styled.h1`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const HomeMoreText = styled.h1`
    font-size: 24px;
    margin-bottom: 40px;
`

export const MediumButtonContainer = styled.div`
    width: 90%;
    height: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    
`


