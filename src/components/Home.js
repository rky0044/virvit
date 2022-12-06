import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

import CarouselSlider from "./CarouselSlider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
const search = <FontAwesomeIcon icon={faSearch} />;
const location = <FontAwesomeIcon icon={faLocationPin} />


const Home = () => {

    const [title, setTitle] = useState('');
    const [area, setArea] = useState('');


    const onSearch = (e) => {
        e.preventDefault();
        console.log(title, area);
        let formData = new FormData();
        formData.append('title', title);
        formData.append('area', area);
        if (title != '' && area != '') {

            axios.post('https://virvit.mydevpartner.website/vvapi/v1/job-filter/', formData)
                .then((res) => {
                    console.log(JSON.stringify(res.data), 'this is response data in ramesh');

                })
        }


    }

    return (
        <>
            <Header />


            <div className='search-div'>
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

            <div className="row">
                <div className="col-md-6">
                    <div className="search-job-div md-4">
                        <div className="row">
                            <div className="col-md-5">
                                <h4 className="job-title">Infotech Pvt Ltd</h4>
                                <h5 className="job-sub-title">Marketing New</h5>
                                <p className="job-experience">SGD - 5000 - 10000</p>
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
            </div>


            <CarouselSlider />
            <Footer />

        </>
    )
}

export default Home;