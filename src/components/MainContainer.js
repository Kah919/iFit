import React from 'react';
import NavBarContainer from './NavBar/NavBarContainer';
import Hero from './Hero/Hero';
import WelcomeBanner from './Banner/WelcomeBanner';
import JoinUsBanner from './Banner/JoinUsBanner';
import CardGrid from './CardGrid/CardGrid';
import Carousel from './Carousel/Carousel';
import Footer from './Footer/Footer';


export default () => {
    return(
        <div>
            <Hero />
            <WelcomeBanner />
            <CardGrid />
            <Carousel />
            <JoinUsBanner />
            <Footer />
        </div>
    )
}