import React from 'react';
import styles from './Footer.module.css';

export default () => {
    return(
        <form action="" className={ styles.language_picker_form} >
            <label for="language-picker-select"> Language: </label>

            <select name="language-picker-select" id="language-picker-select">
            <option lang="de" value="deutsch">Deutsch</option>
            <option lang="en" value="english" selected>English</option>
            <option lang="fr" value="francais">Français</option>
            <option lang="it" value="italiano">Italiano</option>
            </select>
        </form>
    )
}