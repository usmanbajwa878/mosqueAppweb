import React from 'react';
import Header from '../Components/Header';
import Feature from '../Components/Feature';
import About from '../Components/About';
import Presentation from '../Components/Presentation';
import Contact from '../Components/Contact';
import aboutImage from '../images/presentation.png';

function Home() {
    return (
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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/lrhrM-sdKzo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
        {/* <About image={aboutImage1} title="Download the app now" button="Get the app" /> */}
        <Contact />
      </>
    )
}

export default Home
