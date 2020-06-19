import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import NavigationLink from "../Nav/NavigationLink/NavigationLink";
import SearchButton from "./NavigationLink/SearchIcon/SearchButton";
import Aux from "../../../hoc/Aux";
import classes from "./Nav.module.scss";

const Nav = (props) => {
  return (
    <Aux>
      <div className={classes.navContainer}>
        <div className={classes.Nav}>
          <div>
            <Link to={"/Meal-Chef"}>
              <h5>MEAL CHEF</h5>
            </Link>
          </div>
          <ul className={classes.navLinks}>
            <NavigationLink link="/Meal-Chef" exact>
              Home
            </NavigationLink>
            <NavigationLink link="/categories">Categories</NavigationLink>
            <SearchButton
              changeColor={props.changeSearchColor}
              clicked={props.clicked}
            />
          </ul>
        </div>
      </div>
    </Aux>
  );
};

export default withRouter(Nav);
