import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/project/account");
  };
  return (
    <div className="mt-2">
      <h1>Signin</h1>
      <label>Username: </label>
      <input value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      <br/>
      <br/>

      <label>Password: </label>
      <input value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      <br/><br/>
      <button type="button" className="btn btn-secondary"
      onClick={signin}> Signin </button>
    </div>
  );
}
export default Signin;