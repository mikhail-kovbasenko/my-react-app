const initialState = {
	items: [
		{title: 'Profile', to: '/profile'},
		{title: 'Friends', to: '/friends'},
		//{title: 'Messages', to: '/messages'}
	]
};

const sidebar = (state = initialState, action) => {
	return state;
}

export default sidebar;