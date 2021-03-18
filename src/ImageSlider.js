import React, { Component} from 'react';
// import ImageSlider from 'src/ImageSlider.js';



export default class ImageSlider extends Component {
	
	constructor() {
		super()
		this.state = {
			currentSlideIndex: 0
		}
	}

	// increment = () => {
	// 	const newCount = this.state.currentSlideIndex + 1
	// 	this.setState({
	// 		currentSlideIndex: newCount
	// 	})
	// }

		render() {
		  return <div>
					<h1>I am on slide {this.state.currentSlideIndex}</h1>
				</div>
	  }
	  

}