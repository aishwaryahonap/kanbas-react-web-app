import ModuleList from "./ModuleList";
import {AiOutlinePlus} from "react-icons/ai"
import {FaEllipsisVertical} from "react-icons/fa6"
import {AiOutlineCheckCircle} from 'react-icons/ai'
import { useParams } from "react-router-dom";
import db from "../../Kanbas/Database";


function Modules() {

  return (
    <div> 
      <div className="float-end mt-2 d-flex">     
          <div class=" btn btn-secondary wd-button me-3 wd-width"> Collapse All
          </div>
          <div class=" wd-button  btn btn-secondary me-3 wd-width"> View Progress
          </div>
          <div class=" wd-button btn btn-secondary me-3 wd-width"> <AiOutlineCheckCircle className="me-1 wd-color-green"/>Publish All
          </div>
          <div class=" btn btn-danger me-3 wd-width"> <AiOutlinePlus/> Module
          </div>
          <div class=" wd-button btn btn-secondary me-3 "> <FaEllipsisVertical/>
          </div>
      </div>
        <br/> <br/><hr/>

      <ModuleList/>
    </div>

  );
}
export default Modules;