import React, { useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Header2 from "./Header2";
import Footer from "./Footer";


const ProfileEdit = () => {
    const [jobs, setJobs] = useState([]);
    const [job_preference, setSelectedJobs] = useState();
    const changeGobs = (event) => {

       
        setSelectedJobs(event.target.value)
    }
    //get job data form api
    useEffect(() => {
        const fetchJob = async () => {
            const response = await fetch('https://virvit.mydevpartner.website/vvapi/v1/job-preference/');
            const data = await response.json();
           
            setJobs(data.results)
        };
        fetchJob()

    }, [])

    return (
        <>
            <Header2 />
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={2} className="profileBorder" >
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first" >Edit Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Privacy Setting</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    <Col sm={12}>
                                        <h3>home</h3>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={8}>
                                        <Row>

                                            <Col sm={6} >
                                                <span>First name</span>
                                                <input className="form-control inputText " type="text" id="fname" name="fname" />
                                            </Col>
                                            <Col sm={1}></Col>
                                            <Col sm={5}>
                                                <span>Last Name</span>
                                                <input className="form-control inputText " type="text" id="lname" name="lname" />
                                            </Col>
                                        </Row>
                                        <Row>

                                            <Col sm={6} >
                                                <span>Email</span>
                                                <input className="form-control inputText " type="text" id="email" name="email" />
                                            </Col>
                                            <Col sm={1}></Col>
                                            <Col sm={5}>
                                                <span>Mobile</span>
                                                <input className="form-control inputText " type="text" id="mobile" name="mobile" />
                                            </Col>
                                        </Row>
                                        <Row>

                                            <Col sm={6} >
                                                <span>Designation</span>
                                                <input className="form-control inputText " type="text" id="email" name="email" />
                                            </Col>
                                            <Col sm={1}></Col>
                                            <Col sm={5}>
                                                <input className=" form-control inputText" type="date" name="dob" />
                                            </Col>
                                        </Row>
                                        <Row>

                                            <Col sm={6} >

                                                <select className=" form-control inputText" aria-label=".form-select-lg example">
                                                    <option >Gender</option>
                                                    <option value="1">Male</option>
                                                    <option value="2">Female</option>

                                                </select>
                                            </Col>
                                            <Col sm={1}></Col>
                                            <Col sm={5}>

                                                <select className=" form-control inputText" aria-label=".form-select-lg example">
                                                    <option >Employment:Type</option>
                                                    <option value="1">Full Time</option>
                                                    <option value="2">Part Time</option>
                                                    <option value="2">Contract</option>
                                                    <option value="2">Remote</option>


                                                </select>
                                            </Col>
                                        </Row>

                                        <Row>

                                            <Col sm={6} >
                                                <select className="form-control inputText" onChange={changeGobs} placeholder="Job Preference" >
                                                    {
                                                        jobs.map((item, key) => (<option key={key} value={item.id}>{item.name}</option>))
                                                    }
                                                </select>
                                            </Col>
                                            <Col sm={1}></Col>
                                            <Col sm={5}>
                                            <input className=" form-control inputText" type="number"placeholder="salary"  name="salary" />

                                               
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={12}>
                                            <input className=" form-control inputText" type="number"placeholder="Experience"  name="experience" />

                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={12}>
                                            <input className=" form-control inputText" type="text"placeholder="About Me"  name="about" />

                                            </Col>
                                        </Row>

                                    </Col>



                                    <Col sm={1}>

                                    </Col>
                                    <Col sm={3}></Col>

                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <h1>heloo t2</h1>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            <Footer />
        </>
    )
}

export default ProfileEdit;