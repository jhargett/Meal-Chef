import React from "react";
import { ReactComponent as SearchIcon } from "../../../../../img/Search.svg";
import classes from "./SearchButton.module.scss";


const SearchButton = (props) => {
  return (
    <div
      onClick={props.clicked}
      className={`${classes.searchButton} ${
        props.changeColor && classes.Clicked
      }`}
    >
      <SearchIcon className={classes.searchIcon} />
    </div>
  );
};

export default SearchButton;
