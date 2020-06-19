import React, { useState, useEffect } from 'react';
import './scss/Header.scss';
import './scss/base.scss';
import img from './img/search.png';

const Header = ({ updateSearch, getQuery, search, query, onPress, display, resetApp }) => {
	const [headerPosition, setHeaderPosition] = useState('header centered');

  //sets header position based on if the user has typed anything
  
  useEffect(() => {
		if (query === '') {
			setHeaderPosition('header centered');
    }
    // eslint-disable-next-line
  }, [onPress]);
  
	useEffect(() => {
		if (search !== '' || display === false) {
			setHeaderPosition('header');
		}
	}, [search, display]);


	return (
    <header>
		<div className={headerPosition}>
			<h4 onClick={onPress}>RECIPE GENIE</h4>
			<form onSubmit={getQuery} className="header--form">
				<input className="header--search-bar" type="text" value={search} onChange={updateSearch} />
				<button className="header--search-button" type="submit">
					<img src={img} alt="search"></img>
				</button>
			</form>
		</div>
    </header>
	);
};

export default Header;
