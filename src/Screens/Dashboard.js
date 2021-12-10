import React, { useState, useEffect, useMemo } from 'react';
import './styles/DashboardStyle.css';
import { useNavigate,useLocation } from "react-router-dom";
import {
    BrowserRouter as Router,
    Link as RouterLink,
} from "react-router-dom";
import logo from '../images/logo.png';
import { facilityData } from '../Data/facilityData';
import { useTable } from 'react-table';
import { COLUMNS, REQUESTDATA } from '../Data/DashBoardList';
import { handleRequest } from '../Service';





const Dashboard = (props) => {
 
    const {state} = useLocation();
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [requestData,setRequestData] = useState(REQUESTDATA);
    const columns = useMemo(() => COLUMNS, []);

    const tableInstance = useTable({
        columns: columns,
        data: requestData
    });
    

    useEffect(()=>{
        getRequestData()
    },[]);

    const getRequestData = async() =>{
        const data = {
            requestedBy:state.email
        }
       const requestData  =  await handleRequest('POST','getRequest',data);
       console.log("RESPONSE",requestData);
       if(requestData.data?.length > 0){
        setRequestData(requestData.data)

       }
    }

 

    const handleSignIn = () => {
        alert(JSON.stringify({ email, password }))
    }
    const handleSignupNavigate = () => {
        navigate('/Signup')
    }
    const handleRequestNav = () =>{
        navigate('/CreateRequest')
    }

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

    return (
        <>
            {/* <nav className='dashboardNav'>
           <RouterLink to='/' className='logoDashBaord' smooth={true} duration={2000}>
                <img src={logo} alt=''/>
            </RouterLink>
        </nav> */}
            <nav className={'nav'}>
                <RouterLink to='/' className='logoDashBaord' smooth={true} duration={2000}>
                    <img src={logo} alt='' />
                </RouterLink>
                <input type="checkbox" className="menu-btn" id='menu-btn' />
                <label className="menu-icon" for="menu-btn">
                    <span className="nav-icon"></span>
                </label>
                <ul className="menu">
                    <li><RouterLink to="/" smooth={true} duration={2000}>Logout</RouterLink></li>
                    {/* <li><a href='#' className="active">Home</a></li>
                     <li><a href='#'>Features</a></li>
                     <li><a href='#'>About</a></li>
                     <li><a href='#'>UI SS</a></li>
                     <li><a href='#'>Download</a></li> */}
                </ul>
            </nav>
            <div className="content">


                <div className="contentContainer">
                    <div style={{paddingTop:30}}>
                    <label style={{fontSize:20,fontWeight:'600'}}>Name:{state.name}</label>
                   
                    </div>
                    <div>
                    <label style={{fontSize:20,fontWeight:'600'}}>Email Address:{state.email}</label>
                   
                    </div>
                   <div style={{marginTop:40,display:'flex',justifyContent:'space-between'}}>
                   <h5 style={{fontSize:25,fontFamily:'Nunito'}}>Requests</h5>
                   <button onClick={()=>handleRequestNav()}>Create Request</button>

                   </div>
                   {requestData.length > 0 && 
                    <table {...getTableProps()}>
                        <thead>
                        {
                            headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                   {
                                       headerGroup.headers.map((column)=>(
                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>

                                       ))
                                   }
                                </tr>
                            ))
                        }

                    </thead>
                  <tbody {...getTableBodyProps()}>
                        {
                            rows.map(row =>{
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {
                                            row.cells.map((cell)=>{
                                                    return   <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            })
                                        }
                                   
                                </tr>
                                )
                                })
                        }
                    </tbody>
                </table>
}
                </div>

           
            </div>


        </>
    )
};



export default Dashboard;