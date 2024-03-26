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
    @media (max-width: 1280px) {
        max-width: 1024px ;
    }
    @media (max-width: 1024px) {
        max-width: 738px ;
    }
    @media (max-width: 750px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const ContainerText = styled.div`
    height: 100%;
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    @media (max-width: 740px) {
        width: 100%;
        height: 50%;
    }
`

export const ContainerImages = styled.div`
    height: 100%;
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    position: relative;
    @media (max-width: 740px) {
        width: 100%;
        height: 50%;
    }
`

export const AboutTextTitle = styled.h1`
    font-size: 64px;
    color: #c3c3c3;
    @media (max-width: 740px) {
        margin-top: 130px;
        margin-left: 50px;
    }
    @media (max-width: 330px) {
        margin-left: 15px;
    }
    

`

export const AboutTextDescriptionBig = styled.p`
    font-size: 20px;
    color: #c3c3c3;
    width: 413px;
    @media (max-width: 1280px) {
        width: 100%;
        
    }
    @media (max-width: 740px) {
        display: none;
    }

`
export const AboutTextDescriptionSmall = styled.p`
    font-size: 20px;
    color: #c3c3c3;
    width: 413px;
    display: none;
    @media (max-width: 1280px) {
        width: 100%;
    }
    @media (max-width: 740px) {
        display: block;
        width: 278px;
        margin-left: 50px;
    }
    @media (max-width: 330px) {
        margin-left: 15px;
    }
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
    @media (max-width: 1024px) {
        width: 200px;
        height: 200px;
        
    }
    @media (max-width: 740px) {
        width: 150px;
        height: 150px;
        top: 35%;
        left: 0;
    }
    @media (max-width: 440px) {
        width: 150px;
        height: 150px;
        top: 15%;
        left: 5%;
    }
    @media (max-width: 330px) {
        width: 120px;
        height: 120px;
        top: 15%;
        left: 5%;
        z-index: 999;
    }
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
    @media (max-width: 1024px) {
        width: 200px;
        height: 200px;
        
    }
    @media (max-width: 740px) {
        width: 150px;
        height: 150px;
        top: 15%;
        left: 25%;
    }
    @media (max-width: 440px) {
        width: 150px;
        height: 150px;
        top: 35%;
        left: 32%;
        z-index: 999;
    }
    @media (max-width: 330px) {
        width: 120px;
        height: 120px;
        top: 35%;
        left: 32%;
        z-index: 999;
    }
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
    @media (max-width: 1024px) {
        width: 200px;
        height: 200px;
    }
    @media (max-width: 740px) {
        width: 150px;
        height: 150px;
        top: 35%;
        left: 60%;
    }
    @media (max-width: 440px) {
        width: 150px;
        height: 150px;
        top: 15%;
        left: 60%;
    }
    @media (max-width: 330px) {
        width: 120px;
        height: 120px;
        top: 15%;
        left: 60%;
    }
`
