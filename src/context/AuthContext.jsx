import React from 'react'
import { createContext, useState, useEffect } from 'react'
import {serviceLogout} from '../services/services'
export const AuthContext = createContext();

export  function AuthProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser]= useState(null);

    useEffect(()=>{
        fetch('https://myportfolio-backend-zxqb.onrender.com/checkauth', {
            method: 'GET',
            credentials: 'include' //send cookies
        })
        .then((res)=>res.json())
        .then((data)=>{
            setIsLoggedIn(data.loggedIn);
            if (data.loggedIn){
                setUser(data.user);
            }
        })
    }, [])

    const handleLogout = async () => {
        const result = await serviceLogout();
            setIsLoggedIn(false);
            setUser(null);
        console.log('logggedout', result)

    }

  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, user, handleLogout}}>
        {children}      
    </AuthContext.Provider>
  )
}
