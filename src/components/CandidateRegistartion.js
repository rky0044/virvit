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
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const eye = <FontAwesomeIcon icon={faEye} />;


const CandidateRegistration = () => {

    const [skills, setSkills] = useState([]);
    const [errorSkills, setErrorSkills] = useState();

    const [jobs, setJobs] = useState([]);
    const [errorJobs, setErrorJobs] = useState([]);


    const [first_name, setFname] = useState("");
    const [errorFirst_name, setErrorFname] = useState("");


    const [last_name, setLname] = useState("");
    const [errorLirst_name, setErrorLname] = useState("");


    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("");


    const [gender, setGender] = useState("");
    const [errorGender, setErrorGender] = useState("");

    const [dob, setDob] = useState("");
    const [errorDob, setErrorDob] = useState("");

    const [start_work, setStartWork] = useState("");
    const [errorStart_work, setErrorStartWork] = useState("");

    const [mobile, setMobile] = useState("");
    const [errorMobile, setErrorMobile] = useState("");

    const [resume, setResume] = useState([]);
    const [errorResume, setErrorResume] = useState([]);

    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const [cpassword, setcPassword] = useState("");
    const [errorCpassword, seterrorCPassword] = useState("");


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
           
            setSkills(data.results);
        };

        const fetchJob = async () => {
            const response = await fetch(
                'https://virvit.mydevpartner.website/vvapi/v1/job-preference/'
            );
            const data = await response.json();
           
            setJobs(data.results);

        };
        fetchJob();
        fetchSkills();


    }, []);


    const [skillList, setSelectedSkills] = useState();
    const [job_preference, setSelectedJobs] = useState();

    const changeFname = (e) => {
        
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

       
        setSelectedJobs(event.target.value)
    }

    const changeResume = (event) => {

        setResume(event.target.files[0]);
       


    }
    const changeSkills = (event) => {
        let selectedIds = event.map(item => {
            return item.id
        })
       
        setSelectedSkills(selectedIds)
    }


    const handleGenderChange = (e) => {
       
        setGender(e.target.value)
    }
    const handleJobsChange = (event) => {
       
        setSelectedJobs(event.target.value)
    }
    //registration ...





    const handleSubmit = (e) => {
        e.preventDefault();
       
        if (skillList == undefined) {
            setErrorSkills('more the 3 skills is required')
           
        }
        if (job_preference == undefined) {
            setErrorJobs('select the jobs')
           
        }
        if (first_name == '') {

            setErrorFname('first name require');

        }
        if (last_name == '') {

            setErrorLname('Last name require')
        }
        if (email == '') {
            setErrorEmail('Email is required')
        }
        if (gender == '') {
            setErrorGender('gender is required')
        }
        if (dob == '') {
            setErrorDob('dob is required')
        }
        if (start_work == '') {
            setErrorStartWork('start work required')
        }
        if (mobile == '') {
            setErrorMobile('mobile is required')
        }
        if (resume == '') {
            setErrorResume('resume is required')
        }
        if (password == '') {
            setErrorPassword('password is required')
        }
        if (cpassword == '') {
            seterrorCPassword('confirm password')
        }


        if (first_name != '' && last_name != '' && email != '' && dob != '' && start_work != '' && skillList != '' &&
            job_preference != '' && password != '' && cpassword != '' && gender != '' && mobile != '' && resume != '') {
          


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

            //form validation

          

            axios.post('https://virvit.mydevpartner.website/vvapi/v1/new-user-signup/', formData).then((res) => {

               
            })

        }



    }


    return (
        <>
        <ToastContainer />
            <div className="Container-fluid">

                <Header />
                <div className="tabesContaints">
                    <Row>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                
                                <Col sm={6} className="text-center">
                                    <Nav variant="pills" className="flex-column ">

                                        <Nav.Item className="csignup">
                                            <Nav.Link eventKey="first" >Candidate Signup</Nav.Link>
                                        </Nav.Item>

                                    </Nav>
                                </Col>
                                <Col sm={6}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item className="csignup">
                                            <Nav.Link eventKey="second">Employer Signup</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <Row>

                                        <Col md={9}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="first">
                                                    <form onSubmit={handleSubmit}>


                                                        <Row>
                                                            <Col md={6}  >
                                                                <input className="form-control inputText " value={first_name || ''} type="text" id="fname" onChange={changeFname} placeholder="First Name" name="fname" />
                                                                <span><p className="requiredText">{errorFirst_name}</p></span>
                                                            </Col>
                                                            <Col md={6}>
                                                                <input className="form-control inputText " value={last_name || ''} onChange={(event) => setLname(event.target.value)} type="text" id="lname" placeholder="Last Name" name="lname" />
                                                                <span><p className="requiredText"> {errorLirst_name}</p></span>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col md={12}>
                                                                <input className="form-control inputText" value={email || ''} onChange={(event) => setEmail(event.target.value)} type="text" placeholder="Email" name="email" />
                                                                <span><p className="requiredText">{errorEmail}</p></span>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col md={6}>
                                                                <select className=" form-control inputText" value={gender} onChange={handleGenderChange} aria-label=".form-select-lg example">
                                                                    <option >Gender</option>
                                                                    <option value="1">Male</option>
                                                                    <option value="2">Female</option>

                                                                </select>
                                                                <span><p className="requiredText">{errorGender}</p></span>
                                                            </Col>
                                                            <Col md={6}>
                                                                <input className=" form-control inputText" type="date" value={dob || ''} onChange={(event) => setDob(event.target.value)} name="dob" />
                                                                <span><p className="requiredText">{errorDob}</p></span>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md={12}>
                                                                <input className="form-control inputText" type="text" value={mobile || ''} onChange={(event) => setMobile(event.target.value)} placeholder="Mobile" name="mobile" />
                                                                <span><p className="requiredText">{errorMobile}</p></span>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col md={12}>

                                                                <input type="date" className="form-control inputText" placeholder="Start Work" value={start_work || ''} onChange={(event) => setStartWork(event.target.value)} name="Start Work" />
                                                                <span><p className="requiredText">{errorStart_work}</p></span>
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
                                                                <span><p className="requiredText">{errorSkills}</p></span>
                                                            </Col>

                                                        </Row>

                                                        <Row>
                                                            <Col md={12}>

                                                                <select className="form-control inputText" onChange={changeGobs} placeholder="Job Preference" >
                                                                    {
                                                                        jobs.map((item, key) => (<option key={key} value={item.id}>{item.name}</option>))
                                                                    }
                                                                </select>
                                                                <span><p className="requiredText">{errorJobs}</p></span>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col md={12}>
                                                                <input className="form-control inputText" onChange={changeResume} id="formFileSm" type="file"></input>
                                                                <span><p className="requiredText">{errorResume}</p></span>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col md={12} className="pass-wrapper">
                                                                <input type={passwordShown ? "text" : "password"} className="form-control inputText" value={password || ''} onChange={(event) => setPassword(event.target.value)} placeholder="Password" name="password" />
                                                                <i onClick={togglePasswordVisiblity}>{eye}</i>
                                                                <span><p className="requiredText">{errorPassword}</p></span>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col md={12} className="pass-wrapper">
                                                                <input type={cpasswordShown ? "text" : "password"} className="form-control inputText" value={cpassword} onChange={(event) => setcPassword(event.target.value)} placeholder="Password Conform" name="cpassword" />
                                                                <i onClick={toggleCPasswordVisiblity}>{eye}</i>
                                                                <span><p className="requiredText">{errorCpassword}</p></span>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col md={12}>

                                                                <button type="submit" className="btn btn-primary col-md-8 registratinbtn ">Registration</button>

                                                            </Col>
                                                        </Row>



                                                    </form>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Col>
                                        <Col md={3}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="first">
                                                    <img src="./images/Candidate_Registration_Page2.png" width="500%" />
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