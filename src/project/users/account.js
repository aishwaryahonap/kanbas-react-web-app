import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams  } from "react-router-dom";
function Account() {
    const { id } = useParams();
  const [account, setAccount] = useState(null);
  

  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };

  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };


  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);

//
//   useEffect(() => {
//     fetchAccount();
//   }, []);

  const save = async () => {
    await client.updateUser(account);
  };


  return (
    <div className="w-50 mt-3 ">
        <h1>Account's Page</h1>
      {/* <h2>Hello {account.username} !</h2> */}

      {!account && (
        <div>
            <h3> Not logged in!</h3>
        </div>
      )}
      
      {account && (
         
        <div>
          <h3>Username: {account.username} !</h3>

          <label>Password: </label>
          <input value={account.password}
            onChange={(e) => setAccount({ ...account,
              password: e.target.value })}/>

            <br/><br/>
            <label>First Name: </label>
          <input value={account.firstName}
            onChange={(e) => setAccount({ ...account,
              firstName: e.target.value })}/>

            <br/><br/>
            <label>Last Name: </label>
          <input value={account.lastName}
            onChange={(e) => setAccount({ ...account,
              lastName: e.target.value })}/>

            <br/><br/>  
            <label>Date of Birth: </label>
          <input value={account.dob}
          type="date"
            onChange={(e) => setAccount({ ...account,
              dob: e.target.value })}/>

            <br/><br/>
        <label>Email ID: </label>
          <input value={account.email}
            onChange={(e) => setAccount({ ...account,
              email: e.target.value })}/>
        
        <br/><br/>
        <label>Type: </label>
          <select onChange={(e) => setAccount({ ...account,
              role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        
        <br/><br/>
        <button  type="button" className="btn btn-primary me-3"
        onClick={save}>
            Save
        </button>

        <button type="button" className="btn btn-danger me-3"
        onClick={signout}>
        Signout
        </button>


        {account.role === "ADMIN" && (
            <Link to="/project/table" className="btn btn-warning ">
            Users
            </Link>
        )}

        </div>
      )}
    </div>
  );
}
export default Account;