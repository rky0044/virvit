import React from "react";

import Nav from 'react-bootstrap/Nav';

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="row loginHeader">
                <div className="col-md-5 imgHeader">

                    <Link to={"/"}><img src="/images/virvit_logo.png" className="logoHeader" /></Link> 
                    <a routerlink="/candidate" className="navbar-brand header-titlee" href="#">Building Your Dreams</a>
                </div>
                <div className="col-md-7">


                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link  eventKey="link-2"  href="/">Job Search</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link  href="/about-us">About Us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/login">
                                <button type="button" className="btn btn-secondary btn-md  btnSignup">Login</button>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/registration">
                                <button type="button" className="btn btn-secondary btn-md  btnSignup">Register</button>
                            </Nav.Link>
                        </Nav.Item>

                    </Nav>
                    {/* <div className="loginBtn" >
                        <Link to="/login">
                            <button type="button" className="btn btn-secondary btn-md  btnSignup">Login</button>
                        </Link>
                        <Link to="/registration">
                            <button type="button" className="btn btn-secondary btn-md  btnSignup">Register</button>
                        </Link>
                    </div> */}

                </div>
            </div>
        </>
    )
}

export default Header;