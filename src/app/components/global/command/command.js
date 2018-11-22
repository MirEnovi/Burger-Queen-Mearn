/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './command.css';

const Command = (props) => {
	const itmesTotal = (props.order).length;
	let orderTotal = 0;



	const order = (props.order).map((item, index) => {
		let orderPrice = parseInt(item.price);
		orderTotal += orderPrice;
		const deleteItem = () => {
			props.delete(index);
		}
		return (
			<div key={`product-${index}`} className='col s10 offset-s1 card height-c-command blue-grey darken-3'>
				<div className='col s9 card-content white-text valign-wrapper left'>
					<p>{`${item.type} ${item.price}`}</p>
				</div>
				<button className='btn waves-effect waves-light red darken-2 delte-item' onClick={deleteItem}>
						<i className='material-icons'>delete</i>
					</button>
			</div>
		);
	});

	return (
		<React.Fragment>
			<div className='col s12'>
				<div className='card blue-grey darken-4'>
					<div className='card-content white-text'>
						<p>
							Esta orden es para: 
						<span className='card-title'>{props.diner}</span>
						</p>
						{
							order
						}

						<div className='col s10 offset-s1 card blue-grey darken-2 height-c-command'>
							<div className='row card-content yellow-text valign-wrapper'>
								<p>
									{itmesTotal} Productos, <span className='total'>{` Total: $${orderTotal}`}.-</span>
								</p>
								
							</div>
						</div>

						<a className='yellow darken-4 waves-effect waves-light btn-large'>
							Enviar a Cocina
						</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Command;