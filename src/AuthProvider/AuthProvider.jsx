import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export  const authContext = createContext()

const AuthProvider = ({ children }) => {
    // console.log(children);

    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null)

    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const manageProfile = (name, image) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }

    const handleLogout = ()=> {
        return signOut(auth)
    }

    const authInfo ={
        handleRegister,
        handleLogin,
        handleGoogleLogin,
        handleLogout,
        manageProfile,
        user,
        setUser,
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            if(currentUser){
                setUser(currentUser)
            }
            else{
                setUser(null)
            }
            

            return ()=> {
                unsubscribe()
            }
        })
    },[])
 

    return (
        <div>
            <authContext.Provider value={authInfo}>{children}</authContext.Provider>
        </div>
    );
};

export default AuthProvider;