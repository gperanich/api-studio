const UserInitialState = {
    isLoggedIn: true
}

const User = (state = UserInitialState, action = {}) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default User;