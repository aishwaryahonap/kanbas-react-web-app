import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import db from "../Database";
import "./index.css"
import {FaEllipsisVertical} from "react-icons/fa6"
import {BiSolidDownArrow} from "react-icons/bi"
import {BiSolidRightArrow} from "react-icons/bi"
import {AiFillCheckCircle} from "react-icons/ai"
import {AiOutlinePlus} from "react-icons/ai"
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules
} from "./modulesReducer";
import { getByPlaceholderText } from "@testing-library/react";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();

  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };


  // const [modules, setModules] = useState(db.modules);
  // // const modules = db.modules;

  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // });

  // const addModule = (module) => {
  //   setModules([
  //     { ...module, _id: new Date().getTime().toString() },
  //       ...modules,
  //   ]);
  // };

  // const deleteModule = (moduleId) => {
  //   setModules(modules.filter(
  //     (module) => module._id !== moduleId));
  // };

  // const updateModule = () => {
  //   setModules(
  //     modules.map((m) => {
  //       if (m._id === module._id) {
  //         return module;
  //       } else {
  //         return m;
  //       }
  //     })
  //   );
  // }

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  // const abc=modules
  //       .filter((module) => module.course === courseId)

  return (
    <ul className="list-group wd-border-radius-0 ">
      
      <li className="list-group-item">
       
        <div className="row">
          <h5>Module Name:</h5>
          <input
           className="ms-3"
            value={module.name}
            title="Enter Module Name"
            onChange={(e) => 
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>
        </div>

        <div className="row mt-4">
        <h5>Module Description:</h5>
          <textarea value={module.description}
              className="ms-3"
              title="Enter Module Description"
              onChange={(e) => 
              dispatch(setModule({ ...module, description: e.target.value }))
              
          }/>
        </div>

        <div className="mt-2 mb-2 ">
        <button  className="btn  wd-button me-2"
          // onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          onClick={handleAddModule}
          >
          Add</button>

          <button  className="btn wd-button"
          //onClick={() => dispatch(updateModule(module))}
          onClick={handleUpdateModule}
          >
          Update
          </button>
        </div>        

          {/* {module.
            filter((module) => module.course === courseId)=="") && dispatch(addModule({ ...module, course: courseId }))
          } */}
      </li>  
      {/* {JSON.stringify(abc,null,2)}   */}
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
                
                <button className="btn btn-sm wd-button mt-1 me-2"
                  onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>

                <button className="btn btn-sm wd-button mt-1 "
                 // onClick={() => dispatch(deleteModule(module._id))}
                 onClick={() => handleDeleteModule(module._id)}

                  >
                  Delete
                </button>  
            </div>
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;