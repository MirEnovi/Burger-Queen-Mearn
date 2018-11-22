
import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { Row } from 'react-materialize';

// import './style.css';
// import { auth } from '../../config/firebase';
import MenuData from '../../data/menu.json';
import Nav from '../global/nav/nav';
import {ButtonMenu} from '../global/button/button';
import Command from '../global/command/command';

class Menu extends Component {
	constructor() {
		super()
		this.state = {
			menuDesayuno: false,
			menuAlmuerzo: true,
			order:[],
			diner: 'Cliente'
		};
		this.dinerWrite = React.createRef();
	}

	componentDidMount = () => {
		this.setState({
			diner:this.dinerWrite.current.value
		});
	};

	goMenuAlmuerzo = () => {
		this.setState({
			menuDesayuno: false,
			menuAlmuerzo: true
		})
	};

	goMenuDesayuno = () => {
		this.setState({
			menuDesayuno: true,
			menuAlmuerzo: false
		})
	}

	weaponOrdered = (product) => {
		this.setState({
			diner:this.dinerWrite.current.value
		});
		const {order} = this.state;
		order.push(product);
		this.setState({
			order
		});
	};

	deleteItem = (index) => {
		const {order} = this.state;
		order.splice(index, 1);
		this.setState({
			order
		});
	}
	
	
	render() {
		const { menuDesayuno, menuAlmuerzo } = this.state;
		const {dinerWrite} = this;
		if (menuDesayuno){
			var buttonsMenu = (MenuData.Desayuno).map((item, index) => {
				return (
					<ButtonMenu keyI = {`desayuno-${index}`}
											type = {item.type}
											price = {item.price} 
											color = 'cyan darken-4'
											function = {(()=>{
												const product = {
													type: item.type,
													price: item.price,
												};
												this.weaponOrdered(product);
											})}
											/>
				)
			});
		} else if (menuAlmuerzo) {
			var buttonsMenu = (MenuData.Almuerzo).map((item, index) => {
				return (
					<ButtonMenu keyI = {`almuerzo-${index}`}
											type = {item.type}
											price = {item.price} 
											color = 'deep-orange accent-3'
											function = {(()=>{
												const product = {
													type: item.type,
													price: item.price,
												};
												this.weaponOrdered(product);
											})}
					/>
				)
			});
		};
		// if (uid) {
			return (
				<React.Fragment>
					<Nav	desayuno = {this.goMenuDesayuno}
								almuerzo = {this.goMenuAlmuerzo} />
					<Row>
						<input className='col s6  offset-s3' type='text' placeholder='¿A nombre de quien va la orden?' ref={dinerWrite} />
						<Row >
							<div className='col s12 m6'>
								{
									buttonsMenu
								}
							</div>
							<div className='col s12 m6'>
								<Command 	diner= {this.state.diner}
													order={this.state.order}
													delete={this.deleteItem}
								/>
							</div>
						</Row>
					</Row>
				</React.Fragment>
			);
		// };
		// return <Redirect to = '/' /> ;
	}
}

export default Menu;
