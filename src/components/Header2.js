import React from "react";
import { useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Header2 = () => {
    let navigate = useNavigate();



    const [data, setData] = useState(null);
    useEffect(() => {
        const data2 = JSON.stringify(window.localStorage.getItem('loginUser'));
        console.log(data2);
        setData(data2);
    }, [])

    const data2 = JSON.parse(window.localStorage.getItem('loginUser'));
    console.log(data2.fullname, "data2 is ready");

    const logout =(e)=>{
        e.preventDefault();
        
        toast("logout success...");
        setTimeout(()=>{
            window.localStorage.removeItem('loginUser');
           
        },4000)
        navigate('/');
      


    }



    return (
        <>
         
            <div className="row loginHeader">
                <div className="col-md-6 imgHeader">
                    <img src="./images/C2_Candidate Login Page1.png" style={{ height: "84px" }} />
                </div>
               
                <div className="col-md-6 header2Dropmdown">
                    <DropdownButton id="dropdown-basic-button" title={data2.fullname}>
                        <Dropdown.Item href="#/action-1">Edit Profile</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Job Application</Dropdown.Item>
                        <Dropdown.Item onClick={logout} href="#/action-3">Logout</Dropdown.Item>
                        
                    </DropdownButton>

                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Header2;