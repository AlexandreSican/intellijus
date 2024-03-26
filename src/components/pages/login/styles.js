import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerSmall = styled.div`
    width: 40vw;
    height: 90vh;
`
export const ContainerLogo = styled.div`
    width: 100%;
    height: 30%;
    overflow-y: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const LogoImage = styled.img`
    width: 800px;
`

export const ContainerInfo = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ContainerInfoForm = styled.form`
    width: 80%;
    height: 100%;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.3));
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 67px;
    gap: 20px;
`
export const InfoFormLabel = styled.label`
    font-size: 40px;
    line-height: 48px;
    overflow-y: hidden;
    height: 80px;
    margin-bottom: -40px;
    letter-spacing: 1px;
`

export const InfoFormInput = styled.input`
    height: 60px;
    width: 100%;
    padding: 20px 20px;
    font-size: 28px;
    border-radius: 16px;
    background-color: rgba(21, 37, 63, 0.3);
    border: none;
    text-decoration: none;
    outline: none;

   margin-bottom: 20px;
`


export const ContainerButton = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonLogin = styled.button`
    background-color: #15253F;
    font-size: 40px;
    line-height: 48px;
    padding: 20px 98px;
    border-radius: 16px;
    color: #c3c3c3;
    font-family: 'Bebas Neue', sans-serif;
`