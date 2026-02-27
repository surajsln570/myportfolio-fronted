import React from 'react'
import { createContext, useState, useEffect } from 'react'
import {serviceLogout} from '../services/services'
import { serverUrl } from '../services/services';
export const AuthContext = createContext();

export  function AuthProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser]= useState(null);
    const [id, setId] = useState(null);
    const getUser = () => {
        fetch(`${serverUrl}/checkauth`, {
            method: 'GET',
            credentials: 'include'
        })
        .then((res)=>res.json())
        .then((data)=>{
            setIsLoggedIn(data.loggedIn);
            if (data.loggedIn){
                setUser(data.user);
            } else{
                setUser(null)
            }
        })
    }

    useEffect(()=>{
        getUser();
    }, [])

    const handleLogout = async () => {
        const result = await serviceLogout();
        console.log('result', result)
        if(result.success){
           await getUser()
        }
    }

  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, id, setId, getUser, user, handleLogout}}>
        {children}      
    </AuthContext.Provider>
  )
}
