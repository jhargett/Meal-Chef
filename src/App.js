import React, { useState, useEffect } from "react";
import { withRouter, Route } from "react-router";
import { matchPath } from "react-router";
import Nav from "./components/Header/Nav/Nav";
import Hero from "./components/Header/Hero/Hero";
import Recipe from "./containers/RecipeLarge/Recipe";
import SearchModule from "./components/Header/Nav/SearchModule/SearchModule";
import Aux from "./hoc/Aux";
import classes from "./scss/App.module.scss";
import "./scss/base.scss";

const App = (props) => {
  const APP_KEY =
    /*'747903012841446eb10d8009df267f01';*/ /*'112d7767026740ceb3e0541adccb17ee'*/ "25a780d4eaa34dabb069a16622ffb0aa";

  const [displaySearch, setDisplaySearch] = useState(false);

  useEffect(() => {
    changeSearchColor();
  }, [props.location.pathname]);

  const changeSearchColor = () => {
    const url = matchPath(props.location.pathname, "/search");
    if (url !== null) {
      setDisplaySearch(true);
    } else {
      setDisplaySearch(false);
    }
  };

  const displaySearchHandler = () => {
    if (displaySearch === true) {
      props.history.goBack();
    } else {
      props.history.push("/search");
    }
  };

  return (
    <Aux>
      <div className={classes.App}>
        <Route
          path={"/search"}
          render={() => <SearchModule display={displaySearch} />}
        />
        <Nav clicked={displaySearchHandler} changeSearchColor={displaySearch} />
        <Route path={"/Meal-Chef"} exact render={() => <Hero />} />
        <Route
          path={"/Recipe/:id"}
          render={() => <Recipe APP_KEY={APP_KEY} />}
        />
      </div>
    </Aux>
  );
};

export default withRouter(App);
