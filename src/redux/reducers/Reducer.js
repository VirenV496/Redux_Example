import {INPUT_UPDATE} from '../actions/Types'

const INITIAL_STATE = ""

export const reducer = (state = INITIAL_STATE, action) => {

    const {type, data} = action;

    switch (type) {
        case INPUT_UPDATE:
            state = data
            return state
    
        default:
            return state
    }
}