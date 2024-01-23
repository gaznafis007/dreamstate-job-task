import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import { app } from "../../firebase/firebase.config";

const AuthContext = createContext()
const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider()
// eslint-disable-next-line react/prop-types


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState()
    const signup = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email, password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    const getProfile = (displayName)=>{
        return updateProfile(auth.currentUser, {displayName})
    }
    const googleLogin = ()=>{
        return signInWithPopup(auth, googleAuthProvider)
    }
    const authInfo = {
        signup,
        signIn,
        getProfile,
        googleLogin,
        logOut,
        user,
        loading
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth.currentUser, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=> unsubscribe()
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;