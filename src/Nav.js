import { Link, useLocation } from "react-router-dom";
function Nav() {
    const { pathname } = useLocation();

 return (
   <nav className="nav nav-tabs mt-2">
     <Link className="nav-link" to="/Labs/a3"
      className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}>Labs</Link>
     {/* <Link className="nav-link" to="/Labs/a4">A4</Link>
     <Link className="nav-link" to="/Labs/a5">A5</Link> */}
     
     
     <Link className="nav-link" to="/hello"
       className={`nav-link ${pathname.includes("hello") ? "active" : ""}`}>Hello</Link>
     <Link className="nav-link" to="/Kanbas/Dashboard"
       className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}>Kanbas</Link>
   </nav>
 );
}
export default Nav;