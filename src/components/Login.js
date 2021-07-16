import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import {auth} from '../firebase'
import '../App.css'

function Login(){

    const history = useHistory();
    const [useremail, setUserEmail] = useState('')
    const [userpassword, setUserPassword] = useState('')

    const loginuser = event =>{
        event.preventDefault()
        auth.signInWithEmailAndPassword(useremail, userpassword)
        .then((auth) =>{
            history.push('/')
        })
        .catch(e => alert(e.message))
    }

    const signupuser = event =>{
        event.preventDefault()
        auth.createUserWithEmailAndPassword(useremail, userpassword)
        .then((auth) =>{
            history.push('/')
        })
        .catch(e => alert(e.message))
    }

    return(
        <div className="login">
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={useremail} onChange={event => setUserEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={userpassword} onChange={event => setUserPassword(event.target.value)} type="password"/>
                    <button onClick={loginuser} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>By Signing-in, you agree to Our Terms and Conditions</p>
                <button onClick={signupuser} className="login__registerButton">Create your Account</button>
            </div>
        </div>
    )
}
export default Login