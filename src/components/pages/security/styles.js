import styled from "styled-components";
import img1 from '../../../assets/img1produto.png'
import img2 from '../../../assets/img2produto.png'
import img3 from '../../../assets/img3seguranca.png'
import img4 from '../../../assets/img4seguranca.png'

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ContainerBig = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
    width: 100vw;
    background: linear-gradient(#15253f, #181818);
`

export const ContainerImage = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
`
export const SupImage = styled.div`
    width: 100%;
    height: 36%;
    display: flex;
    justify-content: center;
    align-items: end;
`
export const MidImage = styled.div`
    width: 100%;
    height: 32%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const InfImage = styled.div`
    width: 100%;
    height: 32%;
    display: flex;
    justify-content: center;
    align-items: start;
`

export const ImageSecurity = styled.img`
    width: 196px;
    height: 200px;
    border-radius: 16px;
`

export const ContainerText = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const TextTitle = styled.h1`
    color: #c3c3c3;
    font-size: 64px;
`
export const TextDesc= styled.p`
    color: #c3c3c3;
    font-size: 20px;
    width: 413px;
`