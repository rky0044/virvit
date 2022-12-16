import React from "react";
import { Link } from "react-router-dom";


const Footer=()=>{

    return(
        <div className="row footerRow"  style={{ borderTop: "1px solid gray" }}>
            <div className="col-md-4 siteMap">
            <span className="bbb">2022 © </span>
          <Link to={"/"}> <span className="bbb">VirVit.sg</span></Link>  
           
            </div>
            <div className="col-md-4 loginfooter">
              <a href="#" > <p className="footertext">Contact Us</p></a>
              <a href="#" > <p className="footertext">Privacy</p></a>
              <a href="#" > <p className="footertext">Terms & Conditions</p></a>

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