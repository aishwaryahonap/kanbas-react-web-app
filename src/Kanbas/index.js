import { Navigate, Route, Routes } from "react-router";
import KanbasNavigation from "./KanbasNavigation/KanbasNavigation";
import Dashboard from "./Dashboard/index.js"
import Account from "./Account/index.js"
import Courses from "./Courses/index.js"
import CourseNavigation from "./CourseNavigation";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  
  const setCourse_ID=new Date().getTime().toString();

  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15"
  });

  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id:setCourse_ID}]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

   return (
    <Provider store={store}>
     <div className="d-flex">
       <div>
            <KanbasNavigation/>

       </div>
       <div className="col">
         <Routes>
         <Route path="/" element={<Dashboard/>}/>
            <Route path="Account/*" element={<Account/>}/>
            <Route path="Dashboard/" element={
            <Dashboard
            courses={courses}
            course={course}
            setCourse={setCourse}
            addNewCourse={addNewCourse}
            deleteCourse={deleteCourse}
            updateCourse={updateCourse}/>
            }/>
            <Route path="Courses" element={<Navigate to={"RS101/Home"} />} />
             <Route path="Courses/:courseId/*" element={
             <Courses courses={courses} />} />

         </Routes>
       </div>
     </div>
     </Provider>
   );
 }
 export default Kanbas;