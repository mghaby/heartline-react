function reducer(state, action) {
    switch(action.type) {
        case 'setUsers':{
			return {
				...state,
				users: action.data
			}
		}
		case 'addUser': {
			return {
				...state,
				users: [action.data, ...state.jokes]
			}
		}
		// case 'deleteUser': {
		// 	const updatedUsers = state.users.filter((user) => {
		// 		return user.id !== parseInt(action.data)
		// 	})
		// 	return {
		// 		...state,
		// 		users: updatedUsers
		// 	}
		// }
		// case 'updateUser': {
		// 	const user = state.users.find((user) => user.id == action.data.id)
		// 	const theRest = state.users.filter((user) => user.id != action.data.id)
		// 	const updatedUser = Object.assign(user, action.data)
		// 	return {
		// 		...state,
		// 		users: [updatedUser, ...theRest]
		// 	}

		// }
		case 'setLoggedInUser': {
			return {
				...state,
				loggedInUser: action.data
			}
		}
		case 'setToken': {
			return {
				...state,
				auth: {
					...state.auth,
					token: action.data
				}
			}
		}
		default: return state
	}
}