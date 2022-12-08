import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="row loginHeader">
                <div className="col-md-6 imgHeader">
                    <img src="./images/C2_Candidate Login Page1.png" className="headerIMG2" style={{height:"84px"}} />
                </div>
                <div className="col-md-6">
                    <div className="loginBtn" >
                        <Link to="/login">
                            <button type="button" className="btn btn-secondary btn-md  btnSignup">Login</button>
                        </Link>
                        <Link to="/registration">
                        <button type="button" className="btn btn-secondary btn-md  btnSignup">Register</button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header;