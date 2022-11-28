import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Header from "./Header";
import Footer from "./Footer";
import Multiselect from 'multiselect-react-dropdown';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;


const CandidateRegistration = () => {

    const [skills, setSkills] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [first_name, setFname] = useState("");
    const [last_name, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [start_work, setStartWork] = useState("");
    const [mobile, setMobile] = useState("");
    const [resume, setResume] = useState([]);
    const [password, setPassword] = useState("");
    const [cpassword, setcPassword] = useState("");

    const [workst, setWorkst] = useState("");
    const [selected, setSelected] = useState([]);
    const [passwordShown, setPasswordShown] = useState(false);
    const [cpasswordShown, setCPasswordShown] = useState(false);





    // GET with fetch API
    useEffect(() => {
        const fetchSkills = async () => {
            const response = await fetch(
                'https://virvit.mydevpartner.website/vvapi/v1/skill/'
            );
            const data = await response.json();
            console.log(data.results);
            setSkills(data.results);
        };

        const fetchJob = async () => {
            const response = await fetch(
                'https://virvit.mydevpartner.website/vvapi/v1/job-preference/'
            );
            const data = await response.json();
            console.log(data, "job data");
            setJobs(data.results);

        };
        fetchJob();
        fetchSkills();


    }, []);


    const [skillList, setSelectedSkills] = useState();
    const [job_preference, setSelectedJobs] = useState();

    const changeFname= (e) =>{
        console.log(e.target.value,"this is f name");
        setFname(e.target.value);


    }

    //pass eye hide and show
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    //confirm password eye button show
    const toggleCPasswordVisiblity = () => {
        setCPasswordShown(cpasswordShown ? false : true);
    };
    const changeGobs = (event) => {

        console.log(event.target.value, "change jobs");
        setSelectedJobs(event.target.value)
    }

    const changeResume = (event) => {

        setResume(event.target.files[0]);
        console.log(event.target.files[0], "File uploadddd");


    }
    const changeSkills = (event) => {
        let selectedIds = event.map(item => {
            return item.id
        })
        console.log(selectedIds, "skill idddd")
        setSelectedSkills(selectedIds)
    }


    const handleGenderChange = (e) => {
        console.log(e.target.value)
        setGender(e.target.value)
    }
    const handleJobsChange = (event) => {
        console.log(event.target.value);
        setSelectedJobs(event.target.value)
    }
    //registration ...

    const handleSubmit = (e) => {
        e.preventDefault();


        let formData = new FormData();
        formData.append('first_name', first_name);
        formData.append('last_name', last_name);
        formData.append('email', email);
        formData.append('dob', dob);
        formData.append('start_work', start_work);
        formData.append('skillList', JSON.stringify(skillList));
        formData.append('job_preference', job_preference);
        formData.append('password', password);
        formData.append('cpassword', cpassword);
        formData.append('gender', "Male");
        formData.append('device_id', '1');
        formData.append('role', 'Candidate');
        formData.append('dial_code', '+91');
        formData.append('country_code', 'IN');
        formData.append('mobile', mobile);
        formData.append('resume', resume);


        console.log(first_name, last_name, email, dob, mobile, start_work, resume, skillList, job_preference, password, cpassword, gender, "submint form data");

        axios.post('https://virvit.mydevpartner.website/vvapi/v1/new-user-signup/', formData).then((res) => {

            console.log(res);
        })


    }


    return (
        <>
            <div className="Container-fluid">

                <Header />
                <div className="tabesContaints">
                    <Row>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={6}>
                                    <Nav variant="pills" className="flex-column ">

                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Candidate Signup</Nav.Link>
                                        </Nav.Item>

                                    </Nav>
                                </Col>
                                <Col sm={6}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Employer Signup</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <Row>

                                        <Col md={10}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="first">
                                                    <form onSubmit={handleSubmit}>


                                                        <Row>
                                                            <Col md={6}  >
                                                                <input className="form-control inputText " value={first_name || ''} type="text" id="fname" onChange={changeFname} placeholder="First Name" name="fname" />
                                                            </Col>
                                                            <Col md={6}>
                                                                <input className="form-control inputText " value={last_name || ''} onChange={(event) => setLname(event.target.value)} type="text" id="lname" placeholder="Last Name" name="lname" />
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col md={12}>
                                                                <input className="form-control inputText" value={email || ''} onChange={(event) => setEmail(event.target.value)} type="text" placeholder="Email" name="email" />
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col md={6}>
                                                                <select className=" form-control inputText" value={gender} onChange={handleGenderChange} aria-label=".form-select-lg example">
                                                                    <option >Gender</option>
                                                                    <option value="1">Male</option>
                                                                    <option value="2">Female</option>

                                                                </select>
                                                            </Col>
                                                            <Col md={6}>
                                                                <input className=" form-control inputText" type="date" value={dob || ''} onChange={(event) => setDob(event.target.value)} name="dob" />
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md={12}>
                                                                <input className="form-control inputText" type="text" value={mobile || ''} onChange={(event) => setMobile(event.target.value)} placeholder="Mobile" name="mobile" />
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col md={12}>
                                                                <input type="date" className="form-control inputText" placeholder="Start Work" value={start_work || ''} onChange={(event) => setStartWork(event.target.value)} name="Start Work" />
                                                            </Col>

                                                        </Row>

                                                        <Row>
                                                            <Col md={12}>

                                                                <Multiselect
                                                                    options={skills}
                                                                    selectedValues=""
                                                                    displayValue="name"
                                                                    onSelect={changeSkills}
                                                                    showCheckbox
                                                                    id="id"
                                                                    className="form-control inputText"
                                                                    placeholder="Key Skills"
                                                                />
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col md={12}>

                                                                <select className="form-control inputText" onChange={changeGobs} placeholder="Job Preference" >
                                                                    {
                                                                        jobs.map((item,key) => (<option key={key} value={item.id}>{item.name}</option>))
                                                                    }
                                                                </select>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col md={12}>
                                                                <input className="form-control inputText" onChange={changeResume} id="formFileSm" type="file"></input>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col md={12} className="pass-wrapper">
                                                                <input type={passwordShown ? "text" : "password"} className="form-control inputText" value={password || ''} onChange={(event) => setPassword(event.target.value)} placeholder="Password"  name="password" />
                                                                <i onClick={togglePasswordVisiblity}>{eye}</i>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col md={12} className="pass-wrapper">
                                                                <input type={cpasswordShown ? "text" : "password"} className="form-control inputText" value={cpassword} onChange={(event) => setcPassword(event.target.value)} placeholder="Password Conform"  name="cpassword" />
                                                                <i onClick={toggleCPasswordVisiblity}>{eye}</i>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col md={12}>

                                                                <button type="submit" className="btn btn-primary col-md-8 ">Registration</button>

                                                            </Col>
                                                        </Row>



                                                    </form>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Col>
                                        <Col md={2}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="first">
                                                    <img src="./images/Candidate_Registration_Page2.png" />
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Col>

                                    </Row>


                                </Col>
                                <Col sm={6}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="second">
                                            <h1>2222</h1>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Row>
                </div>



                <Footer />
            </div>

        </>
    )
}

export default CandidateRegistration;