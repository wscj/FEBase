import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/index.css'
import Header from './components/header/index.jsx'

class App extends React.Component {
	render() {
		return (
			<Header />
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
