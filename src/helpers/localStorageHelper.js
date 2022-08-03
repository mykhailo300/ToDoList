const localStorageHelper = (state, column) => {
    if(state[column] !==null) {
        localStorage.setItem(`state.${column}`, JSON.stringify(state[column]));
    } else{
        localStorage.setItem(`state.${column}`, JSON.stringify([]));
    }
}

export default localStorageHelper;