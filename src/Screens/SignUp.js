import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { handleRequest } from '../Service';
import { checkSignUpCredentials } from '../utilities';
import './styles/LoginStyle.css'

const Login = (props) => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');






    const handleSignUp= async () => {
        if (name.length === 0 || email.length === 0  || password.length === 0  || confirmPassword.length === 0  || phoneNumber.length === 0) {
              return  alert('All Fields are required');
        }
        const { error, message, type } = checkSignUpCredentials(name, email, password, confirmPassword, phoneNumber)
        console.log(error,message,type)
        if (error) {
            if (type === 'user') {
                setNameError(message)
            } else if (type === 'email') {
                setEmailError(message)
            } else if (type === 'password') {
                setPasswordError(message)
            } else if (type === 'confirmpassword') {
                setConfirmPasswordError(error)
            } else setPhoneNumberError(message)
        } else {
            console.log("DATA")
            const data = {
                name,
                email,
                password,
                phoneNumber,
                role: 'user'
            }
            const signupResponse = await handleRequest('POST', 'signup', data);
            console.log("DATA", signupResponse);
            if(signupResponse.status === 200){
                alert('User Signed up Successfully')
            }else{
                alert(signupResponse.message)
            };
            setName('');
            setPhoneNumber('');
            setPassword('');
            setConfirmPassword('');
            setEmail('')
        }


    }

    const handleloginNavigate = () => {
        navigate('/Login')
    }


    return (
        <section className="login">
            <div className="loginContainer">
                <label>Name</label>
                <input type="text" placeholder="eg ali" value={name} onChange={(e) => setName(e.target.value)} autoFocus required />
               {nameError &&  <p className="errorMsg">{nameError}</p>}
               
                <label>Email Address</label>
                <input type="text" placeholder="abc@xyx.com" value={email} onChange={(e) => setEmail(e.target.value)} autoFocus required />
               {emailError &&  <p className="errorMsg">{emailError}</p>}
                <label>Phone Number</label>
                <input type="text" placeholder="04XXXXXX" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} autoFocus required />
                {phoneNumberError &&  <p className="errorMsg">{phoneNumberError}</p>}
                <label>Password</label>
                <input type="password" placeholder="8 characters atleast" value={password} onChange={(e) => setPassword(e.target.value)} required />
                {passwordError &&  <p className="errorMsg">{passwordError}</p>}
              
                <label>Confirm Password</label>
                <input type="password" placeholder="8 characters atleast" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                {confirmPasswordError &&  <p className="errorMsg">{confirmPasswordError}</p>}
                <div className="btnContainer">
                    <button className="signupbutton" onClick={() => handleSignUp()}>SignUp</button>
                    <p>Have an account?<span onClick={() => handleloginNavigate()}>Sign In</span></p>
                </div>
            </div>
        </section>
    )
};



export default Login;