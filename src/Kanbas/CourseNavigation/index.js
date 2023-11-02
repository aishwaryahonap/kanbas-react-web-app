import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css"
import db from "../../Kanbas/Database";

function CourseNavigation({courses}) {
  const links = ["Home", "Modules","Piazza", "Assignments", "Quizzes","Grades", "People"];
  // const courses=db.courses;
 
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div className="list-group wd-course-navigation" style={{ width: 180 }}>
      <div className="wd-fg-color-gray wd-font-size-small wd-margin-bottom">
         {course.number}{course.Semester}
      </div>
      
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname.includes(link) && "wd-active"}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}


export default CourseNavigation;