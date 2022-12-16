import React from "react";
import { Row, Card } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CandidateLogin = () => {
    let navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorUser, setErrorUser] = useState("");
    const [errorPassword, setErrorPassword] = useState("");


    const handalSubmit = async (e) => {
        e.preventDefault();


        if (username == '') {
            setErrorUser("user name is required");
        }
        if (password == '') {
            setErrorPassword('Password is required');
        }

        let formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        formData.append('device_id', 1);

        if (username != '' && password != '') {

            axios.post("https://virvit.mydevpartner.website/vvapi/v1/login/", formData)
                .then((res) => {
                    window.localStorage.setItem("loginUser", JSON.stringify(res.data));

                    setTimeout(() => {

                        navigate('/candidate');
                    }, 1000);



                });


        }

    }

    return (
        <>
            <div className="containerm">
                <div className="header">
                    <Header />
                    <ToastContainer />
                    <div className="row rowLogin" >
                        <div className="col-6 col-md-6">
                            <div className="loginForm">
                                <div  >
                                    <h6 className="loginHeading">Login to start your search !</h6>
                                </div>
                                <div>
                                    <form onSubmit={handalSubmit}>
                                        <div>

                                            <input className="inputText w-75 mt-2" value={username || ''} onChange={(event) => setUserName(event.target.value)} type="text" id="fname" placeholder="Email Login Email ID" name="username" />
                                            <span><p className="requiredText">{errorUser}</p></span>
                                            <input type="password" className="inputText w-75 " value={password || ''} onChange={(event) => setPassword(event.target.value)} placeholder="Password" id="lname" name="password" />
                                            <span><p className="requiredText">{errorPassword}</p></span>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                            </div>
                                            <div className="col-md-6">
                                                <a href="#" >Forget Password ?</a>
                                            </div>


                                        </div>
                                        {/* <div className="forgetPass">
                                            <a href="#" >Forget Password ?</a>
                                        </div>
                                        <div className="form-check checkBox">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                        </div> */}
                                        <div className="lognBtn">
                                            <button type="submit" className="btn btn-primary w-75 ">Login</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img className="headerIMG" src="./images/hiring-process2.png" />
                        </div>
                    </div>
                    <Footer />
                </div>

            </div>
        </>
    )
}

export default CandidateLogin;