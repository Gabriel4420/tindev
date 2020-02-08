/* importação da biblioteca react - principal biblioteca para 
execução dos serviços front-end dentro do react */
import React from 'react';

/* Importando a biblioteca que permite uma comunicação com a DOM do 
navegador. */
import ReactDOM from 'react-dom';
// importando a principal camada de rota do app 
import App from './App';

/* Utilizando o reactDOM, para renderizar a rota do componente App,
e apartir disso, no HTML, é chamado o metodo GEBI, que contem o 
id = root. obs.: root - do inglês "Raiz" */
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//GEBI >> getElementById();