import React from 'react';
import styles from './Hero.module.css';


export default () => {
    return(
        <div className={ styles.text_container }>
            <h1> WORKING OUT HAS NEVER BEEN SO FUN </h1>
            <p>
                Welcome to the center of it all. The Fitness Shop 
                presents you with hundreds of workout programs designed 
                to guide your weight loss journey.
            </p>
        </div>
    )
}