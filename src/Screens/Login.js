import React,{useState,useEffect} from 'react';
import './styles/LoginStyle.css';
import {  useNavigate } from "react-router-dom";
import {
    BrowserRouter as Router,
    Link as RouterLink,
  } from "react-router-dom";
  import logo from '../images/logo.png';
import { handleRequest } from '../Service';
import { checkSignInCredentials } from '../utilities';


const Login = (props) => {

    let navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    // const handleSignIn = () =>{
    //     navigate('/Dashboard')
    //     // alert(JSON.stringify({email,password}))
    // }
    const handleSignupNavigate = ()=>{
        navigate('/Signup')
        //  navigate('/Dashboard')
        
        }

        

    const handleSignIn = async () => {
        if (email.length === 0  || password.length === 0) {
              return  alert('All Fields are required');
        }
        const { error, message, type } = checkSignInCredentials( email, password )
        console.log(error,message,type)
        if (error) {
             if (type === 'email') {
                setEmailError(message)
            } else if (type === 'password') {
                setPasswordError(message)
            } 
        } else {
            console.log("DATA")
            const data = {
                email,
                password,
            }
            const signupResponse = await handleRequest('POST', 'login', data);
            console.log("DATA", signupResponse);
            if(signupResponse.status === 200){
                alert('User Login in Successfully');
                localStorage.setItem('user',JSON.stringify(signupResponse.data[0]))
                navigate('/Dashboard',{state:signupResponse.data[0]})
            }else{
                alert(signupResponse.message)
            };
            setPassword('');
            setEmail('')
        }


    }


    return (
        <>
        <nav className='dashboardNav'>
           <RouterLink to='/' className='logoDashBaord' smooth={true} duration={2000}>
                <img src={logo} alt=''/>
            </RouterLink>
        </nav>
        <section className="login">
            <div className="loginContainer">
                <label>Email Address</label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} autoFocus required />
                {emailError &&  <p className="errorMsg">{emailError}</p>}
                <label>Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                {passwordError &&  <p className="errorMsg">{passwordError}</p>}
                    <div className="btnContainer">
                            <button className="loginbutton" onClick={()=>handleSignIn()}>SignIn</button>
                            <p>Don't have an account?<span onClick={()=>handleSignupNavigate()}>SignUp</span></p>
                    </div>
            </div>
        </section>
        </>
    )
};



export default Login;