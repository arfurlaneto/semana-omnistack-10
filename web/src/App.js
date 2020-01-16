import React, { useState, useEffect } from 'react';
import api from './services/api'

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000
            }
        );
    }, []);

    useEffect(() => {
        // 01:27:30
    }, []);

    async function handleAddDev(e) {
        e.preventDefault();

        const response = await api.post('/devs', {
            github_username,
            techs,
            latitude,
            longitude
        });

        setGithubUsername('');
        setTechs('');
    }

    return (
        <div id="app">
        <aside>
            <strong>Cadastrar</strong>
            <form onSubmit={handleAddDev}>
            <div className="input-block">
                <label htmlFor="github_username">Usuário do Github</label>
                <input
                    type="text"
                    name="github_username"
                    id="github_username"
                    required
                    value={github_username}
                    onChange={e => setGithubUsername(e.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input
                    type="text"
                    name="techs"
                    id="techs"
                    required
                    value={techs}
                    onChange={e => setTechs(e.target.value)}
                />
            </div>

            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="latitude">Latitude</label>
                    <input
                        type="number"
                        name="latitude"
                        id="latitude"
                        required 
                        value={latitude}
                        onChange={e => setLatitude(e.target.value)}
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input
                        type="number"
                        name="longitude"
                        id="longitude"
                        required
                        value={longitude}
                        onChange={e => setLongitude(e.target.value)}
                    />
                </div>
            </div>

            <button type="submit">Salvar</button>
            </form>
        </aside>

        <main>
            <ul>
                <li className="dev-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/3330854?s=460&v=4" alt="Antonio Furlaneto"/>
                        <div className="user-info">
                            <strong>Diego Fernandes</strong>
                            <span>ReactJS, React Native, Node.js</span>
                        </div>
                    </header>
                    <p>Just a random programmer.</p>
                    <a href="https://github.com/arfurlaneto">Acessar perfil no GitHub</a>
                </li>

                <li className="dev-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/3330854?s=460&v=4" alt="Antonio Furlaneto"/>
                        <div className="user-info">
                            <strong>Diego Fernandes</strong>
                            <span>ReactJS, React Native, Node.js</span>
                        </div>
                    </header>
                    <p>Just a random programmer.</p>
                    <a href="https://github.com/arfurlaneto">Acessar perfil no GitHub</a>
                </li>

                <li className="dev-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/3330854?s=460&v=4" alt="Antonio Furlaneto"/>
                        <div className="user-info">
                            <strong>Diego Fernandes</strong>
                            <span>ReactJS, React Native, Node.js</span>
                        </div>
                    </header>
                    <p>Just a random programmer.</p>
                    <a href="https://github.com/arfurlaneto">Acessar perfil no GitHub</a>
                </li>

                <li className="dev-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/3330854?s=460&v=4" alt="Antonio Furlaneto"/>
                        <div className="user-info">
                            <strong>Diego Fernandes</strong>
                            <span>ReactJS, React Native, Node.js</span>
                        </div>
                    </header>
                    <p>Just a random programmer.</p>
                    <a href="https://github.com/arfurlaneto">Acessar perfil no GitHub</a>
                </li>
            </ul>
        </main>
        </div>
    );
}

export default App;
