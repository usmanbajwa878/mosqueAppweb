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
    <div className="App">
      {
        loading ? <PropagateLoader color={"#3d2514"} loading={loading} css={override} size={40} />
          :
          <>
            <Header />
            <div style={{justifyContent:'center',alignItems:'center',display:'block',marginRight:'10%',marginLeft:'10%',marginTop:100}}>
            <h1 style={{textAlign:'center'}}>Features</h1>
            <p style={{textAlign:'center',lineHeightStep:10}}>MosqueApp offers you a new way to track and manage prayer times, indeed we offer an end-to-end system that provides mosque managers with an online tool available 24/24h allowing them manage schedules, news and many other features. The faithful benefit from a mobile application which allows them to consult the exact timetables and not approximate of their favorite mosque, as well as news and other features such as the search for mosque by geolocation. We have made reliability and quality our main values. Our ambition is clear: to build the best service for our mosques through technology and design. Any mosque added to our system requires extensive moderation. We suspend any mosque that does not respect our rules in order to maintain a reliable service for the community.</p>
       
            </div>
           
            <Feature />
            <About image={aboutImage} title="Comes with all you need" button="Get the app" />
            <Presentation />
            <div className="video-responsive">
              <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/NxSU6fcQmPs`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
            {/* <About image={aboutImage1} title="Download the app now" button="Get the app" /> */}
            <Contact />
          </>
}
    </div>
  );
}

export default App;
