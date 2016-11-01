import React, { Component } from 'react';
import {styles} from './Home_style';
import 'bootstrap/dist/css/bootstrap.css';

export default class Home extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<h1 style={styles.title}>
						Hello World
					</h1>
				</div>
			</div>
		);
	}
}