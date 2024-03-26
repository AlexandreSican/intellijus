import React from 'react'
import Header from '../../header'
import Home from '../home'
import About from '../about'
import Product from '../product'
import { GlobalStyle } from '../../../global'
import Security from '../security'
import Contact from '../contacts'

const LandingPage = () => {
    return (
        <>
            
            <Header />
            <Home />
            <About />
            <Product/>
            <Security/>
            <Contact/>
        </>
    )
}

export default LandingPage