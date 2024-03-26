import styled, { keyframes } from "styled-components";


// Container com tudo

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;

    @media (max-width: 730px) {
        justify-content: space-around;
        width: 730px;
    }
    @media (max-width: 440px) {
        justify-content: space-around;
        width: 400px;
    }

`

export const ContainerBig = styled.div`
    width: 100vw;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    background-color: ${ props => props.isSticky ? 'rgba(18, 18, 18, 1)' : 'rgba(18, 18, 18, 0)' };
    transition: all ease 0.6s;
    @media (max-width: 730px) {
        justify-content: space-between;
        
    }
`



// LOGO DESIGN
export const LogoBox = styled.div`
    height: 100px;
    width: 88px;
    background-color: ${props => props.isSticky ? 'rgba(21, 37, 63, 0)' : 'rgba(21, 37, 63, 1)'};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all ease 1s;
`

export const LogoContainer = styled.div`
    width: 88px;
    display: flex;
    //background-color: white;
`

// MENU DESIGN
export const MenuContainer = styled.div`
    width: 80%;
    height: 100px;
   // background-color: gray;

   @media (max-width: 730px) {
        display: none;
    }
   
`

export const MenuList = styled.ul`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
    margin: 0 100px 0 0 ;
    gap: 30px;

`
export const MenuItems = styled.li`
    font-size: 20px;
    text-transform: uppercase;
    line-height: 24px;
    overflow-y: hidden;
    letter-spacing: 1px;

    &:hover{
        opacity: .5;
        transition: 0.3s;
    }

`
export const MenuAnchor = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: ${ props => props.isSticky ? '#C3C3C3' : '#181818' };
    transition: all ease 1s;

`

// LOGIN DESIGN

export const LoginContainer = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 440px) {
        width: 70px;

    }
   // background-color: red;
`


export const LoginAnchor = styled.a`
    cursor: pointer;
    text-decoration: none;
    font-size: 30px;
    text-shadow: 2px 0 10px  rgba(0, 0, 0, 0.5) ;
    letter-spacing: 1px;

    color: ${ props => props.isSticky ? '#C3C3C3' : '#181818' };
    transition: all ease 1s;

    &:hover{
        opacity: .5;
        transition: 0.3s;
    }
`