import React,{useState} from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-scroll';

const NavBar = props => {

    const [nav,setNav] = React.useState(false);

    const changeBackground = () =>{
        if(window.scrollY >=50){
            setNav(true)
        }else{
            setNav(false)
        }
    }
window.addEventListener('scorll',changeBackground)
    return (
        <nav className={nav&& 'nav'}>
           <Link to='main' className='logo' smooth={true} duration={2000}>
                <img src={logo} alt=''/>
            </Link>
             <input type="checkbox" className="menu-btn" id='menu-btn' />
             <label className="menu-icon" for="menu-btn">
                 <span className="nav-icon"></span>
                 </label>
                 <ul className="menu">
                 <li><Link to="main" smooth={true} duration={2000}>Home</Link></li>
                <li><Link to="features" smooth={true} duration={2000}>Features</Link></li>
                <li><Link to="about" smooth={true} duration={2000}>About</Link></li>
                <li><Link to="contact" smooth={true} duration={2000}>Contact</Link></li>
                <li><Link to="contact" smooth={true} duration={2000}>Login</Link></li>
                <li><Link to="contact" smooth={true} duration={2000}>Register</Link></li>
                     {/* <li><a href='#' className="active">Home</a></li>
                     <li><a href='#'>Features</a></li>
                     <li><a href='#'>About</a></li>
                     <li><a href='#'>UI SS</a></li>
                     <li><a href='#'>Download</a></li> */}
                 </ul>
        </nav>
    )
}

export default NavBar;