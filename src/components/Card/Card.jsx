import React from 'react';
import s from './style.module.scss';



function Card({titre, description, affiche}) {
return (
        <div className={s.container}>
            {/* <img src={affiche} alt={titre} /> */}
            <h2>{titre}</h2>
            {/* <p>{description}</p> */}
        </div>
    );
}

export default Card;