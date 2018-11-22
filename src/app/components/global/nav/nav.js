/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import { Link } from 'react-router-dom';

import logo from '../assets/burguerB2.png';
// import { logout } from '../../../config/firebase';
import './nav.css';

const Nav = (props) => {
	const offSesion = () => {
        alert('Logout');
		// logout();
	};

	return (
		<header >
			<nav  className='row nav-header'>
				<div className='col s12 l10 offset-l1 nav-margin'>

					<img src={logo} className='nav-logo col s2 m1' alt='logo burger' />

					<h2 className= 'font-nav font-title col m3'>Burger <span className='font-queen'>Queen</span></h2>

					<a onClick={props.desayuno} className='truncate waves-effect waves-light btn cyan darken-4 nav-button col m3'>Desayuno</a>

					<a onClick={props.almuerzo} className='truncate waves-effect waves-light btn deep-orange accent-3 nav-button col m5'>Almuerzo y Cena</a>

					<a onClick={offSesion} className='truncate waves-effect waves-light btn yellow darken-4 nav-button right-align col m2'>
					<Link to = '/'>Salir</Link>	
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
