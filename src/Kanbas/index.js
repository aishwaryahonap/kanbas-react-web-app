import { Navigate, Route, Routes } from "react-router";
import KanbasNavigation from "./KanbasNavigation/KanbasNavigation";
import Dashboard from "./Dashboard/index.js"
import Account from "./Account/index.js"
import Courses from "./Courses/index.js"
import CourseNavigation from "./CourseNavigation";
import db from "./Database";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const URL= `${API_BASE}/api/courses`;

function Kanbas() {
 // const [courses, setCourses] = useState(db.courses);
 const [courses, setCourses] = useState([]);

 //const URL = "http://localhost:4000/api/courses";
 //const URL = "https://kanbas-node-server-app-t0sw.onrender.com/api/courses";


 const findAllCourses = async () => {
   const response = await axios.get(URL);
   setCourses(response.data);
 };
 useEffect(() => {
   findAllCourses();
 }, []);

  
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", _id:"", code:"", Semester:"Fall 2023"
  });

  // const addNewCourse = () => {
  //   // setCourses([...courses, { ...course, _id: new Date().getTime().toString()}]);
  //   const id = new Date().getTime().toString();
  //   const newCourse = {
  //   ...course,
  //   _id: id
  // }
  //   setCourses([...courses, newCourse]);
  // };

  const addCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      ...courses,
      response.data,
      
    ]);
    setCourse({ name: "New Course",  number: "New Number",  startDate: "2023-09-10", endDate: "2023-12-15", code:"", Semester:"Fall 2023"});
  };


  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

  const deleteCourse = async (course) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter(
      (c) => c._id !== course._id));
  };

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

  const updateCourse = async () => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );

    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        //  else {
          return c;
        // }
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
         <Route path="/" element={<Dashboard

         />}/>
            <Route path="Account/*" element={<Account/>}/>
            <Route path="Dashboard/" element={
            <Dashboard
            courses={courses}
            course={course}
            setCourse={setCourse}
            addNewCourse={addCourse}
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