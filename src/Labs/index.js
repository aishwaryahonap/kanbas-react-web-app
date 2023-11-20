import {Route, Routes, Link, useLocation, Navigate } from "react-router-dom";
import Assignment3 from "./a3";
import Nav from "../Nav";
import Assignment4 from "./a4";
import Assignment5 from "./a5";
import store from "./store";
import { Provider } from "react-redux";

function Labs() {
    const { pathname } = useLocation();
    return(
        <Provider store={store}>
            <div>

            <Nav/>
            <nav className="nav nav-tabs mt-2">
            <Link className="nav-link" to="/Labs/a3/"
             className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}>A3</Link>
            <Link className="nav-link" to="/Labs/a4"
            className={`nav-link ${pathname.includes("a4") ? "active" : ""}`}>A4</Link>
            <Link className="nav-link" to="/Labs/a5"
            className={`nav-link ${pathname.includes("a5") ? "active" : ""}`}>A5</Link>
            </nav>
            <Routes>
            <Route path="/" element={<Navigate to="/Labs/a5" />}/>
                <Route path="a3/*" element={<Assignment3 />}/>
                <Route path="/a4"   element={<Assignment4/>}/>
                <Route path="/a5" element={<Assignment5/>}/>
            </Routes>

            {/* <Assignment3/> */}
            {/* <Assignment4/> */}
            
       </div>
       </Provider>
    );
 }
 export default Labs;