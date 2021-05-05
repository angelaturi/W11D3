const uiReducer = (state = {}, actions) => {
    Object.freeze(state)

    switch(actions.type){
        default:
            return state;
    }
}

export default uiReducer;