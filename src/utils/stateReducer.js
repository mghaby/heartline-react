function reducer(state, action) {
    switch(action.type) {
        case 'setUser':{
			return {
				...state,
				user: action.data
			}
		}
		case 'deleteUser': {
			const updatedUsers = state.users.filter((user) => {
				return user.id !== parseInt(action.data)
			})
			return {
				...state,
				user: updatedUsers
			}
		}
		case 'updateUser': {
			const user = state.users.find((user) => user.id === action.data.id)
			const theRest = state.users.filter((user) => user.id !== action.data.id)
			const updatedUser = Object.assign(user, action.data)
			return {
				...state,
				user: [updatedUser, ...theRest]
			}

		}
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
		case 'addRandom': {
			return {
				...state,
				random: action.data
			}
		}
		case 'addCalories': {
			return {
				...state,
				user: {
					...state.user,
					calories:  state + action.data
				}
			}
		}
		case 'subtractCalories': {
			return {
				...state,
				user: {
					...state.user,
					calories: state - action.data
				}
			}
		}
		case 'addWater': {
			return {
				...state,
				user: {
					...state.user,
					water_count: state + action.data
				}
			}
		}
		case 'subtractWater': {
			return {
				...state,
				user: {
					...state.user,
					water_count: state -action.data
				}
			}
		}
	}
}

export default reducer