import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.css';

export default class Header extends React.Component {
	fnClick() {
		debugger
		console.log(666)
	}
	render () {
		return (
			<div className={styles.header} onClick={this.fnClick}>This is header.</div>
		)
	}
}