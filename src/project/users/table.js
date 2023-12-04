import React, { useState, useEffect } from "react";
import { BsTrash3Fill, BsPlusCircleFill, BsFillCheckCircleFill, BsPencil }  from "react-icons/bs";
import * as client from "./client";
import { Link } from "react-router-dom";
function UserTable() {
    const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  const [user, setUser] = useState({ username: "", password: "", role: "USER" });

  const [currentUser, setCurrentUser]= useState(null);
  const fetctUser=async()=>{
    const user=await client.account();
    setCurrentUser(user);
  };

  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };
   

//   const createUser = async () => {
//     try {
//       const newUser = await client.createUser(user);
//       setUsers([newUser, ...users]);
//     } catch (err) {
//       console.log(err);
//     }
//   };

const createUser= async () => {
    try {
      await client.signup(user);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const selectUser = async (user) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => { 
    fetchUsers(); 
    fetctUser();
}, []);


const printDetails = ( user) =>{
    alert("(EXTRA CREDIT) \n"+
        JSON.stringify(user, null,2))
}
  return (
    <div className="mt-3">
    <h2>List of Users </h2>
    {!currentUser && (
        <h3>Not Logged In!!</h3>
    )}

    {currentUser && currentUser.role !=="ADMIN" &&(
        <h3>Unauthorised! 
        Only ADMINS can view full user list</h3>
    ) }

    {currentUser && currentUser.role==="ADMIN" && (
      <>

      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>

          <tr>
            <td>
              <input placeholder="Username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}/>
              <input placeholder="Password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>
              
            </td>
            <td>
              <input placeholder="First Name" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
            </td>
            <td>
              <input placeholder="Last Name" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
            </td>
            <td>
              <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td>
             {/* <button type="button" className="btn btn-light">
              <BsPlusCircleFill onClick={createUser}/>
              </button> */}
            <button type="button" className="btn btn-light">
            <BsFillCheckCircleFill onClick={updateUser}
            className=" text-success fs-1 " />
            </button>

            {/* <button type="button" className="btn btn-light">
             <BsPlusCircleFill onClick={createUser}
             className="text-success fs-1 " />
            </button> */}

            </td>
          </tr>


        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>

                {user.username && (
                <button type="button" className="btn btn-light"
                style={{ color: 'blue' }}
                onClick={() => printDetails(user)}>
                   <u> {user.username}</u>
                </button>
                )}
                {/* <Link to={`/project/account/${user._id}`}>
                    {user.username}
                </Link> */}
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td >
                <button className="btn btn-danger me-2">
                <BsTrash3Fill onClick={() => deleteUser(user)} />
                </button>
                <button className="btn btn-warning me-2">
                <BsPencil onClick={() => selectUser(user)} />
                </button>
            </td>
            </tr>))}
        </tbody>
      </table>
      </>
        )}
    </div>
  );
}
export default UserTable;