/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import './button.css';

export const ButtonMenu = (props) => {
	return (
		<button className={`margin-button-menu waves-effect waves-light btn-large ${props.color}`} key = {props.keyI} onClick={props.function}>
			{`${props.type} - $${props.price}`}
		</button>
	);
}


// export const ButtonApp = (props) => {
// 	return (
// 		<a onClick={this.offSesion} className='nav-button yellow darken-4 btn-large'>
// 		<Link to = '/'>Salir</Link>	
// 		</a>
// 	);
// };
