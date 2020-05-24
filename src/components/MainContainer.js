import React from 'react';
import NavBarContainer from './NavBar/NavBarContainer';
import Hero from './Hero/Hero';
import WelcomeBanner from './WelcomeBanner/WelcomeBanner';
import CardGrid from './CardGrid/CardGrid';


export default () => {
    return(
        <div>
            <Hero />
            <WelcomeBanner />
            <CardGrid />
        </div>
    )
}