import React from 'react';
import styles from './CardGrid.module.css';
import jillian from '../../images/jillians.jpg';
import grand from '../../images/grand.jpg';
import jogging from '../../images/jogging.jpg';
import elliptical from '../../images/elliptical.jpg';
import Card from './Card';

export default () => {
    const deck = [
        { 
            image: jillian,
            title: 'Get Fit with Jilliian Michaels',
            caption: 'weight loss',
        },
        { 
            image: grand,
            title: 'Grand Canyon',
            caption: 'incline trainer',
        },
        { 
            image: jogging,
            title: 'Power Walk',
            caption: 'walking',
        },
        { 
            image: elliptical,
            title: 'Elliptical Weight Loss',
            caption: 'weight loss',
        },
    ]

    const createCards = () => {
        return deck.map(card => <Card image={ card.image } title={ card.title } caption={ card.caption } />)
    }

    return(
        <div className={ styles.grid_container }>
            { createCards() }
        </div>
    )
}