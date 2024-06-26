import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import './Layout.module.css'

const Layout = ({children}) =>{
    return (
        <div>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;