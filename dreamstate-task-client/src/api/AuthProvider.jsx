import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { app } from '../firebase/firebase.config';


export const AuthContext = createContext()
const googleAuthProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true);
    const [authError,setAuthError] = useState()
    const auth = getAuth(app);
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogIn = () => {
        return signInWithPopup(auth, googleAuthProvider)
    }
    const getProfile = (displayName) => {
        return updateProfile(auth.currentUser, {displayName})
    }
    const logOut = () => {
        return signOut (auth)
    }
    const value = {
        user,
        loading,
        signUp,
        signIn,
        googleLogIn,
        getProfile,
        logOut,
        authError,
        setAuthError
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    },[])
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;