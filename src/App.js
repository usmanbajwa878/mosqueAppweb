import React,{useState,useEffect} from 'react';
import About from './Components/About';
import Feature from './Components/Feature';
import Header from './Components/Header';
import Presentation from './Components/Presentation';
import './index.css';
import aboutImage from '../src/images/presentation.png';
import Contact from './Components/Contact';
import { css } from "@emotion/react";
import PropagateLoader from 'react-spinners/PropagateLoader';
import  AppNavigator from './navigation/AppNavigator'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Screens/Home';

function App() {
  const [loading, setLoading] = useState(false);
  const override = css`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 10%;
  margin-top:30%
  `;

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])
  return (
    <AppNavigator />
//     <div className="App">
//       {
//         loading ? <PropagateLoader color={"#3d2514"} loading={loading} css={override} size={40} />
//           :
//           <AppNavigator />
         
          
// }
//     </div>
  );
}

export default App;
