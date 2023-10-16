import "./index"
import {TbFileImport} from "react-icons/tb"
import {BsFillArrowRightSquareFill} from "react-icons/bs"
import {ImSpinner4} from "react-icons/im"
import {VscGraph} from "react-icons/vsc"
import {FaBullhorn} from "react-icons/fa"
import {BsBell} from "react-icons/bs"
import {Bs5CircleFill} from "react-icons/bs"
import{LiaTimesSolid} from "react-icons/lia"


function CourseStaus(){
    // const list=["Import Existing Content","Import From Commons" ,"Choose Home Pag", "Choose Home Pag", "New Annoucement", "New Analytics", "View Course Notification"]
    // const icons={
    //     "Import Existing Content": <RiAccountCircleLine  className="wd-icon" />,
    //     "Import From Commons": < AiOutlineDashboard className="wd-icon" />,
    //     "Choose Home Pag": <BiBook className="wd-icon"/> ,
    //     "Choose Home Pag": <AiOutlineCalendar className="wd-icon"/> , 
    //     "New Annoucement": <CiInboxIn className="wd-icon"/>,
    //     "New Analytics": <CiDesktop className="wd-icon"/> ,
    //     "View Course Notification": <AiOutlineClockCircle className="wd-icon"/>, 
    //   };
    return(
        <div>
            <div class="me-5 ms-5">
            {/* <div class="row mt-3 ms-1">
                    <ul class="list-group wd-border-black wd-bg-color-white " >
                        <li class="list-group-item mb-1 list-group-item-secondary " >
                            {list.map((l, index) => (
                            <div >
                                {icons [l]}
                            </div>
                            ))}
                        </li>
                    </ul>
            </div> */}
 

                <div class="row mt-3 ms-1">
                    <ul class="list-group wd-bg-color-white wd-border-black " >
                        <li class="list-group-item mb-1 list-group-item-secondary"> <TbFileImport className="me-2"/> Import Existing Content</li>
                        <li class="list-group-item mb-1 list-group-item-secondary"><BsFillArrowRightSquareFill className="me-2"/>Import From Commons</li>
                        <li class="list-group-item mb-1 list-group-item-secondary"><ImSpinner4 className="me-2"/>Choose Home Page</li>
                        <li class="list-group-item mb-1 list-group-item-secondary"><VscGraph className="me-2"/>View Course Stream</li>
                        <li class="list-group-item mb-1 list-group-item-secondary"><FaBullhorn className="me-2"/>New Annoucement </li>
                        <li class="list-group-item mb-1 list-group-item-secondary"><VscGraph className="me-2"/>New Analytics</li>
                        <li class="list-group-item mb-1 list-group-item-secondary"><BsBell className="me-2"/>View Course Notification</li>
                    </ul>
                </div>
                
                <div class="row">
                    <h5 class="float-start ms-1 mt-4"> To Do</h5><hr/>
                    <ul class="list-group ">
                        <li class="list-group-item d-flex justify-content-between align-items-start ">
                            <div class="ms-2me-auto">
                                <div class="fw-bold wd-fg-color-red ">
                                    <Bs5CircleFill className=" me-2"/>  Grade A1 - ENV + HTML</div>
                            <div class="wd-fg-color-gray"> 100 points - Sept 18 at 11:59pm</div> 
                            </div>
                        <LiaTimesSolid className="wd-fg-color-gray"/>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start ">
                            <div class="ms-2me-auto">
                                <div class="fw-bold wd-fg-color-red ">
                                    <Bs5CircleFill className=" me-2"/>  Grade A2 - CSS + Bootstrap</div>
                            <div class="wd-fg-color-gray"> 100 points - Oct 2 at 11:59pm</div> 
                            </div>
                        <LiaTimesSolid className="wd-fg-color-gray"/>
                        </li>
                    </ul>

                </div>
                
            </div>
        </div>
        
        )
}
export default CourseStaus