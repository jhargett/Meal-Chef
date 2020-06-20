import React, { useState } from "react";
import { withRouter } from "react-router";
import Filter from "../SearchBar/Filter/Filter";
import img from "../../img/search.png";
import filterIcon from "../../img/filtericon.png";
import classes from "./Searchbar.module.scss";

const Searchbar = (props) => {
  const [filterIconClicked, setfilterIconClicked] = useState(false);
  const [overflow, setOverflow] = useState("");

  const filters = {
    Intolerances: {
      values: ["Gluten", "Dairy", "Peanut", "Soy", "Seafood", "Shellfish"],
      handler: props.intoleranceHandler,
    },
    Diet: {
      values: [
        "Vegan",
        "Vegetarian",
        "Pescetarian",
        "Paleo",
        "Whole30",
        "Ketogenic",
      ],
      handler: props.dietHandler,
    },
    Cuisine: {
      values: [
        "American",
        "Italian",
        "French",
        "Greek",
        "Indian",
        "Japanese",
        "Chinese",
        "Thai",
        "Spanish",
        "Mexican",
      ],
      handler: props.cuisineHandler,
    },
  };

  const filterDisplayHandler = () => {
    props.clickHandler();
    const clicked = filterIconClicked;
    setfilterIconClicked(!clicked);
    setOverflow(false);
    onDelay();
  };

  const onDelay = () => {
    setTimeout(() => {
      setOverflow("Overflow");
    }, 500);
  };
  const filterHolder = Object.keys(filters).map((key) => {
    return <Filter key={key} filterName={key} filter={filters[key]} />;
  });

  return (
    <header
      className={`${classes.Search} ${filterIconClicked && classes.Clicked} ${
        filterIconClicked && classes[overflow]
      }`}
    >
      <form onSubmit={props.getQuery}>
        <div className={classes.SearchContainer}>
          <button
            className={classes.searchFilter}
            type="button"
            onClick={() => filterDisplayHandler()}
          >
            <img
              className={filterIconClicked ? classes.Clicked : undefined}
              src={filterIcon}
              alt="filter"
            />
          </button>
          <input
            className={classes.searchBar}
            type="text"
            value={props.search}
            onChange={props.updateSearch}
            placeholder="Search"
          />
          <button className={classes.searchButton} type="submit">
            <img src={img} alt="search"></img>
          </button>
        </div>
        <div className={classes.filterContainer}>{filterHolder}</div>
      </form>
    </header>
  );
};

export default withRouter(Searchbar);
