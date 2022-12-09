import React from "react";


const Footer=()=>{

    return(
        <div className="row footerRow"  style={{ borderTop: "1px solid gray" }}>
            <div className="col-md-4 siteMap">
            <span className="bbb">2022 © </span>
            <a href="#" className="bbb">VirVit.sg </a>
           
            </div>
            <div className="col-md-4 loginfooter">
                <p className="footertext">Contact Us</p>
                <p className="footertext">Privacy</p>
                <p className="footertext">Terms & Conditions</p>

                {/* <div className="col-md-4"><a href="#">Contact Us</a></div>
                <div className="col-md-4"><a href="#">Privacy</a></div>
                <div className="col-md-4"><a href="#">Terms & Conditions</a></div> */}
            </div>
            <div className=" col-md-4 socialIconfooter">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <div className="collapse navbar-collapse socialIconFooter " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><img className="socialIcon" src="/images/twitter.png" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img className="socialIcon" src="/images/facebook.png" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img className="socialIcon" src="/images/linkedin.png" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img className="socialIcon" src="/images/instagram.png" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img className="socialIcon" src="/images/telegram.png" /></a>
                            </li>
                           
                            
                            
                        </ul>
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Footer;