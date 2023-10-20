import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../Database";
import "./index.css"
import {BsThreeDotsVertical} from "react-icons/bs"
import {AiOutlinePlus} from "react-icons/ai"
import {FiChevronDown} from "react-icons/fi"
import {GiNotebook} from "react-icons/gi"
import {AiFillCheckCircle} from "react-icons/ai"

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignment;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
  <div className="me-3">
    <div class="row">

        <div class="float-end ">
            <div class=" float-end ms-2 ">
                <div class="btn btn-secondary btn-sm  wd-button-1"  href="#" role="button">
                    <BsThreeDotsVertical/>
                        
                </div>
            </div>

            <div class=" float-end ms-2 ">
                <div class="btn btn-danger btn-sm " href="#" role="button">
                    <AiOutlinePlus/>
                    Assignment</div>
            </div>


            <div class="  float-end ">
                <div class="btn btn-secondary btn-sm  wd-button-1" href="#" role="button">
                    <AiOutlinePlus/>
                    Group</div>
            </div>
            <div class="float-start w-25">
                <input 
                classname="form-control "
                placeholder={"Search for Assignment"}/>
            </div>
            <br/><br/><hr/><br/>

        </div>
      </div>

      <div class="row">
                
        <ul class="list-group pe-4 ps-1  ">
                
                        <li class="list-group-item  list-group-item-secondary">
                        <BsThreeDotsVertical className="float-start mt-1"/>
                         <FiChevronDown classname="float-start me-2"/>
                         <b className="wd-headings">Assignments</b>
                         <BsThreeDotsVertical className="float-end mt-1 me-1"/>
                         <AiOutlinePlus className="float-end mt-1 me-1"/>
                            <label class="form-label  float-end pe-2 ps-2 me-3 wd-label-1" >40% of Total</label>
                            {/* style="border-radius: 50px; border-width: 1px; border-style: solid;" */}
                              
                        </li>
                        
                        
                            <li style={{marker:"none"}} className="ps-2 wd-border-list " >
                            <div className="list-group wd-border-list">
                                    {courseAssignments.map((assignment) => (
                                    <Link
                                        key={assignment._id}
                                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                        className="list-group-item"
                                        style={{ borderLeftColor: 'green', borderLeftWidth: 'thick'}}>
                                        <BsThreeDotsVertical className="float-start mt-1"/>
                                        <GiNotebook className="float-start mt-1 wd-fg-color-green me-2 ms-2"/>
                                        <div className="wd-inline fw-bold ps-1">
                                        {assignment.title }
                                        </div>                                       
                                        <BsThreeDotsVertical className="float-end mt-1 "/>
                                        <AiFillCheckCircle className="float-end wd-fg-color-green me-1 mt-1"/>
                                        <div class="wd-fg-color-gray  ps-5 ms-2 wd-font-size-small-1"> 
                                        <div className="wd-inline wd-fg-color-red ">Multiple Modules</div> | <b>Due:</b> {assignment.due} | Points: {assignment.points} </div> 
                                    </Link>
                                    ))}
                                </div>
                            </li>
                        
  
        </ul>




    </div>
    </div>
  );
}
export default Assignments;