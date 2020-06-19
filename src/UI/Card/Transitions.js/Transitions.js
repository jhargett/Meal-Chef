import React, { useState, useEffect } from 'react'
import classes from './Transitions.module.scss'

const Transitions = (props) => {

    const[render, setRender] = useState(props.show)

    useEffect(() => {
        if(props.show) {
            setRender(true)
        }
    }, [props.show])


    const onAnimationEnd = () => {
        if(!props.show) setRender(false)
    }


    return (
        render && (
            <div className={ props.show ? classes[props.transitionType + 'In'] : classes[props.transitionType + 'Out']}
            onAnimationEnd={onAnimationEnd}>
                {props.children}
            </div>
        )
    )

}

export default Transitions