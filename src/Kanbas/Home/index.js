import Modules from "../Modules";
import ModuleList from "../Modules/ModuleList";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import CourseStaus from "./CourseStatus";

function Home() {
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