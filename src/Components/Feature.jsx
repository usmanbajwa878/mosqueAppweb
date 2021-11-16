import React from 'react';
import FeatureBox from './FeatureBox';
import time from '../images/time.png';
import news from '../images/news.png';
import theme from '../images/theme.png';
import options from '../images/options.png';
import application from '../images/application.png';
import anounce from '../images/anounce.png'

const Feature = () => {
    return (
        <div id="features">
                
            <div className="a-container">
                    <FeatureBox image={time} title="PRAYER TIMES" description="Display of prayer times in several languages. 2 choices of calculation, automatic or by annual calendar"/>
                    <FeatureBox image={news} title="ATHAN AND IQAMA" description="A visual and sound signal to announce the athan and the iqama"/>
                    <FeatureBox image={anounce} title="ANNOUNCEMENT AND NEWS" description="Communicate with the faithful of your mosque through announcements and flash messages, at the mosque and everywhere else on the mobile app"/>
                    <FeatureBox image={options} title="OPTIONS" description="Multiple options, such as turning off the screen during prayer and the jumua sermon"/>
                    <FeatureBox image={application} title="MOBILE APPLICATION" description="A mobile application on iPhone and Android (Find a nearby mosque, route, prayer notification, useful info... etc.)"/>
                    <FeatureBox image={theme} title="THEMES AND COLORS" description="Communicate with the faithful of your mosque through announcements and flash messages, at the mosque and everywhere else on the mobile app"/>
            </div>
        </div>
    )
}

export default Feature;
