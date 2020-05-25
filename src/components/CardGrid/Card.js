import React from 'react';
import styles from './CardGrid.module.css';
import Fade from 'react-reveal/Fade';

export default props => {
    const { image, title, caption } = props;

    return(
        <Fade top>
            <div className={ styles.card } percent={10}>
                <img src={ image }></img>
                <h4> { title } </h4>
                <p> { caption } </p>
            </div>
        </Fade>
    )
}