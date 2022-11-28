import React from "react";


const Footer=()=>{

    return(
        <>
         <div className="row" style={{ borderTop: "1px solid gray" }}>
                        <div className="col-md-6 loginfooter">
                            <div className="col-md-4"><a href="#">Contact Us</a></div>
                            <div className="col-md-4"><a href="#">Privacy</a></div>
                            <div className="col-md-4"><a href="#">Terms & Conditions</a></div>


                        </div>
                        <div className=" col-md-6 socialIconfooter">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                                <div className="collapse navbar-collapse socialIconFooter " id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="#"><img src="./images/twitter.png" /></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><img src="./images/facebook.png" /></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><img src="./images/linkedin.png" /></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><img src="./images/instagram.png" /></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><img src="./images/whatsapp.png" /></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><img src="./images/youtube.png" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>

                        </div>
                    </div>
        </>
    )
}

export default Footer;