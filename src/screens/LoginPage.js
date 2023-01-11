import React, { useState } from 'react'
import './LoginPage.css'
import SignUpScreen from './SignUpScreen';

function LoginPage() {

  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img className="loginScreen_logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />

        <button className="loginScreen_button" onClick={() => setSignIn(true)}>Sign In</button>
        <div className="loginScreen_gradient">

        </div>


      </div>
      <div className="loginScreen_body">

        {
          signIn ? <SignUpScreen />
            :
            <>
              <h1 className="LoginScreen_title">Unlimited films, TV programmes and more.</h1>
              <h2 className="LoginScreen_subtitle">Watch anywhere. Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your membership.
              </h3>
              <div className="loginScreen_input">
                <form action="">
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="loginScreen_getStarted">GET STARTED</button>
                </form>
              </div>
            </>
        }



      </div>
    </div>
  )
}

export default LoginPage