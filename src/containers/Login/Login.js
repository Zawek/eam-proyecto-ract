import React, { Component } from 'react'

import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfing from '../../firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfing);

class Login extends Component{
    render(){
        const { user, signOut, signInWithGoogle} = this.props;
        
        return(
            <div>
                {user ? <p>Hola, {user.displayName}</p> : <p>Inicie Sesion.</p>}

                {user ? (
                    <button onClick ={signOut}>Cerrar Sesión</button>
                ) : (
                    <button onClick={signInWithGoogle}> Ingresa con Google </button>
                ) }
            </div>
        );
    }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider()
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth
})(Login);