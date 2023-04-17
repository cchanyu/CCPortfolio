import React, { useState } from 'react';
import { auth } from "../firebase/firebase.config";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import GoogleIcon from '../icon/google.svg';

export default function Login() {
    const [ isLogged ] = useState(JSON.parse(localStorage.getItem('isLogged')));

    function handleSignin() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((result) => {
            const email = result.user.email;
            const name = result.user.displayName;
            localStorage.setItem("isLogged", true);
            localStorage.setItem("email", email);
            localStorage.setItem("name", name);
            window.location = '/CCPortfolio/home';
        }).catch((error) => {
            console.log("error: ", error);
        });
    };
    
    function handleSignout() {
        const target = getAuth();
        signOut(target).then((result) => {
            localStorage.setItem("isLogged", false);
            localStorage.setItem("email", '');
            localStorage.setItem("name", '');
            window.location = '/CCPortfolio/home';
            console.log("result: ", result);
        }).catch((error) => {
            console.log("error: ", error);
        });
    };

    return (
        <div className='about'>
            {isLogged ? 
            <button type="submit" className="contact-button" onClick={() => handleSignout()}>Sign out</button> : 
            <div className='container'>
                <div className='contact--text'>Please select a sign-in method:</div>
                <button type="submit" className="login-button" onClick={() => handleSignin()}>
                    <img className="contact--icon" src={GoogleIcon} alt="G" />    
                    <div className='contact--text'>Sign in with Google</div>
                </button>
            </div>}
        </div>
    )
}