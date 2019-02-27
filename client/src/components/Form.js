import React, { Component } from 'react';

export default class Form extends Component {
	submitReview = e => {
		e.preventDefault();
		const review = this.review.value;
		const stars = Number(this.stars.value);
		this.props.store.addReview({ review, stars });
	};
	render() {
		return (
			<div>
				<p>Submit a Review</p>
				<form onSubmit={this.submitReview}>
					<div>
						<input
							type="text"
							name="review"
							ref={node => {
								this.review = node;
							}}
							id="review"
						/>

						<select
							name="stars"
							id="stars"
							ref={node => {
								this.stars = node;
							}}>
							<option value="1">1 Star</option>
							<option value="2">2 Star</option>
							<option value="3">3 Star</option>
							<option value="4">4 Star</option>
							<option value="5">5 Star</option>
						</select>
						<button type="submit">Submit Review</button>
					</div>
				</form>
			</div>
		);
	}
}
