import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Form from 'react-bootstrap/Form';
import axios from "axios";


const ContactUs = () => {

    const [name, setName] = useState("");
    const [errorName, setErrorname] = useState("");
    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [errorMobile, setErrorMobile] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    const changeFname = (e) => {

        setName(e.target.value);
    }
    const changeEmail = (e) => {

        setEmail(e.target.value);
    }
    const changeMobile = (e) => {

        setMobile(e.target.value);
    }
    const changeMessage = (e) => {

        setMessage(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (name == '') {

            setErrorname(' Name require');

        }
        if (email == '') {

            setErrorEmail(' Email require');

        }
        if (mobile == '') {

            setErrorMobile(' Mobile require');

        }
        if (mobile == '') {

            setErrorMessage(' Message require');

        }



        if (name != '' && email != '' && mobile != '' && message != '') {
            let formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('mobile', mobile);
            formData.append('message', message);

            axios.post('https://virvit.mydevpartner.website/vvapi/v1/contact-us/', formData).then((res) => {



            })

        }
    }


    return (
        <>
            <Header />
            <div className="aboutUs-div">
                <div className="container-fluid">
                    <div className="about-us-container">
                        <Row>

                            <Col sm={12} className="BreadcrumbDiv">
                                <Breadcrumb>
                                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

                                    <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
                                </Breadcrumb>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={3}></Col>
                            <Col sm={6}>
                                <p className="contact-us-heading">
                                    Looking to grow your team? Please kindly complete the form and we will get back to you soon. Thank You.
                                </p>
                            </Col>
                            <Col sm="3"></Col>
                        </Row>
                        <div className="container-fluid">

                            <div className="contactUs-div">
                                <Row>
                                    <Col sm={3}></Col>
                                    <Col sm={6}>
                                        <div className="contact-us-form">
                                            <Form onSubmit={handleSubmit}>
                                                <Form.Group className="mb-4" controlId="formGroupEmail">

                                                    <Form.Control type="text" value={name || ''} onChange={changeFname} size="lg" name="name" placeholder="Name" />
                                                    <span><p className="requiredText">{errorName}</p></span>
                                                </Form.Group>
                                                <Form.Group className="mb-4" controlId="formGroupEmail">

                                                    <Form.Control type="email" name="email" value={email || ''} onChange={changeEmail} size="lg" placeholder="Enter email" />
                                                    <span><p className="requiredText">{errorEmail}</p></span>
                                                </Form.Group>
                                                <Form.Group className="mb-4" controlId="formGroupEmail">

                                                    <Form.Control type="number" value={mobile || ''} onChange={changeMobile} name="mobile" size="lg" placeholder="Mobile" />
                                                    <span><p className="requiredText">{errorMobile}</p></span>
                                                </Form.Group>
                                                <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">

                                                    <Form.Control as="textarea" value={message || ''} onChange={changeMessage} name="message" rows={3} placeholder="Message" />
                                                    <span><p className="requiredText">{errorMessage}</p></span>

                                                </Form.Group>
                                                <button type="submit" class="btnContact">Submit</button>

                                            </Form>

                                        </div>
                                    </Col>
                                    <Col sm={3}></Col>


                                </Row>


                            </div>

                        </div>
                      
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs;