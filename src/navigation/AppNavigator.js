import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Login from "../Screens/Login";
import Home from "../Screens/Home";
import Signup from "../Screens/SignUp";
import Dashboard from "../Screens/Dashboard";
import CreateRequest from "../Screens/CreateRequest";





const AppNavigator = props => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Login" element={<Login />} />
                <Route exact path="/Signup" element={<Signup />} />
                <Route exact path="/Dashboard" element={<Dashboard />} />
                <Route exact path="/CreateRequest" element={<CreateRequest />} />


                {/* <Route path="/Login">
                    <Login />
                </Route>
                <Route path="/Signup">
                    <Signup />
                </Route>
                <Route path="/Dashboard">
                    <Dashboard />
                </Route>
                <Route path="/">
                    <Home />
                </Route> */}
            </Routes>
        </Router>
    )
};

export default AppNavigator;

