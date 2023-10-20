import db from "../Database";
import { useParams } from "react-router-dom";
import {PiTelevisionSimpleBold} from "react-icons/pi"
import {AiFillCaretDown} from "react-icons/ai"
import {LiaFileExportSolid} from "react-icons/lia"
import{LiaFileImportSolid} from "react-icons/lia"
import {BsFillGearFill} from "react-icons/bs"
import {HiOutlineFunnel} from "react-icons/hi2"
import "./index.css"
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignment.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <div className="row mt-3">
        <div className="col wd-fg-color-red">
            Gradebook
            <AiFillCaretDown/>
            {/* <PiTelevisionSimpleBold className="float-end"/> */}
        </div>
        <div className="col me-2 ">
        <div class=" wd-button btn btn-secondary btn-sm float-end"> <BsFillGearFill className="me-1 "/>
          </div>

          <div class=" wd-button btn btn-secondary btn-sm float-end "> <LiaFileImportSolid className="me-1 "/>Export 
          </div>

          <div class=" wd-button btn btn-secondary btn-sm float-end"> <LiaFileExportSolid className="me-1 "/>Import 
          </div>
          
        </div>
      </div>
      
      <div className="row mt-3">
        <div className="col fw-bold">
            <h5>Student Name</h5>
        </div>
        <div className="col fw-bold">
                <h5>Assignment Name</h5>
        </div>
      </div>

      <div className="row">
        <div className="col">
            <input classname="form-control " placeholder="Search Students"/>
        </div>
        <div className="col">
            <input classname="form-control " placeholder="Search Assignments"/>
        </div>
      </div>

      <div className="row mt-4">
          <div className="col-2">
            <div class=" wd-button btn btn-light wd-width"> <HiOutlineFunnel className="me-1 "/>Apply Filters
            </div>
          </div>
          
      </div>
      <div className="table-responsive mt-4 ">
        <table className="table table-striped table-bordered">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr className="wd-table-border">
                   <td className="wd-fg-color-red">{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
        </tbody></table>
      </div></div>);
}
export default Grades;
