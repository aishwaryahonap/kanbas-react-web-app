import { Link, useLocation } from "react-router-dom";
import {RiAccountCircleLine} from "react-icons/ri"
import {AiOutlineDashboard} from "react-icons/ai"
import {BiBook, BiLogoSlack} from "react-icons/bi"
import {AiOutlineCalendar} from "react-icons/ai"
import {CiInboxIn} from "react-icons/ci"
import {CiDesktop} from "react-icons/ci"
import {AiOutlineClockCircle} from "react-icons/ai"
import {AiOutlineQuestionCircle} from "react-icons/ai"
import "./index.css"
import "./NEULogo.png"



function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = ["Account", "Dashboard"  , "Courses", "Calendar", "Inbox", "Studio", "History", "Help"];
  const icons={
    Account: <RiAccountCircleLine  className={`wd-icon-account ${pathname.includes("Account") && "wd-active-account"} ` } />,
    Dashboard: < AiOutlineDashboard className="wd-icon" />,
    Courses: <BiBook className="wd-icon"/> ,
    Calendar: <AiOutlineCalendar className="wd-icon"/> , 
     Inbox: <CiInboxIn className="wd-icon"/>,
    Studio: <CiDesktop className="wd-icon"/> ,
    History: <AiOutlineClockCircle className="wd-icon"/>, 
    Help: <AiOutlineQuestionCircle className="wd-icon"/>, 
  };



  return (
    <div className="list-group wd-kanbas-navigation " style={{ width: 100}}>
       <img src="/Kanbas/KanbasNavigation/NEULogo.png " width="100"/>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item wd-full wd-li ${pathname.includes(link) && "wd-active"} ` }>
          <div >
            {icons [link]}
          </div>

          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;