import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.css';
import '../../assets/img/iconfont/style.css'

export default class Header extends React.Component {
	render () {
		return (
			<div className={styles.header}>
				<div className={styles.con}>
					<a className={styles.logoCon}>
						<span className={'icon-react ' + styles.logo}></span>
						<span className={styles.title}>React</span>
					</a>
					<div className={styles.test1}></div>
					<div className={styles.test2}></div>
					<div className={styles.info}>
						<span>v16.1.1</span>
						<span>GitHub<i className='icon-share'></i></span>
					</div>
				</div>
			</div>
		)
	}
}