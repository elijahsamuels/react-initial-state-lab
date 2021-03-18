import React, { Component} from 'react';
// import Bomb from 'src/Bomb.js';

export default class Bomb extends Component {

	constructor(props) {
		super()
		this.state = {
			secondsLeft: props.initialCount
		}
	}
	
	render() {
		const kaBoom = this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`;
		return (
		<div>{ kaBoom }</div>
		)
	}

}
			// <h1>120 seconds left before I go boom!</h1>;
		// return <h1>Boom!</h1>;

	// this.state.secondsLeft = ImageSlider.props.initialCount

	// if this.state.secondsLeft == 0 then "Boom!" : "120 seconds left before I go boom!"
	