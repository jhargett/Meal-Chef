import React, { useState, useRef } from "react";
import Checkbox from "../Filter/CheckBox/Checkbox";
import downArrowWhite from "../../../img/downarrow-whiteSmall.png";
import downArrowBlack from "../../../img/downarrow-blackSmall.png";
import classes from "./Filter.module.scss";

const Filter = (props) => {
  const [clicked, setClicked] = useState(false);
  const checkbox = useRef(null);

  const showCheckBox = (event) => {
    const clickChecker = clicked;

    if (clickChecker === false) {
      setClicked(true);
      document.addEventListener("click", HideCheckBox);
    }
  };

  const HideCheckBox = (event) => {
    if (checkbox.current == null) {
      setClicked(false);
      document.removeEventListener("click", HideCheckBox);
    } else if (!checkbox.current.contains(event.target)) {
      setClicked(false);
      document.removeEventListener("click", HideCheckBox);
    }
  };
  let positionChange = null;

  if(props.filterName === "Diet" || props.filterName === "Cuisine") {
    positionChange = "positionChange"
  }


  return (
    <div
      onClick={showCheckBox}
      className={`${classes.Filter} ${clicked && classes.Clicked}`}
    >
      <p>{props.filterName}</p>
      <img src={clicked && clicked ? downArrowBlack : downArrowWhite} alt="arrow" />
      <div
        ref={checkbox}
        className={`${classes.checkboxContainer} ${classes[positionChange]} ${
          clicked && clicked && classes.Clicked
        }`}
      >
        <ul className={classes.checkboxList}>
          <Checkbox boxName={props.filter} />
        </ul>
      </div>
    </div>
  );
};

export default Filter;
