import style from './Header.module.css';
import logo from './logo.png';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from './../../redux/reducers/auth';

const Header = props => {
	const logOut = () => props.logOut();
	
	return (
		<div className={style.header}>
			<div className={style.header_content}>
				<div className={style.header_logo}>
					<img src={logo}/>
				</div>
				<div className={style.header_title}>
					Lorem Ipsum Network
				</div>
				<div className={style.header_network_status}>
					{
						props.isAuth
						? <div>
							 <span>{props.login}</span>
							 <button className={'simple-button'} onClick={logOut}>Logout</button>
						  </div>
						: <NavLink to={'/login'}>Login</NavLink>
					}
				</div>
			</div>
		</div>
	)
}

class HeaderContainer extends React.Component {
	render() {
		return <Header {...this.props}/>
	}
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login
	}
}

export default connect(mapStateToProps, {logOut})(HeaderContainer);