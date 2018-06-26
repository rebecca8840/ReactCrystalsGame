import React from "react";
import "./scorebox.css"
// more accurate way of putting this - number of things clicked instead of Scorebox *eyeroll*


const Scorebox = props => (
<div className="card container score-box">
  <div className="card-body">
      <div className="card-data">
      Score: {props.userNum}
      </div>
    </div>
  </div>

  // render() {
  //   return (
    // this.props.score

  //   )
  // }
  );
  
export default Scorebox;