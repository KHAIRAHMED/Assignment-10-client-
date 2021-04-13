import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './fairbase.config';

const Login = () => {
    firebase.initializeApp(firebaseConfig);
    const handleGoogleSignIn=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
  
  }).catch((error) => {


  })
    }
    return (
        <div>
      
            <button onClick={handleGoogleSignIn}> Google Log In</button>
        </div>
    );
};

export default Login;