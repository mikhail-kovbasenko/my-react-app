import { connect } from "react-redux";
import Messages from "./Messages";

const mapStateToProps = state => {
	return {
		users: state.messages.users,
		cahts: state.messages.chats
	}
}

export default connect(mapStateToProps)(Messages);