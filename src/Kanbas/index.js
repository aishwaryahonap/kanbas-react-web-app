import { Navigate, Route, Routes } from "react-router";
import KanbasNavigation from "./KanbasNavigation/KanbasNavigation";
import Dashboard from "./Dashboard/index.js"
import Account from "./Account/index.js"
import Courses from "./Courses/index.js"
import CourseNavigation from "./CourseNavigation";
function Kanbas() {
   return (
     <div className="d-flex">
       <div>
            <KanbasNavigation/>

       </div>
       <div className="col">
         <Routes>
         <Route path="/" element={<Dashboard/>}/>
            <Route path="Account/*" element={<Account/>}/>
            <Route path="Dashboard/" element={<Dashboard/>}/>
            <Route path="Courses" element={<Navigate to={"RS101/Home"} />} />
             <Route path="Courses/:courseId/*" element={<Courses/>}/>
         </Routes>
       </div>
     </div>
   );
 }
 export default Kanbas;