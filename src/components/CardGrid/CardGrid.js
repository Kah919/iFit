import React from 'react';
import styles from './CardGrid.module.css';
import Card from './Card';
import deck from './Deck';
import Button from '../Button/Button';

export default () => {

    const createCards = () => {
        const data = deck()
        return data.map(card => <Card image={ card.image } title={ card.title } caption={ card.caption } />)
    }

    return(
        <div className={ styles.parent_container }>
            <div className={ styles.grid_container }>
                { createCards() }
            </div>

            <div className={ styles.btn_container }>
                <Button text="View More" />
            </div>
        </div>
    )
}