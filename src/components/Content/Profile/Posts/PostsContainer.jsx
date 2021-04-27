import { connect } from "react-redux";
import { addPostActionCreator, removePostActionCreator } from "../../../../redux/reducers/profile";
import Posts from "./Posts";

const mapStateToProps = state => {
	return {
		items: state.profile.posts
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addPost: text => {
			dispatch(addPostActionCreator(text));
		},
		removePost: id => {
			dispatch(removePostActionCreator(id));
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts)