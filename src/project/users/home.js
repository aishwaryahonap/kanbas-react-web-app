import { useEffect, useState } from "react";
import * as client from "./client";
import { Link } from "react-router-dom";
function HomePage() {
    const [currentUser, setCurrentUser]= useState(null);
    const fetctUser=async()=>{
      const user=await client.account();
      setCurrentUser(user);
    };

    useEffect(() => { 
        fetctUser();
    }, []);

const BASE_API = process.env.REACT_APP_API_BASE;
const USERS_API = `${BASE_API}/api/users`;
  return (
    <div className="mt-2">
        <a className="float-end me-4 mt-2" 
        href={`${USERS_API}`}
        >
        Link to the Database
        </a>

       <h2>Home Page</h2>
       
       {!currentUser && (
        <>
        <h3>Not Logged In!!</h3>
        <Link to="/project/signin/" >
                Signin
        </Link> 
        
        <Link to="/project/signup/" className="ms-3" >
                Signup
        </Link>

       
        
        </>
        )}

        {currentUser && (
            <>
            Welcome {currentUser.username}!
            </>
        )}


    </div>
    
  );
}
export default HomePage;