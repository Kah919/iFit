import React from 'react';

export default props => {
    const { image, title, caption } = props;
    return(
        <div>
            <img src={ image }></img>
            <h2> { title } </h2>
            <h1> { caption } </h1>
        </div>
    )
}