import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductItem({
	battery,
	camera,
	categoryId,
	cpu,
	description,
	display,
	image,
	memory,
	name,
	price,
	size,
	weight,
	id
}) {
	return (
		<div>
			<h2>{name}</h2>
			<img src={image} />
			<Link to={`product/${id}`}>{name}</Link>
		</div>
	);
}
