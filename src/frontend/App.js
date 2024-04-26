
import "./App.css";

import Login from "./Login";

import RegistrationForm from "./RegistrationForm";
import StudentPage from "./StudentPage";
import Complaint from "./Complaint";
import Hostelirs from "./Hostelirs";
import Mess from "./Mess";
import Messages from "./Messages";
import Home from './Home';
import PrivateComponent from './PrivateComponent'
import Update from './Update'




import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Warden from "./Warden";



function App() {
  return (
    <>
    
      <Router>
    
    
       <Routes>
       
        <Route element={<PrivateComponent/>} >
        
         <Route path="/Warden" element={<Warden/>}/>
        <Route path="/StudentPage" element={<StudentPage/>} /> 
        <Route path="/Complaint" element={<Complaint />} /> 
        <Route path="/Messages" element={<Messages/>} />
        <Route path="/Hostelirs" element={<Hostelirs />} />
        <Route path="/Mess" element={<Mess />} />
        <Route path="/Update/:id" element={<Update />} />
       
        </Route>
        <Route path="/" element={<Home/>} />
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Login" element={<Login />} />
        
         
      </Routes>

  </Router>

    </>
  );
}

export default App;
