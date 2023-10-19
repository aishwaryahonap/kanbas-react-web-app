import React from "react";
import { useParams } from "react-router-dom";
import db from "../Database";
import "./index.css"
import {FaEllipsisVertical} from "react-icons/fa6"
import {BiSolidDownArrow} from "react-icons/bi"
import {BiSolidRightArrow} from "react-icons/bi"
import {AiFillCheckCircle} from "react-icons/ai"
import {AiOutlinePlus} from "react-icons/ai"

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group wd-border-radius-0 ">
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item list-group-item-secondary wd-bg-color-white wd-padding-10 wd-border-black">
            <div className="flex wd-inline-1">
              <FaEllipsisVertical className="wd-margin-icons"/>                
                <BiSolidRightArrow  className="wd-margin-icons"/>
                <div className="wd-inline-1 wd-font-size-large wd-margin-icons">
                {module.name}
                </div>
                <FaEllipsisVertical className="float-end wd-margin-icons"/>
                <AiOutlinePlus className="float-end  wd-margin-icons"/>
                <BiSolidDownArrow className="float-end wd-margin-icons"/>
                <AiFillCheckCircle className="float-end wd-color-green wd-margin-icons"/>
                <br/><p className="wd-fg-color-gray wd-margin-botton-0 wd-margin-left">{module.description}</p>
                
            </div>
                
            
            
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;