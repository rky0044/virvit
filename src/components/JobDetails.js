import React, { useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Header2 from "./Header2";
import Footer from "./Footer";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useParams } from "react-router-dom";


const JobDetails = () => {
    
    const [getdata, setJobData] = useState('');
    let idd = useParams();
    let id = idd.id;


    useEffect(() => {

        const fetchJobData = async () => {

            const response = await fetch(
                'https://virvit.mydevpartner.website/vvapi/v1/jobs/' + id+'/'
            );

            console.log(response,'rakesh');
            const data = await response.json();
       
            setJobData(data);
            

        };
        fetchJobData();
    }, [])

    return (
        <>
            <Header2 />

            <div className="job-detail-div">
                <Row>
                    
                    <Col sm={12} className="BreadcrumbDiv">
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>

                            <Breadcrumb.Item active>ReactJs developer</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
           

                <Row className="titleAppyBtn">
                    
                    <Col sm={6} className="companyName">
                        <h2 className="job-title">{getdata.title}</h2>
                        <h4 className="company-name">{getdata.organisation_detail?.name}</h4>
                    </Col>
                    <Col sm={6}>
                        <div className="text-right">
                            <button className="btn applied-btn not-job-applied" type="button">Apply</button>

                            <p className="job-post-date">Posted Date: July 5, 2022</p>
                        </div>
                    </Col>
                   

                </Row>
           



                <Row>
                    <Col sm={12}>
                        <div className="job-detail-second">
                            <Row>
                                <Col sm={6} className="jobdetailsother">
                                    <p className="job-detail-other">Year of Experience: {getdata.experiance_from} - {getdata.experiance_to} </p>
                                    <p className="job-detail-other">Location:{getdata.state_detail?.name} {getdata.state_detail?.country_detail?.name}</p>
                                    <p className="job-detail-other">Qualification: {getdata.qualification_detail?.title} </p>
                                </Col>
                                <Col sm={6} className="jobdetailsother2">
                                    <p className="job-detail-other">Salary:  {getdata.min_salary} - {getdata.max_salary}  SGD</p>
                                    <p className="job-detail-other">Job Type: {getdata.type}</p>
                                    <p className="job-detail-other">Job Specialization: {getdata.specialization}</p>
                                </Col>

                            </Row>
                            <Row>
                                <Col sm={1}>
                                    <p className="job-detail-other">Skills:</p>
                                </Col>
                                <Col sm={11}></Col>

                            </Row>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <div className="job-detail-description">
                            <h2 className="job-description-content mb-4">Job Description</h2>
                            <p className="job-detail-other"></p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <div className="job-detail-description">
                            <h2 className="job-description-content mb-4">Skill Match</h2>
                        </div>
                    </Col>
                </Row>
            </div>

            <Footer />
        </>
    )
}

export default JobDetails;