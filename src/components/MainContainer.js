import React from 'react';
import NavBarContainer from './NavBar/NavBarContainer';
import Hero from './Hero/Hero';
import WelcomeBanner from './WelcomeBanner/WelcomeBanner';


export default () => {
    return(
        <div>
            <Hero />
            <WelcomeBanner />
        </div>
    )
}