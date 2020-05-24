import React from 'react';
import NavBarContainer from './NavBar/NavBarContainer';
import Hero from './Hero/Hero';
import WelcomeBanner from './WelcomeBanner/WelcomeBanner';
import CardGrid from './CardGrid/CardGrid';
import Carousel from './Carousel/Carousel';


export default () => {
    return(
        <div>
            <Hero />
            <WelcomeBanner />
            <CardGrid />
            <Carousel />
        </div>
    )
}