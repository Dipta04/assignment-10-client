import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.config';
import { useEffect } from 'react';
import '../Theme/Theme.css'


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    
     const [theme,setTheme] = useState('light');

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const providerLogin = (provider) =>{
            setLoading(true);
            return signInWithPopup(auth,provider);
    }
    
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }
  
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('inside auth state changed',currentUser);
            if(currentUser == null || currentUser.uid)
            {
                setUser(currentUser);
            }
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])
  
    // theme change
    const toggleTheme= () =>{
        if(theme === 'light')
        {
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
    }
    useEffect(()=>{
            document.body.className = theme;
    },[theme])

    const authInfo = {user,loading,providerLogin,createUser,signIn,logOut,setLoading, toggleTheme,theme};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;