import React from 'react';
import styles from './Footer.module.css';
import LeftFooter from './LeftFooter';
import RightFooter from './RightFooter';


export default () => {
    return(
        <div className={ styles.foot_container }>
            <LeftFooter />
            <RightFooter />
        </div>
    )
}