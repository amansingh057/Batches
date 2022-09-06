const initialState = {
    authError: null,
    isLoggedIn: false,
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                authError: null,
                isloggedIn: true
            }
        case "LOGIN_FAILURE":
            return {
                authError: action.payload,
                isLoggedIn: false
            }

        case "SIGNOUT":
            return {
                authError:null,
                isLoggedIn:false
            }
        case "SIGNOUT_FAILURE":
            return {
                authError: null,
                isLoggedIn: false
            }
        default :
        return state;     
    }
}
export default authReducer;