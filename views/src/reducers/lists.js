import { ITEM_CLICKED, ITEM_VIEW, ADD_ITEM } from '../actions/list_actions';

let ListItems = [
    { name: 'Actions', description: 'Description for actions' },
    { name: 'Containers', description: 'Description for containers' },
    { name: 'Reducers', description: 'Description for reducer' }
];

const INITIAL_STATE = { all: ListItems, item: null, salex: {order:1,line:1,article:1}};

export default function(state ={}, action) {
    switch(action.type) {
        case ITEM_CLICKED:
            return { ...state, item: action.payload };
        case ADD_ITEM:
            return {...state, all: [...state.all, action.payload ] };
        case ITEM_VIEW:
            switch(action.payload) {
                case 'Actions':
                    return {...state, item: ListItems[0] };
                case 'Containers':
                    return {...state, item: ListItems[1] };
                case 'Reducers':
                    return {...state, item: ListItems[2] };
            }
      /*  case 'INITIAL_LOADED':
            return {...state, salex: action.payload };*/
    }
    return state;
}
