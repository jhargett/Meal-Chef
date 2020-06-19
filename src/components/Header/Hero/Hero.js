import React from "react";
import { Link } from 'react-router-dom'
import Aux from "../../../hoc/Aux";
import classes from "./Hero.module.scss";

const Hero = (props) => {
  return (
    <Aux>
      <div className={`${classes.bgImage} ${props.display && classes.Clicked}`}>
        <div
          className={`${classes.heroContainer} ${
            props.display && classes.Clicked
          }`}
        >
          <h5><strong>Hungry? </strong>Search from over 300k recipes</h5>
          <Link to={'/search'} className={classes.searchButton}>Start Search </Link>
        </div>
      </div>
    </Aux>
  );
};

export default Hero;
