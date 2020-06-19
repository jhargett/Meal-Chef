import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import Card from "../../UI/Card/Card";
import Spinner from "../../UI/Card/Spinner/Spinner";
import Error from "../../UI/Card/ErrorHandler/Error";
import classes from "./Recipe.module.scss";

const properties = {
  readyInMinutes: "Minutes",
  servings: "Servings",
  dairyFree: "Dairy Free",
  glutenFree: "Gluten Free",
  vegan: "Vegan",
  vegetarian: "Vegetarian",
};

const Recipe = (props) => {
  const [recipe, setRecipe] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getRecipeInformation();
    // eslint-disable-next-line
  }, [props.match.params.id]);

  const getRecipeInformation = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${props.match.params.id}/information?includeNutrition=false&apiKey=${props.APP_KEY}`
      );
      const data = await response.json();
      setRecipe(data);
      setInstructions(data.analyzedInstructions);
      setIngredients(data.extendedIngredients);
    } catch (err) {
      setIsError(true);
    }
    setLoading(false);
  };

  if (isError) {
    return (
      <div style={{ marginTop: "100px" }}>
        <Error message="Oops, something went wrong" />
      </div>
    );
  }
  return (
    <div className={classes.recipeContainer}>
      {loading ? (
        <div className={classes.Spinner}>
          <Spinner />
        </div>
      ) : (
        <div className={classes.Recipe}>
          <figure className={classes.recipeImage}>
            <img src={recipe.image} alt="recipe image"></img>
          </figure>
          <div className={classes.recipeTitle}>
            <Card>
              <h3>{recipe.title}</h3>
            </Card>
          </div>
          <div className={classes.recipeIngredients}>
            <Card>
              <h5>Ingredients</h5>
              <ul>
                {ingredients.map((ingredients) => {
                  return (
                    <li key={ingredients.original}>{ingredients.original}</li>
                  );
                })}
              </ul>
            </Card>
          </div>
          <div className={classes.recipeInstructions}>
            <Card>
              <h5>Instructions</h5>
              <ol className={classes.Instructions}>
                {instructions.map((recipe) => {
                  return recipe.steps.map((steps) => {
                    return <li>{steps.step}</li>;
                  });
                })}
              </ol>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(Recipe);

//** CODE FOR FUTURE RECIPE INFO SECTION **/

// const info = Object.keys(properties).map((key) => {
//   return (
//     <RecipeInfo style="Info" infoTitle={properties[key]} info={recipe[key]} />
//   );
// });
