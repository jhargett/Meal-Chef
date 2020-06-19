import React from "react";
import classes from "./RecipeInfo.module.scss";

const recipeInfo = (props) => {
  let info;

  const style = props.style;

  if (typeof props.info === "boolean") {
    info = booleanHandler(props.info);
  } else info = props.info;

  function booleanHandler(bool) {
    if (bool) {
      return "Yes";
    } else return "No";
  }

  return (
    <div className={classes[style]}>
      <h3>{info}</h3>
      <p>{props.infoTitle}</p>
    </div>
  );
};
export default recipeInfo;
