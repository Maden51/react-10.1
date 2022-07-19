import { FILTER_SERVICE } from "../actions/actionTypes";

const initialState = {
    filteredItems: [],
    filteredText: false
}

export default function ServiceFilterReducer(state = initialState, action) {
    switch(action.type) {
        case FILTER_SERVICE: const {items, value} = action.payload;
            if (!value) {return {filteredItems: items, filteredText: false}};
            const result = items.filter(service => service.name.match(value) ? service : null);
            return {filteredItems: result, filteredText: value};
        default :  return state;
    }
}