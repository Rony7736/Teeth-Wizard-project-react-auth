import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile } from "firebase/auth";
import { createContext, useEffect } from "react";
import auth from "../firebase/firebase.config";

export  const authContext = createContext()

const AuthProvider = ({ children }) => {
    // console.log(children);

    const googleProvider = new GoogleAuthProvider();

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
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            

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