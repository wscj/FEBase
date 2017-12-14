import React from 'react'
import styles from './style.css'
import PropTypes from 'prop-types'

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

Nav.propTypes = {
	cls: PropTypes.string.isRequired
}