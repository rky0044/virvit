import React from "react";
import Header2 from "./Header2";

import Footer from "./Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';

import {Link} from 'react-router-dom';

const fabookmark = <FontAwesomeIcon icon={faBookBookmark} />;
const fashildnew = <FontAwesomeIcon icon={faShield} />;
const faBellIcon = <FontAwesomeIcon icon={faBell} />;

const search = <FontAwesomeIcon icon={faSearch} />;
const location = <FontAwesomeIcon icon={faLocationPin} />





const Candidate = () => {

    const [data, setData] = useState(null);
    const [title, setTitle] = useState('');
    const [area, setArea] = useState('');
    const [searchJob, setSearchJob] = useState([]);
    const [isSearch, setIsSearch] = useState(false);


    useEffect(() => {
        const data2 = JSON.stringify(window.localStorage.getItem('loginUser'));
        setData(data2);
    }, []);
    const data2 = JSON.parse(window.localStorage.getItem('loginUser'));

    const id = data2.id
    



    const onSearch = (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('title', title);
        formData.append('area', area);
        if (title != '' || area != '') {

            axios.post('https://virvit.mydevpartner.website/vvapi/v1/job-filter/', formData)
                .then((res) => {
                   setSearchJob(res.data);
                    setIsSearch(true);
          
                })
        }


    }



    return (
        <>
            <Header2 />
            {/* <LandingPage />  pages relateds*/}

            <div className='search-div candidate-search'>
                <div className='container-fluid'>
                    <form onSubmit={onSearch}>

                        <div className='row'>
                            <div className='col-md-2'></div>
                            <div className='col-md-3'>
                                <div className='input-group'>
                                    <span className="input-group-text bg-white"><i className='seachIcon'>{search}</i></span>
                                    <input className="form-control mr-sm-2" name='title' value={title || ''} onChange={(event) => setTitle(event.target.value)} type="search" placeholder="Job Title or Keywords" aria-label="Search" />
                                </div>

                            </div>
                            <div className='col-md-3'>
                                <div className='input-group'>
                                    <span className="input-group-text bg-white"><i className='seachIcon' >{location}</i></span>

                                    <input className="form-control mr-sm-2" name='area' value={area || ''} onChange={(event) => setArea(event.target.value)} type="search" placeholder="Area, City or Town" aria-label="Search" />
                                </div>
                            </div>
                            <div className='col-md-2'>
                                <button className="btn btn-primary srcButton" type="submit">Search</button>
                            </div>
                            <div className='col-md-2'></div>



                        </div>
                    </form>
                </div>

            </div>

            {/* landing page end */}
            <div className="welcome-candidate">
                <div className="container-fluid candidate-page">
                    <div className="candidate-home-div">
                        <div className="row">
                            <div className="col-md-12 canidate-namee">
                                <h2 className="candidateH2">Welcome {data2.fullname}</h2>
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
                                        <span  className="important-link">Saved Jobs</span>
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
            {/* thi is seasrch result */}
            {(isSearch == true) ?
                <div className="row">
                    {searchJob.map((item, key) => (

                        <div className="col-md-6">
                            <div className="search-job-div md-4">
                                <div className="row">
                                    <div className="col-md-5">
                                       <Link to={`/candidate/jobDetails/${item.id}`} ><h4 className="job-title">{item.organisation_detail.name}</h4></Link> 
                                        <h5 className="job-sub-title">{item.title}</h5>

                                        <p className="job-experience">{item.experiance_from} - {item.experiance_to} years experience</p>

                                        <p className="job-experience">SGD - {item.min_salary} - {item.max_salary}</p>
                                        <p className="job-skill">
                                            <span>Team Player, </span>
                                        </p>
                                    </div>
                                    <div className="col-md-1">

                                    </div>
                                    <div className="col-md-3">
                                        <button type="button" className="btn apply-btn">APPLY </button>
                                    </div>
                                    <div className="col-md-3">
                                        <button type="button" className="btn apply-btn">SAVE </button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    ))}


                </div>


                : <div className="no-job-found">
                    <img src="./images/candidate_home.png" className="candidate-homepage" />
                </div>
            }
            <Footer />

        </>
    )
}

export default Candidate;