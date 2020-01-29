import React from 'react';
import logo from '../assets/tindev-logo (1).svg';
import './login.css';
export default function Login(){
    return (
        <div className="login-container">
            <form>
                <img src={logo} alt="logo tindev"></img>
                <input placeholder="Digite seu usuario do GitHub"/>
                <button type="submit">adicionar</button>
            </form>
           
        </div>
        

    );
}