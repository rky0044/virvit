import './App.css';
import CandidateLogin from './components/CandidateLogin';
import CandidateRegistration from './components/CandidateRegistartion'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Registration from './components/CandidateRegistartion'
import Candidate from './components/Candidate';
import ProfileEdit from './components/ProfileEdit'
import JobDetails from './components/JobDetails'
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsCondition from './components/TermsCondition';
import ContactUs from './components/ContactUs';
import ForgetPassword from './components/ForgetPassword'




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<CandidateLogin />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/candidate' element={<Candidate />} />
        <Route path='/profile-edit' element={<ProfileEdit />} />
        <Route path='/candidate/jobDetails/:id' element={<JobDetails />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-and-conditions' element={<TermsCondition />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/forgot-password' element={<ForgetPassword />} />

      </Routes>
    </div>
  );
}

export default App;
