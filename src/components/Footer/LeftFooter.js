import React from 'react';
import styles from './Footer.module.css';
import FootTab from './FootTab';
import FootSocial from './FootSocial';


export default () => {
    return(
        <div className={ styles.left_foot }>
            <FootTab />
            <FootSocial />
        </div>
    )
}