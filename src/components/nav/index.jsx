import React from 'react'
import styles from './style.css'

export default class Nav extends React.Component {
	render () {
		return (
			<div className={this.props.cls + ' ' + styles.nav}>
				<a>Docs</a>
				<a>Tutorial</a>
				<a>Community</a>
				<a>Blog</a>
			</div>
		)
	}
}