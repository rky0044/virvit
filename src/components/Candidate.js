import React from "react";
import Header2 from "./Header2"
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";


const fabookmark = <FontAwesomeIcon icon={faBookBookmark} />;
const fashildnew = <FontAwesomeIcon icon={faShield} />;
const faBellIcon = <FontAwesomeIcon icon={faBell} />;





const Candidate = ()=>{

    const [data,setData]= useState(null);
    useEffect(()=>{
        const data2 = JSON.stringify(window.localStorage.getItem('loginUser'));
        setData(data2);
    },[]);
    const data2 = JSON.parse(window.localStorage.getItem('loginUser'));
    console.log(data2.fullname, "data2 is ready");

    return(
        <>
        <Header2 />
        <LandingPage />
        <div className="welcome-candidate">
            <div className="container-fluid candidate-page">
                <div className="candidate-home-div">
                    <div className="row">
                        <div className="col-md-12 canidate-namee">
                            <h2 className="candidateH2">{data2.fullname}</h2>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="profileSection">
                                <div className="col-md-3">
                                    <a href="#" >edit profile</a>
                                </div>
                                <div className="col-md-3">
                                <a href="#" >View profile</a>
                                </div>

                                <div className="col-md-6"></div>


                                
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="job-status-section">
                                <div className="saved-job">
                                    {fabookmark}
                                    <span className="important-link">Saved Jobs</span>
                                </div>
                                <div className="job-application">
                                    {fashildnew}
                                    <span className="important-link">Job Applications</span>

                                </div>
                                <div className="job-alert">
                                    {faBellIcon}
                                    <span className="important-link">Job Alerts</span>


                                </div>

                            </div>
                        </div>


                    </div>

                </div>

            </div>

        </div>
        <div className="no-job-found">
            <img src="./images/candidate_home.png" className="candidate-homepage" />
        </div>
        <Footer />
            
        </>
    )
}

export default Candidate;