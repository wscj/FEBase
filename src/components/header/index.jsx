import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.css';

export default class Header extends React.Component {
	render () {
		return (
			<div className={styles.header}>This is header.</div>
		)
	}
}