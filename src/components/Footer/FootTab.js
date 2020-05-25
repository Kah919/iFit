import React from 'react';
import styles from './Footer.module.css';

export default () => {
    return(
        <div>
            <ul className={ styles.flex }>
                <li> <a href="#"> BLOG-VIDEOS </a> / </li>
                <li> <a href="#"> SHOP </a> / </li>
                <li> <a href="#"> COMPANY </a> / </li>
                <li> <a href="#"> PRESS </a> / </li>
                <li> <a href="#"> JOBS </a> / </li>
                <li> <a href="#"> SUPPORT </a> / </li>
                <li> <a href="#"> LEGAL </a> / </li>
                <li> <a href="#"> CONTACT </a> / </li>
            </ul>
        </div>
    )
}