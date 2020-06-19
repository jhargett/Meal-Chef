import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import RecipeResults from "../../../../Recipe/RecipeResults/RecipeResults";
import Spinner from "../../../../../UI/Card/Spinner/Spinner";
import taco from "../../../../../img/taco.jpg";
import macarons from "../../../../../img/macarons.jpg";
import spaghetti from "../../../../../img/spaghetti.jpg";
import muffin from "../../../../../img/muffin.jpg";
import classes from "./SuggestRecipes.module.scss";

const SuggestRecipes = (props) => {
  const [randomRecipes, setRandomRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const APP_KEY =
    /*'747903012841446eb10d8009df267f01';*/ /*'112d7767026740ceb3e0541adccb17ee'*/ "25a780d4eaa34dabb069a16622ffb0aa";

  const getRandomRecipes = async () => {
    setLoading(true);
    const response = await fetch(
      // **** API FOR RANDOM RECIPES NOT WORKING **** //
      //`https://api.spoonacular.com/recipes/random?number=1&apiKey=${APP_KEY}`
      `https://api.spoonacular.com/recipes/search?query=rice&number=4&apiKey=${APP_KEY}`
    );
    const data = await response.json();
    setRandomRecipes(data.results);
    setLoading(false);
  };

  useEffect(() => {
    getRandomRecipes();
  }, []);

  let recipeResults = (
    <RecipeResults
      recipes={randomRecipes}
      selection={props.recipeSelection}
      baseUri={props.baseUri}
      loading={loading}
    />
  );

  return (
    <div className={classes.container}>
      <div className={classes.Card}>
        <h3>Popular Recipes</h3>
        
        {loading ? (
          <div className={classes.Spinner}>
            <Spinner />
          </div>
        ) : (
          recipeResults
        )}
      </div>

      <div className={classes.Card}>
        <h3>Popular Categories</h3>
        <div className={classes.Grid}>
          <figure className={classes.large}>
            <div className={classes.Overlay}>
              <h4>View Recipes</h4>
            </div>
            <img src={taco} alt="taco" />
            <div className={classes.caption}>
              <p>Mexican</p>
            </div>
          </figure>
          <figure className={classes.medium}>
          <div className={classes.Overlay}>
              <h4>View Recipes</h4>
            </div>
            <img src={macarons} alt="taco" />
            <div className={classes.caption}>
              <p>Cookies</p>
            </div>
          </figure>
          <figure classes={classes.small}>
          <div className={classes.Overlay}>
              <h4>View Recipes</h4>
            </div>
            <img src={spaghetti} alt="taco" />
            <div className={classes.caption}>
              <p>Italian</p>
            </div>
          </figure>
          <figure classes={classes.small2}>
          <div className={classes.Overlay}>
              <h4>View Recipes</h4>
            </div>
            <img src={muffin} alt="taco" />
            <div className={classes.caption}>
              <p>Muffin</p>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SuggestRecipes);
