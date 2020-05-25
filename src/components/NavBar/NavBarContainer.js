import React from 'react';
import TopNavBar from './TopNavBar';
import BottomNavBar from './BottomNavBar';
import styles from './NavBar.module.css';

export default () => {
    return(
        <div className={ styles.navbar_container }>
            <TopNavBar />
            <BottomNavBar />
        </div>
    )
}