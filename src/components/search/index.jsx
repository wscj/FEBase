import React from 'react'
import ReactDOM from 'react-dom'
import styles from './style.css'
import '../../assets/img/iconfont/style.css'

export default class Search extends React.Component {
	render () {
		return (
			<div className={this.props.cls + ' ' + styles.search}>
				<div className={styles.inputCon}>
					<span className={'icon-search'}></span>
					<input className={styles.input} placeholder="Search docs" />
				</div>
			</div>
		)
	}
}