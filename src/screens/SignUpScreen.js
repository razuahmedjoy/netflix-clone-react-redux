import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { auth } from '../firebase';
import './SignUpScreen.css';

const SignUpScreen = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if(!email || !password){
            alert("email and password both are required");
            return;
        }
        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((authUser) => {
                console.log(authUser)
            })
            .catch((error) => {
                console.log(error);
            })
        // auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        // .then((authUser)=>{
        //     console.log(authUser);
        // })
        // .catch((error)=>{
        //     console.log(error)
        // })

    }

    const signIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth,emailRef.current.value, passwordRef.current.value)
        .then((authUser)=>{
            console.log(authUser)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>

                <input ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button onClick={signIn} type="submit">Sign In</button>

                <h4>
                    <span className="signupScreen_gray">New to Netflix? </span> <span className="signupScreen_link" onClick={register}>Sign up now.</span>
                </h4>
            </form>

        </div>
    );
};

export default SignUpScreen;