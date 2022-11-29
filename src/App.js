import './App.css';
import CandidateLogin from './components/CandidateLogin';
import CandidateRegistration from './components/CandidateRegistartion'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Registration from './components/CandidateRegistartion'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<CandidateLogin />} />
        <Route path='/registration' element={<Registration />} />


      </Routes>


    </div>
  );
}

export default App;
