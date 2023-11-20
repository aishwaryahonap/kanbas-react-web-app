import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";
const API_BASE = process.env.REACT_APP_API_BASE;
const Labs_URL=`${API_BASE}/a5/welcome`;
function Assignment5() {

  return (
    <div>

      <h1>Assignment 5</h1>
      {/* <div className="list-group"> */}
        <a 
        href={`${Labs_URL}`}
       // href="http://localhost:4000/a5/welcome"
          //  className="list-group-item"
           >
          Welcome!
        </a>
      {/* </div> */}
      <EncodingParametersInURLs/>
      <WorkingWithObjects/>
      <WorkingWithArrays  />
    </div>
  );
}
export default Assignment5;