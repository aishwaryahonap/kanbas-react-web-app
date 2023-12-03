import logo from './logo.svg';
import './App.css';
import Labs from "./Labs";
import HelloWorld from './Labs/a3/HelloWorld';
import Kanbas from './Kanbas';
import Project from "./project";
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

return (
  <HashRouter>
  <div >
  <Routes>
    {/* <Route path='/' element={<Navigate to="/Labs"/>}/> */}
    <Route path="/" element={<Navigate to="project" />} />
    <Route path="/project/*" element={<Project />} />
    <Route path="/Hello" element={<HelloWorld />}/>
    <Route path="/Labs/*"   element={<Labs/>}/>
    <Route path="/Kanbas/*" element={<Kanbas/>}/>
  </Routes>
     {/* <HelloWorld/>
     <Labs/>
     <Kanbas/> */}
  </div>
  </HashRouter>
);
}

export default App;
