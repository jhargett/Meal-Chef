import React, { useState, useEffect } from "react";
import { withRouter, Route } from "react-router";
import SearchBar from "../../../SearchBar/Searchbar";
import SuggestRecipes from "../SearchModule/SuggestRecipes/SuggestRecipes";
import RecipeResults from "../../../Recipe/RecipeResults/RecipeResults";
import Aux from "../../../../hoc/Aux";
import Transitions from "../../../../UI/Card/Transitions.js/Transitions";
import Spinner from "../../../../UI/Card/Spinner/Spinner";
import classes from "./SearchModule.module.scss";

const baseUri = "https://spoonacular.com/recipeImages/";
const APP_KEY =
  /*'747903012841446eb10d8009df267f01';*/ /*"112d7767026740ceb3e0541adccb17ee"*/ "25a780d4eaa34dabb069a16622ffb0aa";

const SearchModule = (props) => {
  const [show, setShow] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [intolerances, setIntolerances] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [diets, setDiets] = useState([]);
  const [isFilterClicked, setIsFilterClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getRecipes = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/search?query=${query}&number=4&instructionsRequired=true&diet=${diets}&intolerances=${intolerances}&cuisine=${cuisines}&apiKey=${APP_KEY}`
      );
      // if(response.status === 401) {
      //   throw setIsError(true)
      // }
      const data = await response.json();
      setRecipes(data.results);
    } catch (err) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (query !== "") {
      getRecipes();
      //props.history.push('search/')

      //hides recipe component
      //setDisplay(false);
    }
    // Generate random number to fetch unique results
    //setRandomOffset(Math.floor(Math.random() * 10));
    // eslint-disable-next-line
  }, [query]);

  useEffect(() => {
    setShow((show) => true);
    console.log("mount");
  }, []);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getQuery = (e) => {
    e.preventDefault();
    if (search !== "") {
      setQuery(search);
      setSearch("");
      setRecipes([]);
      if (props.location.pathname !== "/search/results/") {
        props.history.push("/search/results/");
      }
    }
  };

  const intoleranceHandler = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    let intolerance = [...intolerances];

    if (isChecked) {
      intolerance.push(value);

      setIntolerances([...intolerance]);
    } else {
      intolerance = intolerance.filter((values) => {
        return values != value;
      });

      setIntolerances([...intolerance]);
    }
  };

  const dietHandler = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    let diet = [...diets];

    if (isChecked) {
      diet.push(value);

      setDiets([...diet]);
    } else {
      diet = diet.filter((values) => {
        return values != value;
      });

      setDiets([...diet]);
    }
  };

  const cuisineHandler = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    let cuisine = [...cuisines];

    if (isChecked) {
      cuisine.push(value);

      setCuisines([...cuisine]);
    } else {
      cuisine = cuisine.filter((values) => {
        return values != value;
      });

      setCuisines([...cuisine]);
    }
  };

  const filterClickHandler = () => {
    const clicked = isFilterClicked;
    setIsFilterClicked(!clicked);
  };

  const recipeResults = (
    <RecipeResults recipes={recipes} baseUri={baseUri} error={isError} />
  );

  let suggestRecipes = (
    <SuggestRecipes
      apiKey={APP_KEY}
      baseUri={baseUri}
      displaySuggestions={props.display}
    />
  );

  return (
    <Aux>
      <div
        className={`${classes.moduleContainer} ${
          props.display && classes.Clicked
        }`}
      >
        <div
          className={`${classes.Module} ${isFilterClicked && classes.Clicked}`}
        >
          <SearchBar
            search={search}
            query={query}
            updateSearch={updateSearch}
            getQuery={getQuery}
            intoleranceHandler={intoleranceHandler}
            dietHandler={dietHandler}
            cuisineHandler={cuisineHandler}
            clickHandler={filterClickHandler}
          />
        </div>
      </div>
      <Transitions show={show} transitionType={"slide"}>
        <div
          className={`${classes.moduleBody} ${
            isFilterClicked && classes.slideDown
          }`}
        >
          <Route path={"/search"} exact render={() => suggestRecipes} />
          {isLoading ? (
            <Spinner />
          ) : (
            <Route
              path={"/search/results"}
              exact
              render={() => recipeResults}
            />
          )}
        </div>
      </Transitions>
    </Aux>
  );
};

export default withRouter(SearchModule);
