import React from 'react';
import './card.styles.css';

export const Card = (props) => {
    const {id,name,email} = props.card
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={name}/>
            <h2>{name}</h2>
            <h2>{email}</h2>
        </div>
    )
}
