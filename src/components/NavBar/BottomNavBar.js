import React from 'react';
import styles from './NavBar.module.css';

export default () => {
    return(
        <nav className={ styles.bot_nav_container }>
            <ul>
                <li><a href="#"> OVERVIEW </a></li>
                <li><a href="#"> FEATURES </a></li>
                <li><a href="#"> PROGRAMS </a></li>
                <li><a href="#"> TRAINING </a></li>
                <li><a href="#"> <i class="fa fa-search"></i> </a></li>
            </ul>
        </nav>
    )
}