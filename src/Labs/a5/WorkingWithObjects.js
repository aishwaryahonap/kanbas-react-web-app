import React, {useEffect, useState } from "react";
import axios from "axios";
import { GiCheckedShield } from "react-icons/gi";
const API_BASE = process.env.REACT_APP_API_BASE;
const URL=`${API_BASE}/a5/assignment`;
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2023-10-10",
        completed: true,
        score: 20,
      });
      //const URL = "http://localhost:4000/a5/assignment"
     //var a;
      const fetchAssignment = async () => {
        const response = await axios.get(`${URL}`);
        setAssignment(response.data);
        
      };
      const updateTitle = async () => {
        const response = await axios
          .get(`${URL}/title/${assignment.title}`);
        setAssignment(response.data);
       // a=response.data
      };
      useEffect(() => {
        fetchAssignment();
      }, []);
    
  return (
    <div>
      <br/><hr/> <br/>
      <h3>Working With Objects</h3>

      <h4>Modifying Properties</h4>
      <a
        href={`${URL}/title/${assignment.title}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Title
      </a>
      <input
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}
        className="form-control mb-2 w-75"
        type="text" />
                
        <br/>
         <h5>Title: {assignment.title}</h5> 
         {JSON.stringify(assignment,null,2)}
         <br/>
         <br/>
        <button onClick={updateTitle}
              className="w-100 btn btn-primary mb-2">
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment}
              className="w-100 btn btn-danger mb-2">
        Fetch Assignment
       
      </button>
      <br/><br/>



      <h4>Retrieving Objects</h4>
      <a 
        //href="http://localhost:4000/a5/assignment"
        href={`${URL}`}
         className="btn btn-primary me-2">
        Get Assignment
      </a>

      <h4>Retrieving Properties</h4>
      <a
        //href="http://localhost:4000/a5/assignment/title"
        href={`${URL}/title`}
        className="btn btn-primary me-2">
        Get Title
      </a>
      <h4>Modifying Score (Extra Credit) </h4>
      <a
        href={`${URL}/score/${assignment.score}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Score 
      </a>
      <input
        onChange={(e) => setAssignment({ ...assignment,
            score: e.target.value })}
        value={assignment.score}
        className="form-control mb-2 w-75"
        type="number" />
        
        
        <h4>Update Complete Assignment (Extra Credit)</h4>
        <input 
        onClick={(e) => setAssignment({ ...assignment,
                    completed: e.target.checked 
                })}
        type="checkbox" 
        id="c"
        checked={assignment.completed} />
        <label for="c">
            Assignment Completed
        </label> 
        <a href={`${URL}/completed/${assignment.completed}`}
            className="btn btn-primary me-2 float-end">View Updates (Assignment Completed)</a>
        <br/>
        
      
    </div>
  );
}
export default WorkingWithObjects;