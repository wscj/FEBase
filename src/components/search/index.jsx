import React from 'react'
import styles from './style.css'
import '../../assets/img/iconfont/style.css'
import PropTypes from 'prop-types'

export default class Search extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			cls: styles.input
		}
		this.focus = this.focus.bind(this)
		this.blur = this.blur.bind(this)
	}

	removeFocus() {
		this.textInput.blur()
		let temp = ''
		this.state.cls.split(' ').forEach(x => {
			if (x !== styles.focused) {
				temp += (temp.length ? ' ' : '') + x
			}
		})
		this.setState({ cls: temp })
	}

	focus() {
		if (this.state.cls.split(' ').includes(styles.focused)) {
			this.removeFocus()
		}
		else {
			this.textInput.focus()
			this.setState({ cls: this.state.cls + ' ' + styles.focused })
		}
	}

	blur() {
		this.removeFocus()
	}

	render () {
		return (
			<div className={this.props.cls + ' ' + styles.search}>
				<div className={styles.inputCon}>
					<span className='icon-search' onClick={this.focus}></span>
					<input className={this.state.cls}
						onBlur={this.blur}
						ref={input => { this.textInput = input }}
						placeholder="Search docs" />
				</div>
			</div>
		)
	}
}

Search.propTypes = {
	cls: PropTypes.string.isRequired
}