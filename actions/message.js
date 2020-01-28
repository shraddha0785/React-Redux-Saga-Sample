import { SET_MESSAGE, FETCH_MAIN_ACCOUNT,FETCHED_MAIN_ACCOUNT_DATA } from '../types/message';

export const setMessage = (message) => ({
			type: SET_MESSAGE,
			payload: {
				message
			}
})

export const fetchMainAccount = account => ({
	type: FETCH_MAIN_ACCOUNT,
	account
})

export const fetchedMainAccontData = data => ({
	type: FETCHED_MAIN_ACCOUNT_DATA,
	data
})