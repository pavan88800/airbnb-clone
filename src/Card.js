import React from 'react';
import './card.css';
const Card = ({ src, title, desc, price }) => {
	return (
		<div className="card">
			<img src={src} alt="airbnb " />
			<div className="card__info">
				<h2>{title}</h2>
				<h4>{desc}</h4>
				<h3>{price}</h3>
			</div>
		</div>
	);
};

export default Card;
