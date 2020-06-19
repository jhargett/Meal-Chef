import React from "react";
import classes from "./Checkbox.module.scss";
import Aux from "../../../../hoc/Aux";

const checkbox = (props) => {
  const checkboxes = props.boxName.values.map((key) => {
    return (
      <li className={classes.Checkbox}>
        <input
          type="checkbox"
          name={key}
          value={key}
          onClick={props.boxName.handler}
        />
        <span className={classes.checkboxDesign}></span>
        <p>{key}</p>
      </li>
    );
  });

  return <Aux>{checkboxes}</Aux>;
};

export default checkbox;
