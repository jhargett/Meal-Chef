import React, {useEffect} from 'react';
import './scss/RecipeResults.scss';
import './scss/base.scss';

const RecipeResults = ({ title, readyIn, image, id, onPress, display, servings }) => {


  useEffect(() => {
    console.log('orange')
  }, [])

		
	return (
		<div className="results" onClick={onPress}>
			<figure className="results--image-container">
				<img src={image} alt="" />
			</figure>
      <h1 className="results--title">{title}</h1>
			<div className="results--info">
				<p className="minutes">Ready in: {readyIn} min</p>
				<p className="servings">Servings: {servings}</p>
			</div>
		</div>
	);
};

export default RecipeResults;
