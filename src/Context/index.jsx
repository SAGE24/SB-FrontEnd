import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const SBContext = createContext();

export const SBProvider = ({children}) => {
    const [title, setTitle] = useState('');

    const setToken = (token) => {
        localStorage.removeItem("token-SB")
        localStorage.setItem('token-SB', token)
    }

    const token = localStorage.getItem('token-SB');

    const instanceEntity = (token) => axios.create({
        baseURL: 'http://localhost:5168',
        headers: {
          Authorization: `Bearer ${token}`
        }
    });

    useEffect(() => {
        axios.post('http://localhost:5168/token').then(response => {
            const token = response.data.data['accessToken']
            setToken(token)
        });
    }, [])

    return (
        <SBContext.Provider 
            value={{
                title,
                setTitle,
                token,
                instanceEntity
            }}
        >{children}</SBContext.Provider>
    );
}