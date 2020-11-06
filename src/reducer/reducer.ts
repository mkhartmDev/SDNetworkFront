
let initialState: any = {
    authenticated: true,
    searchInput: '',
    s3BaseURL_ProfilePicture: "https://images-project2-kyle.s3-us-west-1.amazonaws.com/profile-picture/",
    userObject: null
}

// Method to make a deep copy of state. Always use before manipulating state.
const deepCopy = (stateToBeCopied: any) => {
    let stateCopy = JSON.parse(JSON.stringify(stateToBeCopied));
    return stateCopy;
}

const reducer = (state = initialState, action: any) => {
    if (action.type === 'AUTHENTICATE_USER'){
        let stateCopy = deepCopy(state);
        stateCopy.authenticated = true;
        return stateCopy;
    }
    if (action.type === 'UNAUTHENTICATE_USER'){
        let stateCopy = deepCopy(state);
        stateCopy.authenticated = false;
        return stateCopy;
    }
    if (action.type === 'SET_SEARCH_INPUT'){
        let stateCopy = deepCopy(state);
        stateCopy.searchInput = action.payload.searchInput;
        return stateCopy
    }
    if (action.type === 'SET_GLOBAL_USER_OBJECT') {
        let stateCopy = deepCopy(state);
        stateCopy.userObject = action.payload.userObject;
        return stateCopy;
    }
    return state;
}

export default reducer;
