import React from 'react';
<<<<<<< HEAD
import './styles.css';

function DevItem({ dev }) {
    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name}/>
=======

import './styles.css';

function DevItem({ dev }) {
    return(
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
>>>>>>> ed960398d048529076aa95f600dedf6ae43918d9
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no GitHub</a>
        </li>
<<<<<<< HEAD
    )
=======
    );
>>>>>>> ed960398d048529076aa95f600dedf6ae43918d9
}

export default DevItem;
