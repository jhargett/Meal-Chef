import React from "react";
import classes from "./Error.module.scss";

const Error = (props) => {
  return (

      <div className={classes.Error}>
        <h4>{props.message}</h4>
      </div>
  );
};

export default Error;
