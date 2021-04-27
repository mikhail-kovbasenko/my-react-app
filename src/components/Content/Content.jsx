import { Route } from 'react-router';
import style from './Content.module.css';
import FriendsContainer from './Friends/FriendsContainer';
import Login from './Login/Login';
import MessagesContainer from './Messages/MessagesContainer';
import ProfileContainer from './Profile/ProfileContainer';


const Content = props => {
	return (
		<div className={style.content}>
			<div className={style.content_container}>
				<Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
				<Route path="/friends" render={() => <FriendsContainer/>}/>
				<Route path="/login" render={() => <Login/>}/>
				<Route path="/messages" render={() => <MessagesContainer/>}/>
			</div>
		</div>
	)
}

export default Content;