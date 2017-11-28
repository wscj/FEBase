import React from 'react'
import styles from './style.css'
import '../../assets/img/iconfont/style.css'
import Search from '../search/index.jsx'

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
					<Search cls={styles.flex22} />
					<div className={styles.info}>
						<span>v16.1.1</span>
						<span>GitHub<i className='icon-share'></i></span>
					</div>
				</div>
			</div>
		)
	}
}