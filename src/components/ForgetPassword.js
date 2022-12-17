import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Form from 'react-bootstrap/Form';
import axios from "axios";

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const changeEmail = (e) => {

        setEmail(e.target.value);
    }

    const handleSubmit = (e)=> {

        e.preventDefault();
        if (email == '') {

            setErrorEmail(' Email require');

        }
        
        if (email != '' ) {
            let formData = new FormData();
           
            formData.append('email', email);
           

            axios.post('https://virvit.mydevpartner.website/vvapi/v1/forgot-password/', formData).then((res) => {



            })

        }

    }


    return (
        <>
            <Header />
            <div className="forgotPasswordContainer">
                <div className="container-fluid">
                    <Row className="employer-container">
                        <Col sm={4}>
                            <div className="employer-loginn">
                                <h2 className="forgetH2">Forgot Password !</h2>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-4" controlId="formGroupEmail">

                                        <Form.Control type="text"  value={email || ''} onChange={changeEmail} className="inputText" name="email" size="lg" placeholder="Enter Email" />
                                        <span><p className="requiredText">{errorEmail}</p></span>
                                    </Form.Group>
                                   
                                    <button type="submit" class="btn btn-primary w-75 ">Submit</button>
                                   
                                </Form>
                            </div>
                        </Col>
                        <Col sm={8}>
                            <div className="loginImage">
                            <img src="images/Candidate-forget-password.jpg" alt="login" class="img-fluid" />
                            </div>
                        </Col>


                    </Row>
                </div>

            </div>
            <Footer />
        </>
    )
}


export default ForgetPassword;