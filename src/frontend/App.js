import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Login from "./Login";
import Footer from "./Footer";
import RegistrationForm from "./RegistrationForm";
import StudentPage from "./StudentPage";
import Complaint from "./Complaint";
import Hostelirs from "./Hostelirs";
import Mess from "./Mess";
import Messages from "./Messages";
import Home from './Home';
import privateComponent from './privateComponent'




import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Warden from "./Warden";



function App() {
  return (
    <>
    
      <Router>
    
    
       <Routes>
       
        <Route element={<privateComponent/>} >
        
         <Route path="/Warden" element={<warden/>}/>
        <Route path="/StudentPage" element={<StudentPage />} /> 
        <Route path="/Complaint" element={<Complaint />} /> 
        <Route path="/Messages" element={<Messages/>} />
        <Route path="/Hostelirs" element={<Hostelirs />} />
        <Route path="/Mess" element={<Mess />} />
       
        </Route>
        
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Login" element={<Login />} />
        
         
      </Routes>

  </Router>

    </>
  );
}

export default App;
