import { SET_MESSAGE, FETCHED_MAIN_ACCOUNT_DATA } from '../types/message';

const initState = {
	message: ''
}

export default (state = initState, action) => {

	switch(action.type) {
		case SET_MESSAGE :
			return {...state, message: action.payload.message}
		case FETCHED_MAIN_ACCOUNT_DATA :
		console.log('success')
			return {...state, message: action.data}	
		default :
			return state
	}

}