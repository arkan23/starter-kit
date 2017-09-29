

export default function(state ={}, action) {
    switch(action.type) {
        case 'INITIAL_LOADED':
            return {...state, initial: action.payload };
    }
    return state;
}
