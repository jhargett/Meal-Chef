import React from "react";

import RecipeCardSmall from "../RecipeCardSmall/RecipeCardSmall";
import Error from "../../../UI/Card/ErrorHandler/Error";
import classes from "./RecipeResults.module.scss";

const recipeResults = (props) => {
  let displayRecipe = null;
  if (props.recipes !== undefined) {
    displayRecipe = props.recipes.map((recipe) => {
      return (
        <RecipeCardSmall
          key={recipe.id}
          title={recipe.title}
          image={props.baseUri + recipe.image}
          readyIn={recipe.readyInMinutes}
          id={recipe.id}
          servings={recipe.servings}
          calories={recipe.calories}
          loading={props.loading}
        />
      );
    });
  }

  if (props.recipes.length === 0) {
    displayRecipe = "";
  }

  if (props.error) {
    return <Error message={"Oops, something went wrong"} />;
  } else if (displayRecipe === "") {
    return <Error message={"No Results Found"} />;
  } else return <div className={classes.ResultsContainer}>{displayRecipe}</div>;
};

export default recipeResults;
