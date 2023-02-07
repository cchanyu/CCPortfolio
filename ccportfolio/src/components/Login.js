import React from 'react';
import { auth } from "../firebase/firebase.config";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function handleSignin(props) {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        const email = result.user.email;
        const name = result.user.displayName;
        localStorage.setItem("email", email);
        localStorage.setItem("name", name);
        props.checkLogged();
    }).catch((error) => {
        console.log("error: ", error);
    });
};

function handleSignout(props) {
    const target = getAuth();
    signOut(target)
    .then((result) => {
        props.checkLogged();
        window.location = '/';
        console.log("result: ", result);
    }).catch((error) => {
        console.log("error: ", error);
    });
};

export default function Login(props) {
    return (
        <div className='about'>
            {props.isLogged ? 
            <button type="submit" className="contact--button" onClick={() => handleSignout(props)}>Logout</button> : 
            <button type="submit" className="contact--button" onClick={() => handleSignin(props)}>Login</button>}
        </div>
    )
}