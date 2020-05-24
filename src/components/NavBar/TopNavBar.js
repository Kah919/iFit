import React from 'react';
import styles from './NavBar.module.css';

export default () => {
    return(
        <nav className={ styles.top_nav_container }>
            <ul>
                <li><a href="#"> LOGIN </a></li>
                <li><a href="#"> SIGN UP </a></li>
                <li><a href="#"> MENU <i class="fa fa-bars"></i></a></li>
            </ul>
        </nav>
    )
}