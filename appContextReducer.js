export const appReducer = (state, action) => {

    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn: true
            }
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload
            }
        case 'SETUSERNAME':
            return {
                ...state,
                username: action.payload
            }
        case 'SETUSERID':
            return {
                ...state,
                userId: action.payload
            }
        default:
            return state;
    }
}