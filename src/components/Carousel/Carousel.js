import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import styles from './Carousel.module.css';
import squat from '../../images/squat.jpg'; 
import banner2 from '../../images/banner2.jpg'; 


export default () => {

    const startupScreen = (
        <div>
          <img src={ squat } />
        </div>
    );

    return(
        <div className={ styles.carousel_container }>
            <AwesomeSlider 
                bullets={ false } 
                className={ styles.aws_btn }
                startupScreen={startupScreen}
            >
                <div data-src={ squat } />
                <div data-src={ banner2 } />
            </AwesomeSlider>
        </div>
    )
}