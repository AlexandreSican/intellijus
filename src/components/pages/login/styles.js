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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 1440px) {
        width: 60%;
        height: 100%;
        
    }
    @media (max-width: 1024px) {
        width: 70%;
        height: 100%;
        
    }
     @media (max-width: 740px) {
        width: 100%;
        
    }
    @media (max-width: 440px) {
        width: 100%;
        
    }
    @media (max-width: 340px) {
        width: 100%;
        
    }
    /*@media (max-width: 330px) {
        width: 120px;
        height: 120px;
        top: 15%;
        left: 5%;
        z-index: 999;
    } */
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

    @media (max-width: 440px) {
        width: 90%;
        
    }
    @media (max-width: 340px) {
        width: 90%;
        
    }

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
    padding: 30px;
    gap: 20px;
    @media (max-width: 440px) {
        width: 100%;
        
    }
    @media (max-width: 340px) {
        width: 100%;
        
    }
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

   @media (max-width: 440px) {
        width: 100%;
        font-size: 24px;
    }
    @media (max-width: 340px) {
        width: 100%;
        font-size: 22px;
    }
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