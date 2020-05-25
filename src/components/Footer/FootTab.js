import React from 'react';
import styles from './Footer.module.css';

export default () => {
    return(
        <div>
            <ul className={ styles.flex }>
                <li> <a href="#"> BLOG-VIDEOS /&nbsp; </a> </li>
                <li> <a href="#"> SHOP /&nbsp; </a> </li>
                <li> <a href="#"> COMPANY /&nbsp; </a> </li>
                <li> <a href="#"> PRESS /&nbsp; </a> </li>
                <li> <a href="#"> JOBS /&nbsp; </a> </li>
                <li> <a href="#"> SUPPORT /&nbsp; </a> </li>
                <li> <a href="#"> LEGAL /&nbsp; </a> </li>
                <li> <a href="#"> CONTACT </a> </li>
            </ul>
        </div>
    )
}