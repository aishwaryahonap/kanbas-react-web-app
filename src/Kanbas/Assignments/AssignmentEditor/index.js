import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import {AiOutlineCheckCircle} from "react-icons/ai"
import {FaEllipsisVertical} from "react-icons/fa6"
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "../assignmentsReducer";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  // const assignment = db.assignment.find(
  // (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();

  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
//  const assignment1 = assignments.find(
//  (assignment) => assignment._id === assignmentId);


 const handleSave = () => {
 dispatch(updateAssignment(assignment._id))
 navigate(`/Kanbas/Courses/${courseId}/Assignments`);
};
  const dispatch = useDispatch();
  
  return (
    <div className="me-5 ms-2">
         <div class="wd-button  btn btn-secondary me-3 float-end"> <FaEllipsisVertical/>
        </div>
        <div class=" btn btn-light me-3 wd-width float-end"> <AiOutlineCheckCircle className="me-1 wd-color-green"/>Publish All
        </div>
        <br/><br/>

          {/* {assignmentId} */}
          <div className="row">
          <h5>Assignment Name:</h5>
          <input
           className="ms-3"
            value={assignment.title}
            title="Enter Assignment Name"
            onChange={(e) => 
            dispatch(setAssignment({ ...assignment, title: e.target.value }))
            }
          />
        </div>
    

        <div className="row mt-4">
        <h5>Assignment Description:</h5>
          <textarea
              value={assignment.description}
              className="ms-3"
              title="Enter Assignment Description"
              onChange={(e) => 
              dispatch(setAssignment({ ...assignment, description: e.target.value }))
          }/>
        </div>

        <div className="row mt-4">
          <h5>Points:</h5>
          <input
           className="ms-3"
           value={assignment.points}
           title="Enter Assignment Points"
           onChange={(e) => 
           dispatch(setAssignment({ ...assignment, points  : e.target.value }))
         }
         />
        </div>
      <div className="row mt-4">
          <table className="ms-3">
            <tr>
              <td>
                   <h5> Assign:</h5>
              </td>
              <td>
                <label>Due:</label><br/>
              <input
                  className=""
                    value={assignment.due}
                    title="Enter Assignment Due Date"
                    type="date"
                    onChange={(e) => 
                    dispatch(setAssignment({ ...assignment, due: e.target.value }))
                  }
                  />
                <br/><br/>
                <label className="me-4">Available From:</label>
                <label className="ms-5">Available Until:</label> <br/>

                <input
                  className=""
                    value={assignment.availableFromDate}
                    title="Enter Assignment Available from Date"
                    type="date"
                    onChange={(e) => 
                    dispatch(setAssignment({ ...assignment, availableFromDate  : e.target.value }))
                  }
                  />

                  <input
                  className=" ms-5"
                    value={assignment.availableUntilDate}
                    title="Enter Assignment Available Until Date"
                    type="date"
                    onChange={(e) => 
                    dispatch(setAssignment({ ...assignment, availableUntilDate  : e.target.value }))
                  }
                  />
              </td>
            </tr>
          </table>       
      </div>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger float-end mt-5">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2 float-end mt-5">
        Save
      </button>
      
    </div>
  );
}



export default AssignmentEditor;