import React from 'react';
import styles from './WelcomeBanner.module.css';

export default () => {
    return(
        <div className={ styles.welcome_container }>
            <h1> Weight Loss </h1>

            <p> 
                Welcome to the center of it all. The Fitness Shop presents you with hundreds 
                of workout programs designed to guide your weight loss journey 
            </p>
        </div>
    )
}