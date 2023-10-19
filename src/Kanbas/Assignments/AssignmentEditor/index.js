import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import {AiOutlineCheckCircle} from "react-icons/ai"
import {FaEllipsisVertical} from "react-icons/fa6"


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignment.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="me-3">
         <div class="wd-button  btn btn-secondary me-3 float-end"> <FaEllipsisVertical/>
        </div>
        <div class=" btn btn-light me-3 wd-width float-end"> <AiOutlineCheckCircle className="me-1 wd-color-green"/>Publish All
        </div>
        <br/><br/>
      <h4>Assignment Name</h4>
      <input value={assignment.title}
             className="form-control mb-2" />
             <br/>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger float-end mt-2">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2 float-end mt-2">
        Save
      </button>
    </div>
  );
}


export default AssignmentEditor;