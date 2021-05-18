import React from "react";
const Spinner = () => {
  return (
    <React.Fragment>
     <div className="text-center">
  <div className="spinner-border text-primary_spinner" style={{width: "20rem", height: "20rem", marginTop: "30%"}} role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
    </React.Fragment>
  );
};

export default Spinner;
