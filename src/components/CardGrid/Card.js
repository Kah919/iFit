import React from 'react';
import styles from './CardGrid.module.css';

export default props => {
    const { image, title, caption } = props;
    return(
        <div className={ styles.card }>
            <img src={ image }></img>
            <h4> { title } </h4>
            <h5> { caption } </h5>
        </div>
    )
}