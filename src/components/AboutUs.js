import React from "react";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "./Header";
import Footer from "./Footer";


const AboutUs = () => {

    return (
        <>
            <Header />
            <div className="aboutUs-div">
                <div className="container-fluid">
                    <div className="about-us-container">
                        <Row>
                            <Col sm={12}>
                                <h2 className="titleAbout">About Us</h2>
                            </Col>
                        </Row>
                        <Row >

                            <Col sm={11}>
                                <p className="about-us-content">
                                    VirVit, a modernized HR App for Job seekers which was created by our parent company, Talent-Merge for job applications With our unique video resume functions, you can hone and improve your video resume skills by uploading your Video Resumes on ViRViT so that it will hasten the employer selection process and increase the chances of companies responding to you. Your dream job is a click away! Get the app on your mobile.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={3}>
                                <a href="#">
                                    <img src="./images/google_store_new.png" className="playstoreImg" />
                                </a>

                            </Col>
                            <Col sm={3}>
                                <a href="#">
                                    <img src="./images/ios_store.png" className="playstoreImg" />
                                </a>
                            </Col>

                            <Col sm={6}>
                            </Col>
                        </Row>
                        <Row >
                            <Col sm={11}>
                            <p className="about-us-content last-content">
                            VirVit also assists Employers to hasten their selection process. Employers can create an account at <a href="https://virvit.sg/login" target="_blank">https://virvit.sg/login</a> and search for suitable candidates. With ViRViT, it makes the hiring process easier, faster, and more fun!

                            </p>
                            </Col>
                        </Row>

                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutUs;