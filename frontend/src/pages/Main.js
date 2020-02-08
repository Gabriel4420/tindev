//Importações de bibliotecas e dependencias do projeto
import React, {useEffect,useState} from 'react';
import io from 'socket.io-client';
import logo from '../assets/tindev-logo (1).svg';
import like from '../assets/like.svg';
import dislike from '../assets/finger.svg';
import api from '../services/api';
import './css/main.css';
import {Link} from 'react-router-dom';
import itsamatch from '../assets/its a match2.png';

/* Exportação padrão da função Main, que passa o objeto match, como 
parâmetro */
export default function Main({ match }){
//criação de estados states
    const [users,setUsers] = useState([]);
    const [matchDev,setMatchDev] = useState(null);
//Realiza uma chamada a api para requisitar o id do dev
    useEffect(() => {
        async function loadUsers(){
            const response = await api.get('/devs',{
                headers:{user: match.params.id, }
            })
            setUsers(response.data);
        }

        loadUsers();
    }, [match.params.id]);

//Serve para se conectar ao webSocket 

    useEffect(()=>{
        const socket = io('http://localhost:3333',{
            query:{user:match.params.id}
        });

        /* setTimeout(() =>{
            socket.emit('hello')
        },3000); */
        socket.on('match', dev => {
            // console.log(dev)
            setMatchDev(dev);
        })
    },[match.params.id]);


// função para dar like no usuario
    async function handleLike(id){
        await api.post(`/devs/${id}/likes`,null,{
            headers:{user:match.params.id},
        });

        setUsers(users.filter(user => user._id !== id));
    }
// função para dar dislike no usuario
    async function handleDislike(id){
        await api.post(`/devs/${id}/deslikes`,null,{
            headers:{user:match.params.id},
        });

        setUsers(users.filter(user => user._id !== id));
    }


    return (
        <div className="main-container">
        <Link to='/'>
            <img src={logo} alt="logo tindev" id="logo"></img>
            </Link>
                { users.length > 0 ? (
                    <ul>
                    {users.map(user => (
                        <li key={user._id}>
                        <img src={user.avatar} alt={user.name}></img>
                        <footer>
                            <strong>{user.name}</strong>
                            <p>{user.bio}</p>
                        
                        </footer>
    
                        <div className="buttons">
                            <button type="button" id="dislike" onClick = {() => handleDislike(user._id)}>
                                <img src={dislike} alt="dislike" id="dislike"></img>
                            </button>
                            <button type="button" id="like" onClick = {() => handleLike(user._id)}>
                                <img src={like} alt="like" id="like"></img>
                            </button>
                            
                        
                        </div>
                        
                    
                    </li>
                    ) )}
                    </ul>
                ) : (
                    <div className="empty">Acabou :( </div>
                ) }
               
            { matchDev && (
                <div className="match-container">
                    <img className="match-image" src={itsamatch} alt="imagem match"></img>
                    
                    <img className="avatar" src={matchDev.avatar} alt="match"></img>
                    <strong>{matchDev.name}</strong>
                    <p>{matchDev.bio}</p>
                    <button type="button" onClick={() => setMatchDev(null)}>sair</button>
                </div>
            ) }
        </div>
    )
}