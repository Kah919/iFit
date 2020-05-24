import React from 'react';
import styles from './Hero.module.css';


export default () => {
    return(
        <div className={ styles.text_container }>
            <div> 
                <span>WORKING OUT</span>
                <br></br>
                <span>HAS NEVER BEEN SO FUN</span>
            </div>

            <p>
                Welcome to the center of it all. The Fitness Shop 
                presents you with hundreds of workout programs designed 
                to guide your weight loss journey.
            </p>
        </div>
    )
}