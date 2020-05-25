import React from 'react';
import styles from './Footer.module.css';

export default () => {
    return(
        <div>
            <ul className={ styles.flex }>
                <li><a href="#"> <i class="fa fa-facebook"></i></a></li>
                <li><a href="#"> <i class="fa fa-twitter"></i></a></li>
                <li><a href="#"> <i class="fa fa-google"></i></a></li>
                <li><a href="#"> <i class="fa fa-pinterest"></i></a></li>
                <li><a href="#"> <i class="fa fa-instagram"></i></a></li>
                <li><a href="#"> <i class="fa fa-youtube"></i></a></li>
            </ul>
        </div>
    )
}