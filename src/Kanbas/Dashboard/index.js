import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css"
import color from "./Blue.png"
import {GiNotebook} from "react-icons/gi"

function Dashboard() {
    const courses = db.courses;
    return (
        <div className=" wd-padding-left wd-margin-top ">
            <h1>Dashboard</h1>
            <hr ></hr>
            <div class="wd-flex-grow-1 wd-margin-top wd-margin-left">
                <h4>Published Courses ({courses.length})</h4>
                <hr />
            </div>

            <div class="row row-cols-1 row-cols-md-3 g-4 d-flex flex-row flex-wrap wd-padding-left">
                {courses.map((course) => (
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card  wd-dashboard  wd-padding-0 wd-link">
                    <img src={color} class="card-img-top wd-img"/>
                    
                    <div class="card-body ">
                        <div class="card-title wd-fg-color-blue wd-margin-bottom wd-link wd-font-size-big">
                        {course.name} 
                        </div>
                        <p class="card-text wd-fg-color-gray wd-margin-bottom-0">  {course._id}.{course.number}.{course.Semester}
                            <div class="wd-font-small wd-fg-color-gray ">From {course.startDate} to {course.endDate}</div>
                         </p>
                        
                        <GiNotebook className="wd-fg-color-gray wd-font-size-big mt-1"/>
                    </div>
                </Link>
                ))}
            </div>
        </div>
  );
}
export default Dashboard;