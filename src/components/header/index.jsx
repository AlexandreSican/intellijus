import React, { useEffect, useState } from 'react'
import * as C from '../header/styles'
import Icon from '../../assets/logo'
import { Link } from 'react-router-dom';

const Header = () => {

    const [isSticky, setIsSticky] = useState(false);
    const [menuHeight, setMenuHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        setMenuHeight(document.getElementById('menu').offsetHeight);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <C.ContainerBig id='menu' isSticky={isSticky}>
            <C.Container id='menu' isSticky={isSticky}>
                <C.LogoContainer>
                    <C.LogoBox isSticky={isSticky}>
                        <h1>U</h1>
                    </C.LogoBox>
                </C.LogoContainer>
                <C.MenuContainer>
                    <C.MenuList isSticky={isSticky}>
                        <C.MenuAnchor href='#home' isSticky={isSticky}><C.MenuItems>Home</C.MenuItems></C.MenuAnchor>
                        <C.MenuAnchor href='#about' isSticky={isSticky}><C.MenuItems>Sobre</C.MenuItems></C.MenuAnchor>
                        <C.MenuAnchor href='#product' isSticky={isSticky}><C.MenuItems>Produto</C.MenuItems></C.MenuAnchor>
                        <C.MenuAnchor href='#security' isSticky={isSticky}><C.MenuItems>Segurança</C.MenuItems></C.MenuAnchor>
                        <C.MenuAnchor href='#contacts' isSticky={isSticky}><C.MenuItems>Contato</C.MenuItems></C.MenuAnchor>
                    </C.MenuList>
                </C.MenuContainer>
                <C.LoginContainer>
                    <Link to='/login'><C.LoginAnchor isSticky={isSticky}>Login</C.LoginAnchor></Link>
                </C.LoginContainer>
            </C.Container>
        </C.ContainerBig>
    )
}

export default Header