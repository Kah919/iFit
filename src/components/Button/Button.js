import React from 'react';
import styles from './Button.module.css';

export default props => {
    return(
        <button>
            { props.text }
        </button>
    )
}