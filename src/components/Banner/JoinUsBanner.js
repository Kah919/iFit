import React from 'react';
import Button from '../Button/Button';
import styles from './Banner.module.css';
// import Button from '@material-ui/core/Button';


export default () => {
    return(
        <div className={ styles.join_us_container }>
            <h1> Get started on your weight loss journey. </h1>
            <Button  text="JOIN IFIT TODAY"/>
        </div>
    )
}