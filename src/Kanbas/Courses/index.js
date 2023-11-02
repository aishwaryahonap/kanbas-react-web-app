import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import CourseNavigation from "../CourseNavigation/index.js"
import Modules from "../Modules";
import Home from "../Home";
import {FaBars} from "react-icons/fa6"
import "./index.css"
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/AssignmentEditor";
import{BiGlassesAlt} from "react-icons/bi"
import StudentViewButton from "./StudentViewButton";
import Grades from "../Grades";

function Courses({ courses }) {
  const { courseId } = useParams();
  const {pathname}=useLocation();
  const[slash, kanbas,courses1,id,screen,assignment]=pathname.split("/");
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <div className="row">
        <div className="col">
          {/* breadcrumb */}
          <nav class="wd-flex-grow-1 wd-inline"  aria-label="breadcrumb">
              <ol class="breadcrumb ms-3 mt-3" >
                <li class="breadcrumb-item wd-fg-color-red wd-font-size-large">
              <FaBars className="me-2"/>
              {course.name}({course.number})
                  </li>
                {/* {!assignment && <li class="breadcrumb-item active wd-inline wd-font-size-large" aria-current="page"> {screen} </li>}  */}
                <li className={`breadcrumb-item wd-inline wd-font-size-large ${!pathname.includes(assignment)? "active" : "wd-fg-color-red"}`}> {screen} </li>
                {assignment && <li class="breadcrumb-item active wd-inline wd-font-size-large" aria-current="page"> {assignment} </li>}         
              
            </ol>    
          </nav>
        </div>
        <div className="col-2 mt-3">
          {/* <div class=" wd-button btn btn-secondary me-4 wd-width float-end wd-inline"> <BiGlassesAlt className="me-1 "/>Student View
          </div>  */}
          {pathname.includes("Home") && <StudentViewButton/>}
          {pathname.includes("Modules") && <StudentViewButton/>}
        </div>
      </div>
      <CourseNavigation courses={courses}/>
      <div>
        <div  
          className="overflow-y-scroll position-fixed bottom-0 end-0  "
          style={{
            left: "320px",
            top: "70px",
          }}
        >
          
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;