import {FETCH_USERS, DELETE_USER, UPDATE_USER} from '../actions/type'

const initState = {
    users : [],
    user : {}
}

export default function(state=initState, action){
    switch(action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users : action.payload
            }
        case DELETE_USER:
            return {
                ...state,
                users : action.payload
            }
        case UPDATE_USER:
            return {
                ...state,
                users : action.payload
            }
        default:
            return state
    }
}
