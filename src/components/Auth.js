import React, { useEffect, useState} from 'react'
import { app } from '../../firebase'

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);
  
    useEffect(() => {
      const unsubscribe = app.auth().onAuthStateChanged((user) => {
        setCurrentUser(user)
        setPending(false)
      });
      return () => unsubscribe;
    }, []);
    
  
    if(pending){
      return <>Loading...</>
    }

    const value = {
      currentUser
    }
  
    return (
      <AuthContext.Provider
        value={value}>
        {children}
      </AuthContext.Provider>
    );
  };
