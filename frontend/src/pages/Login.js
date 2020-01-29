import React, {useState} from 'react';
import logo from '../assets/tindev-logo (1).svg';
import './css/login.css';
import api from '../services/api';

export default function Login({ history }){
    const [username, setUsername] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
        const response = await api.post('/devs', {
            username
        });

        const {_id} = response.data;
        console.log(response);
        history.push(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="logo tindev"></img>
                <input 
                placeholder="Digite seu usuario do GitHub"
                value={username}
                onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">adicionar</button>
            </form>
           
        </div>
        

    );
}