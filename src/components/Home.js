import React, { Component } from 'react';
import styles from './Home.css';

export default class Home extends Component {
	render() {
		return (
			<div className={styles.home}>
				<h1>Hello World</h1>
			</div>
		);
	}
}