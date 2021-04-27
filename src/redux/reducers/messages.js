const initialState = {
	users: [
		{id: 1, name: 'Oleg'},
		{id: 2, name: 'Denis'},
		{id: 3, name: 'Vladimir'},
		{id: 4, name: 'Svetlana'},
		{id: 5, name: 'Ramil'},
	],
	chats: [
		{id: 1, message: 'Hello, how are you?', authorId: 2},
		{id: 2, message: 'yooo!', authorId: 1},
		{id: 3, message: 'Let`s go to the cinema', authorId: 1},
		{id: 4, message: 'Hello, how are you?', authorId: 2},
	]
}

const messages = (state = initialState, action) => {
	switch(action.type) {
		default: return state;
	}
}

export default messages;