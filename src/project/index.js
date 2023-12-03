import Signin from "../project/users/signin.js";
import HomePage from "../project/users/home.js";
import Account from "../project/users/account";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import UserTable from "../project/users/table.js";
import Nav from "../project/users/nav.js";
import Signup from "./users/signup.js";
import "../../src/index.css"
function Project() {
  return (
    <div className="row mt-2">
      <div className="col-2">
        {/* <Nav /> */}
        <div className="list-group mt-3 ms-5 me-5 " >

            <Link to="/project/home/" className="list-group-item " style={{ border: '1px solid', textAlign: 'center' }}>
                Home
            </Link>
            <Link to="/project/signin/" className="list-group-item" style={{ border: '1px solid', textAlign: 'center' }} >
                Signin
            </Link>
            <Link to="/project/signup/" className="list-group-item" style={{ border: '1px solid', textAlign: 'center' }}>
                Signup
            </Link>
            <Link to="/project/account/" className="list-group-item" style={{ border: '1px solid', textAlign: 'center' }}>
                Account
            </Link>
            <Link to="/project/table/" className="list-group-item" style={{ border: '1px solid', textAlign: 'center' }}>
                Users
            </Link>

           
        </div>   
      </div>
      <div className="col-10">
        <Routes>
          <Route path="/" element={<Navigate to="/project/home" />} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/:id" element={<Account />} />
          <Route path="/table" element={<UserTable />} />
        </Routes>
        
      </div>
    </div>
  );
}
export default Project;