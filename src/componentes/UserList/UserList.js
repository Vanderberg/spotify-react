import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:5103/api/users');
    //             console.log('Buscou na API:', response.data.users);

    //             // Verifica se a resposta é um array ou objeto e converte para array
    //             // const userList = Array.isArray(response.data) ? response.data.users : [response.data.users];

    //             setUsers(response.data.users);
    //             console.log('Usuários definidos:', response.data.users);
    //         } catch (error) {
    //             console.error('Erro ao buscar dados da API:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    const getUsers = async () => {
        await axios.get("http://localhost:5103/api/users")
            .then((response) => {
                console.log(response.data.users)
                setUsers(response.data.users)
            }).catch((err) => {
                console.error('Erro ao buscar dados da API:', err);
            });

    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div>
            <h2>Lista de Usuários</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id * 10}>id: {user.id} - Nome: {user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;

