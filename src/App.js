import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import './App.css';
import { Preloader } from './commons/Preloader/Preloader';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import {initializeApp} from './redux/reducers/app';

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}
	render() {
		if(!this.props.initialized) {
			return <Preloader/>
		}
		return (
			<div className="app">
				<Header/>
				<div className="app-content">
				  <SidebarContainer/>
				  <Content/>
				</div>
			</div>
		 );
	}
}

const mapStateToProps = state => {
	return {
		initialized: state.app.initialized
	}
}

export default compose(
	connect(mapStateToProps, {initializeApp}),
	withRouter
)(App);
