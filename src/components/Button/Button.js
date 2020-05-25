import React from 'react';
import styles from './Button.module.css';
import cx from 'classnames';

export default props => {
    return(
        <button className={ cx(styles.btn, styles.btn_pop) }>
            { props.text }
        </button>
    )
}