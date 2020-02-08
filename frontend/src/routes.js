/* Importação da biblioteca react - principal biblioteca para 
execução dos serviços front-end dentro do react */
import React from 'react';

/* 
Ultilizando destructering para importar da biblioteca react-router-dom 
os modulos BrowserRouter e Route, usados para mostrar para o browser
um conjunto de rotas e mostrar ao browser o caminho dessas rotas 
atraves do atribb path.
*/
import {BrowserRouter, Route } from 'react-router-dom';

//Importando o componente login da aplicação, que sera usado na rota
import Login from './pages/Login';

//Importando o componente main da aplicação, que sera usado na rota
import Main from './pages/Main';

/* Exportando a função principal de rotas que retorna os componentes
BrowserRouter e routes, responsaveis por listar todas as rotas e 
mostrar o caminho até elas, respectivamente. */
export default function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login}></Route>
            <Route path="/dev/:id"  component={Main}></Route>
        </BrowserRouter>
    )
}
