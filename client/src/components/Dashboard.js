import React from 'react';
import { observer } from 'mobx-react';

const Dashboard = ({ store }) => {
	return (
		<div>
			<p id="reviewCount">{store.reviewCount}</p>
			<p id="averageScores">{store.averageScore}</p>
		</div>
	);
};

export default observer(Dashboard);
