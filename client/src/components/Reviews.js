import React from 'react';
import { observer } from 'mobx-react';
import StarRatingComponent from 'react-star-rating-component';
function List({ data }) {
	return (
		<div>
			<StarRatingComponent name="reviewRate" starCount={data.stars} />
		</div>
	);
}
const Reviews = ({ store }) => {
	return (
		<div>
			<ul>
				{store.reviewList.map((e, i) => (
					<List key={i} data={e} />
				))}
			</ul>
		</div>
	);
};

export default observer(Reviews);
