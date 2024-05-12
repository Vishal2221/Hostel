import "./App.css";

import RegistrationForm from "./RegistrationForm";
import StudentPage from "./StudentPage";
import Complaint from "./Complaint";
import Hostelirs from "./Hostelirs";
import UploadButton from "./UploadButton"
import Messages from "./Messages";
import Home from "./Home";

import Update from "./Update";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Warden from "./Warden";

function App() {
  const User_Type = {
    public: "PUBLIC",
    student: "STUDENT",
    admin: "ADMIN",
  };

  function publicElement({ children }) {
    return <>{children}</>;
  }

  function AdminElement({ children }) {
    if (Current_User === User_Type.admin) {
      return <>{children}</>;
    }
  }

  function StudentElement({ children }) {
    if (Current_User === User_Type.student) {
      return <>{children}</>;
    }
  }
  var Current_User = User_Type.admin;
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/home"
            element={
              <publicElement>
                <Home />
              </publicElement>
            }
          ></Route>
          <Route
            path="/Warden"
            element={
              <AdminElement>
                <Warden />
              </AdminElement>
            }
          />
          <Route
            path="/UploadButton"
            element={
              <AdminElement>
                <UploadButton />
              </AdminElement>
            }
          />
          <Route
            path="/Hostelirs"
            element={
              <AdminElement>
                <Hostelirs />
              </AdminElement>
            }
          />
          <Route
            path="/Update/:id"
            element={
              <AdminElement>
                <Update />
              </AdminElement>
            }
          />
          <Route
            path="/Messages"
            element={
              <AdminElement>
                <Messages />
              </AdminElement>
            }
          />
          <Route
            path="/RegistrationForm"
            element={
              <AdminElement>
                <RegistrationForm />
              </AdminElement>
            }
          />

          <Route
            path="/complaint"
            element={
              <StudentElement>
                <Complaint />
              </StudentElement>
            }
          />

          <Route
            path="/StudentPage"
            element={
              <StudentElement>
                <StudentPage />
              </StudentElement>
            }
          />
        </Routes>
      </Router>

      {/* <Router>
        <Routes>
           <Route element={<PrivateComponent />}>
            <Route path="/Warden" element={<Warden />} />
            <Route path="/StudentPage" element={<StudentPage />} />
            <Route path="/Complaint" element={<Complaint />} />
            <Route path="/Messages" element={<Messages />} />
            <Route path="/Hostelirs" element={<Hostelirs />} />
            <Route path="/Mess" element={<Mess />} />
            <Route path="/Update/:id" element={<Update />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
