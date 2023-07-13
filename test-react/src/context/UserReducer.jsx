const UserReducer = (state , action) => {
    switch (action.type) {
        case "SET_USER":
            return{
                ...state,
                users: action.payload,
            }

        default:
            return state
            
    }
}


export default UserReducer