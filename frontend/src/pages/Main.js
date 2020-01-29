import React, {useEffect,useState} from 'react';
import logo from '../assets/tindev-logo (1).svg';
import like from '../assets/like.svg';
import dislike from '../assets/finger.svg';
import api from '../services/api';
import './css/main.css';
import {Link} from 'react-router-dom';
export default function Main({ match }){

    const [users,setUsers] = useState([]);


    useEffect(() => {
        async function loadUsers(){
            const response = await api.get('/devs',{
                headers:{user: match.params.id, }
            })
            setUsers(response.data);
        }

        loadUsers();
    }, [match.params.id])

    async function handleLike(id){
        await api.post(`/devs/${id}/likes`,null,{
            headers:{user:match.params.id},
        });

        setUsers(users.filter(user => user._id !== id));
    }

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
               
            
        </div>
    )
}