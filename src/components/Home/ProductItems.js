import React, { useState } from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import { selectedProduct } from '../../redux/shop/shopSelector';
import { Link } from 'react-router-dom';
function ProductItems(props) {
	console.log(props);

	return (
		<div>
			<div>
				<h2>Clicked item</h2>
				<h2>{props.shopItem && props.shopItem.name}</h2>
			</div>
			<div>
				{props.shopItems.map((product) => {
					return (
						<div key={product.id}>
							<h2>{product.name}</h2>
							<img src={product.image} />
							<Link to={`product/${product.id}`}>{product.name}</Link>
							<button onClick={() => props.selectedProduct(product)}>hey</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}
const mapStateToProps = (state) => {
	console.log(state);
	return state.shop;
};

export default connect(mapStateToProps, {
	selectedProduct
})(ProductItems);
