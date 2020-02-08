/* importação da biblioteca react - principal biblioteca para 
execução dos serviços front-end dentro do react */
import React from 'react';

//importação da estilização do documento app.js 
import './App.css';

/* importação do arquivo de rotas, responsavel por lidar com as varias
transições de modulos e paginas por assim dizer */
import Route from './routes';

//função principal do app, que retorna as rotas do app
function App() {
  return (
    <Route></Route>
  );
}
//exportação da função que retorna as rotas do aplicativo.
export default App;
