import React from "react";
import { Link } from "react-router-dom";
import Aux from "../../../hoc/Aux";
import classes from "./RecipeCardSmall.module.scss";

const recipeCardSmall = (props) => (
  <Aux>
    <Link className={classes.Result} to={"/Recipe/" + props.id}>
      <figure className={classes.imageContainer}>
        <img src={props.image} alt="" />
      </figure>
      <h1 className={classes.Title}>{props.title}</h1>
      <div className={classes.infoContainer}>
        <span>{props.readyIn} minutes </span>
        <span>{props.servings} servings</span>
      </div>
    </Link>
  </Aux>
);

export default recipeCardSmall;
