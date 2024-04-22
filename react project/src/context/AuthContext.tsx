import { createContext, useContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
   
} from "firebase/auth";

import { auth } from "../firebase";



const UserContext = createContext<undefined>(undefined);


// Initialize Firebase auth


export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [user, setUser] = useState({})

    const createUser = (email:string, password:string) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email:string, password:string) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser);
        })

        return () => {
            unsubscribe();
        }
    },[])

    return (
        <UserContext.Provider value ={{ createUser, user, logOut, signIn }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth =()=> {
    return useContext(UserContext)
}