import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css"
import color from "./Blue.png"
import {GiNotebook} from "react-icons/gi"

function Dashboard(
    {courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
      
) {
    // const [courses, setCourses] = useState(db.courses);
    // // const courses = db.courses;
    // const [course, setCourse] = useState({
    //     name: "New Course",      number: "New Number",
    //     startDate: "2023-09-10", endDate: "2023-12-15",
    //   });
    
    //   const addNewCourse = () => {
    //     setCourses([...courses,
    //               { ...course,
    //                 _id: new Date().getTime() }]);
    //   };
    
    //   const deleteCourse = (courseId) => {
    //     setCourses(courses.filter((course) => course._id !== courseId));
    //   };
    
    //   const updateCourse = () => {
    //     setCourses(
    //       courses.map((c) => {
    //         if (c._id === course._id) {
    //           return course;
    //         } else {
    //           return c;
    //         }
    //       })
    //     );
    //   };
    
    
    return (
        <div className=" wd-padding-left wd-margin-top ">
            <h1>Dashboard</h1>
            <hr ></hr>
            <div class="wd-flex-grow-1 wd-margin-top ms-3">
                <h4>Published Courses ({courses.length})</h4>
                <hr />
            </div>

            <div className="ms-4">
            <input value={course.name}  className="form-control"
                    onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <input value={course.number} className="form-control"
                    onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
            <input value={course.startDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
            <input value={course.endDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />


            <button className="btn wd-button  mt-2 me-2"
            onClick={addNewCourse} >
             Add
            </button>

            <button className="btn wd-button  mt-2 me-2"
            onClick={updateCourse} >
            Update
            </button>

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
                        
                        <GiNotebook className="wd-fg-color-gray wd-font-size-big mt-2"/>
                        
                        <button
                            className="btn btn-sm wd-button float-end mt-1"
                            onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                            }}>
                            Delete
                        </button>

                        <button
                            className="btn btn-sm wd-button float-end mt-1"
                            onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                        }}>
                        Edit
                        </button>
                    </div>
                </Link>
                ))}
            </div>
        </div>
  );
}
export default Dashboard;







// import { React, useState } from "react";
// import { Link } from "react-router-dom";
// import db from "../Database";
// import "./index.css"
// import color from "./Blue.png"
// import {GiNotebook} from "react-icons/gi"
// function Dashboard(
//     { courses, course, setCourse, addNewCourse,
//       deleteCourse, updateCourse }
//     ) {
    

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <h5>Course</h5>
//       <input value={course.name} className="form-control"
//              onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
//       <input value={course.number} className="form-control"
//              onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
//       <input value={course.startDate} className="form-control" type="date"
//              onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
//       <input value={course.endDate} className="form-control" type="date"
//              onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />

//     <button onClick={addNewCourse} >
//         Add
//       </button>

//       <button onClick={updateCourse} >
//         Update
//       </button>


//       <div className="list-group">
//         {courses.map((course) => (
//           <Link key={course._id}
//                 to={`/Kanbas/Courses/${course._id}`}
//                 className="list-group-item">

//             <button
//               onClick={(event) => {
//                 event.preventDefault();
//                 setCourse(course);
//               }}>
//               Edit
//             </button>

//                 <button
//                 onClick={(event) => {
//                   event.preventDefault();
//                   deleteCourse(course._id);
//                 }}>
//                 Delete
//               </button>
  
//             {course.name}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Dashboard





