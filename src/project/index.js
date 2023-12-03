import Signin from "../project/users/signin.js";
import Account from "../project/users/account";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import UserTable from "../project/users/table.js";
import Nav from "../project/users/nav.js";
import Signup from "./users/signup.js";
function Project() {
  return (
    <div className="row">
      <div className="col-2">
        {/* <Nav /> */}
        <div className="list-group mt-3 ms-3">
            
            <Link to="/project/home/" className="list-group-item">
                Home
            </Link>
            {/* <Link to="/project/search/" className="list-group-item">
                Search
            </Link> */}
            <Link to="/project/signin/" className="list-group-item">
                Signin
            </Link>
            <Link to="/project/signup/" className="list-group-item">
                Signup
            </Link>
            <Link to="/project/account/" className="list-group-item">
                Account
            </Link>
            <Link to="/project/table/" className="list-group-item">
                Users
            </Link>
        </div>   
      </div>
      <div className="col-10">
        <Routes>
          <Route path="/" element={<Navigate to="/project/home" />} />
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