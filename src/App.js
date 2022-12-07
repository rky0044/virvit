import './App.css';
import CandidateLogin from './components/CandidateLogin';
import CandidateRegistration from './components/CandidateRegistartion'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Registration from './components/CandidateRegistartion'
import Candidate from './components/Candidate';
import ProfileEdit from './components/ProfileEdit'




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<CandidateLogin />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/candidate' element={<Candidate />} />
        <Route path='/profile-edit' element={<ProfileEdit />} />

      </Routes>
    </div>
  );
}

export default App;
