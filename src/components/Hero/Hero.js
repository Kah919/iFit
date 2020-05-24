import React from 'react';
import NavBarContainer from '../NavBar/NavBarContainer';
import styles from './Hero.module.css';
import HeroText from './HeroText';


export default () => {
    return(
        <div className={ styles.hero_container }>
            <NavBarContainer />
            <HeroText />
        </div>
    )
}