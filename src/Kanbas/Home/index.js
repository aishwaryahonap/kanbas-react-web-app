import Modules from "../Modules";
import ModuleList from "../Modules/ModuleList";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import CourseStaus from "./CourseStatus";
import db from "../../Kanbas/Database";

function Home() {
  const courses1=db.courses;
    return (
      <div className="row ">
        <div className="col-8"> 
            <Modules/>
        </div>
        <div className="col ">
        <CourseStaus/>
        </div>
        
      </div>
    );
  }
  export default Home;