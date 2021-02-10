

export default function helloReducer(state = {
	message: 'hello world'
}, action) {
	switch(action.type) {
		case 'CHANGE_MESSAGE':
			return {...state, message: action.payload}
		default:
			return state
	}
}