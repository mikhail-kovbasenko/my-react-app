import { connect } from "react-redux";
import Sidebar from "./Sidebar";

const mapStateToProps = state => {
	return {
		items: state.sidebar.items
	}
}

export default connect(mapStateToProps)(Sidebar);