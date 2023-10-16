import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import CourseNavigation from "../CourseNavigation/index.js"
import Modules from "../Modules";
import Home from "../Home";
import {FaBars} from "react-icons/fa6"
import "./index.css"

function Courses() {
  const { courseId } = useParams();
  const {pathname}=useLocation();
  const[slash, kanbas,courses,id,screen]=pathname.split("/");
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
        {/* breadcrumb */}
        <nav class="wd-flex-grow-1 wd-inline"  aria-label="breadcrumb">
            <ol class="breadcrumb ms-3 mt-3" >
              <li class="breadcrumb-item wd-fg-color-red wd-font-size-large">
             <FaBars className="me-2"/>
             {course.name}
                </li>
              <li class="breadcrumb-item active wd-inline wd-font-size-large" aria-current="page"> {screen} </li>
            
           </ol>    
        </nav>
      <CourseNavigation />
      <div>
        <div  
          className="overflow-y-scroll position-fixed bottom-0 end-0 "
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<h1>Assignments</h1>} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;