import React from 'react';
import styles from './Footer.module.css';
import Language from './Language';

export default () => {
    return(
        <div className={ styles.right_foot }>
            <p> COPYRIGHT© iFit.com. Allrights reserved. </p>
            <Language />
        </div>
    )
}