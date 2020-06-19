import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './NavigationLink.module.scss'

const NavigationLink = (props) => {
    return(
        <li className={classes.Link}>
            <NavLink activeClassName={classes.active} to={props.link} exact={props.exact}>{props.children}</NavLink>
        </li>
    )
}

export default NavigationLink