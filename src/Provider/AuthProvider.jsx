
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const auth = getAuth (app)
export const AuthContext = createContext(null)

    const googleProvider = new GoogleAuthProvider ();
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email,password)=>{
       setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password)=>{
        setLoading(true)
         return signInWithEmailAndPassword(auth,email,password)
     }

     const loginWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
     }
     const loginWithGithub = ()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
     }

    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth , currentUser =>{
            console.log( currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()

        }
    } ,[])

    
  

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        loginWithGoogle,
        loginWithGithub,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;