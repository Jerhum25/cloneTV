import React from 'react';
import s from './style.module.scss';
import Cards from '../../components/Cards/Cards';

function Accueil(props) {
    return (
        <div className={s.container}>
            <h1>Accueil</h1>
            <Cards/>
        </div>
    );
}

export default Accueil;