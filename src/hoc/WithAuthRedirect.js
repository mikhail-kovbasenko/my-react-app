import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth
	}
}

export const WithAuthRedirect = Component => {
	class RedirectComponent extends React.Component {
		render() {
			if(!this.props.isAuth) return <Redirect to="/login"/>
			return <Component {...this.props}/>
		}
	}
	const ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

	return ConnectedAuthRedirectComponent;
}

