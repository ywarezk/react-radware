

export function changeMessage(newMessage) {
	return {
		type: 'CHANGE_MESSAGE',
		payload: newMessage
	}
}