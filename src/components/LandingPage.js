import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
const search = <FontAwesomeIcon icon={faSearch} />;
const location= <FontAwesomeIcon icon={faLocationPin} />

const LandingPage = () => {
    return (

        <div className='search-div'>
            <div className='container-fluid'>
                <form>

                    <div className='row'>
                        <div className='col-md-2'></div>
                        <div className='col-md-3'>
                            <div className='input-group'>

                            <span className="input-group-text bg-white"><i className='seachIcon'>{search}</i></span>
                            <input className="form-control mr-sm-2" type="search" placeholder="Job Title or Keywords" aria-label="Search" />
                            </div>

                        </div>
                        <div className='col-md-3'>
                        <div className='input-group'>
                        <span className="input-group-text bg-white"><i className='seachIcon' >{location}</i></span>

                            <input className="form-control mr-sm-2" type="search" placeholder="Area, City or Town" aria-label="Search" />
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
    )
}


export default LandingPage;

