import React from "react";
import "./scorebox.css"

const Randomnum  = props => (
<div className="card container score-box">
  <div className="card-body">
      <div className="card-data">
        Data {props.Random}
      </div>
    </div>
  </div>
);

export default Randomnum;