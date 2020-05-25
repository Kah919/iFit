import React from 'react';
import Button from '../Button/Button';
import styles from './Banner.module.css';

export default () => {
    return(
        <div className={ styles.join_us_container }>
            <h1> Get started on your weight loss journey. </h1>
            <div className={ styles.btn_container }>
                <Button  text="JOIN IFIT TODAY"/>
            </div>
        </div>
    )
}