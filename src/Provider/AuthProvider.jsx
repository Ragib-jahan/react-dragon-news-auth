import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);

    const [user, setUser] = useState()

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            console.log("current state change is", currentUser)
        })

        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {user, createUser, login, logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;