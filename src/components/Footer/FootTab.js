import React from 'react';
import styles from './Footer.module.css';

export default () => {
    return(
        <div>
            <ul className={ styles.flex }>
                <li> <a href="#"> BLOG-VIDEOS </a> /&nbsp; </li>
                <li> <a href="#"> SHOP </a> /&nbsp; </li>
                <li> <a href="#"> COMPANY </a> /&nbsp; </li>
                <li> <a href="#"> PRESS </a> /&nbsp; </li>
                <li> <a href="#"> JOBS </a> /&nbsp; </li>
                <li> <a href="#"> SUPPORT </a> /&nbsp; </li>
                <li> <a href="#"> LEGAL </a> /&nbsp; </li>
                <li> <a href="#"> CONTACT </a> </li>
            </ul>
        </div>
    )
}