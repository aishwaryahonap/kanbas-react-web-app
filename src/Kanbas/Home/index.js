import Modules from "../Modules";
import ModuleList from "../Modules/ModuleList";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import CourseStaus from "./CourseStatus";

function Home() {
    return (
      <div className="row wd-inline ">
        <div className="col"> 
            <Modules/>
        </div>
        <div className="col float-end wd-inline">
        <CourseStaus/>
        </div>
        
      </div>
    );
  }
  export default Home;