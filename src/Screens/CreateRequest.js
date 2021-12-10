import React, { useState, useEffect } from 'react';
import './styles/DashboardStyle.css';
import { useNavigate } from "react-router-dom";
import {
    BrowserRouter as Router,
    Link as RouterLink,
} from "react-router-dom";
import logo from '../images/logo.png';
import { facilityData } from '../Data/facilityData';
import { handleRequest } from '../Service';
import storage from '../firebase/firebase';
import Loader from "react-loader-spinner";

const Dashboard = (props) => {

    let navigate = useNavigate();

    const resetState = ()=>{
        setMoazanName('');
        setMoazanEmail('');
        setMoazanIlamicRegNo('');
        setMoazanPassword('');
        setMoazanIdentificationNumber('');
        setMosqueImageFile('')
        setName('');
        setCity('');
        setCountry('');
        setLocation('');
        setZipCode('');
        setEmail('');
        setPhoneNumber('');
        setPrayerTimings([
            { name: 'Fajr', time: '' },
            { name: 'Zuhr', time: '' },
            { name: 'Asr', time: '' },
            { name: 'Maghrib', time: '' },
            { name: 'Isha', time: '' },
            { name: 'Jumma', time: '' },
            { name: 'Ishraq', time: '' }
        ]);
        setMosqueMainImage(null);
        setLatitude('');
        setLongitude('')
        setFacilties(facilityData);
        setMosqueImageFile(null);

    }

    


    const handleMosqueImage = (event) => {
        console.log("EVENT", event.target.files)
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            console.log(URL.createObjectURL(img))
            setMosqueImageFile(img)

        }
    }
    // Moazan 
    const [moazanName, setMoazanName] = useState('');
    const [moazanEmail, setMoazanEmail] = useState('');
    const [moazanIslamicRegNo, setMoazanIlamicRegNo] = useState('');
    const [moazanPassword, setMoazanPassword] = useState('');
    const [moazanIdentificationNumber, setMoazanIdentificationNumber] = useState('');


    //Mosque

    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [location, setLocation] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [prayerTimings, setPrayerTimings] = useState([
        { name: 'Fajr', time: '' },
        { name: 'Zuhr', time: '' },
        { name: 'Asr', time: '' },
        { name: 'Maghrib', time: '' },
        { name: 'Isha', time: '' },
        { name: 'Jumma', time: '' },
        { name: 'Ishraq', time: '' }
    ]);
    const [mosqueMainImage, setMosqueMainImage] = useState(null);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [facilities, setFacilties] = useState(facilityData);
    const [mosqueImageFile, setMosqueImageFile] = useState(null);
    const [loading, setLoading] = useState(false)


    const handleFireBaseUpload = e => {
        setLoading(true)
        e.preventDefault();
        if (mosqueImageFile === '') {
            console.error(`not an image, the image file is a ${typeof (mosqueImageFile)}`)
        }
        const uploadTask = storage.ref(`/images/${mosqueImageFile.name}`).put(mosqueImageFile)
        uploadTask.on('state_changed',
            (snapShot) => {
                console.log(snapShot)
            }, (err) => {
                console.log(err)
            }, () => {
                storage.ref('images').child(mosqueImageFile.name).getDownloadURL()
                    .then(fireBaseUrl => {
                        console.log("firebaseUrl", fireBaseUrl)
                        setMosqueMainImage(fireBaseUrl);
                        handleRequestCall(fireBaseUrl)
                    })
            })
    }

    const handleCreateRequest = async (e) => {
        await handleFireBaseUpload(e);
    }

    const handleRequestCall = async (imageUrl) => {
        const moazanData = {
            name: moazanName,
            email: moazanEmail,
            password: moazanPassword,
            phoneNumber: phoneNumber,
            role: 'moazan'
        }
        const response = await handleRequest('POST', 'signup', moazanData);
        if (response.status === 201) {
            let currentUser = localStorage.getItem('user');
            currentUser = JSON.parse(currentUser);
            const data = {
                name: name,
                image: imageUrl,
                status: 'pending',
                latitude: latitude,
                longitude: longitude,
                moazan: response.data,
                timings: prayerTimings,
                location: location,
                city: city,
                country: country,
                zipCode: zipCode,
                facilites: facilities,
                email: email,
                phoneNumber: phoneNumber,
                requestedBy: currentUser.email
            }
            console.log("DATA",data)
            const responseData = await handleRequest('POST', 'createRequest', data);
            if (responseData.status === 201 || responseData.status === 200) {
                alert('Request Submitted Successfully')
            }
            setLoading(false)
        }else {
            console.log("response",response);
            alert(response.message);
            setLoading(false);
            resetState()
        }
    }

    const handleSignupNavigate = () => {
        navigate('/Signup')
    }


    return (
        <>
            <nav className={'nav'}>
                <RouterLink to='/' className='logo' smooth={true} duration={2000}>
                    <img src={logo} alt='' />
                </RouterLink>
                <input type="checkbox" className="menu-btn" id='menu-btn' />
                <label className="menu-icon" for="menu-btn">
                    <span className="nav-icon"></span>
                </label>
                <ul className="menu">

                    <li><RouterLink to="/" smooth={true} duration={2000}>Logout</RouterLink></li>
                </ul>
            </nav>
            <section className="login">
                <div className="loginContainer">
                    {/* mosque fields */}
                    <label>Mosque Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} autoFocus required />
                    <label>Mosque Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoFocus required />
                    <label>Mosque City</label>
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
                    <label>Mosque Country</label>
                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />
                    <label>Mosque Address</label>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
                    <label>Mosque Latitude</label>
                    <input type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} required />
                    <label>Mosque Longitude</label>
                    <input type="text" value={longitude} onChange={(e) => setLongitude(e.target.value)} required />
                    <label>Mosque Zip Code</label>
                    <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
                    <label>Mosque Phone Number</label>
                    <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                    <label>Mosque Prayer Timings</label>
                    {
                        prayerTimings.map((item, index) => {
                            return (
                                <>
                                    <label>{item.name}</label>
                                    <input type="time" value={prayerTimings[index].time} onChange={(e) => setPrayerTimings((prevState) => {
                                        console.log(e.target.value)
                                        const timeArray = [...prevState];
                                        timeArray[index].time = e.target.value;
                                        return timeArray
                                    })} required />
                                </>
                            )
                        })
                    }
                    <label>Upload Mosque Main Image</label>
                    <input type="file" onChange={handleMosqueImage} required />
                    {mosqueMainImage && <img style={{ width: 50, height: 50 }} src={mosqueMainImage} />}
                    <label>Mosque Facilites</label>
                    {
                        facilities.map((item, index) => {
                            return (
                                <div>
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={item.title}
                                        value={item.title}
                                        onChange={(e) => setFacilties((prevState) => {
                                            console.log("facitiyArraey", facilities)
                                            console.log("e", e.target.value);
                                            const facilityArray = [...prevState];
                                            facilityArray[index].isChecked = !facilityArray[index].isChecked

                                            return facilityArray;
                                        })}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`}>{item.title}</label>
                                </div>
                            )
                        })
                    }
                    <label>MOAZAN DETAILS</label>
                    <label>Name</label>
                    <input type="text" value={moazanName} onChange={(e) => setMoazanName(e.target.value)} autoFocus required />
                    <label>Email Address</label>
                    <input type="email" value={moazanEmail} onChange={(e) => setMoazanEmail(e.target.value)} required />
                    <label>Password</label>
                    <input type="password" value={moazanPassword} onChange={(e) => setMoazanPassword(e.target.value)} required />
                    <label>Identification Number</label>
                    <input type="text" value={moazanIdentificationNumber} onChange={(e) => setMoazanIdentificationNumber(e.target.value)} required />
                    <label>Islamic Registeration Number</label>
                    <input type="text" value={moazanIslamicRegNo} onChange={(e) => setMoazanIlamicRegNo(e.target.value)} required />
                    <div className="btnContainer">

                        {loading ? <div style={{alignSelf:'center'}}>
                            <Loader

                                visible={loading}
                                type="ThreeDots"
                                color="rgb(22,112,49)"
                                height={100}
                                width={100}

                            />
                        </div> :
                            <button onClick={(e) => handleCreateRequest(e)}>Submit</button>
                        }
                    </div>
                </div>
            </section>
        </>
    )
};



export default Dashboard;