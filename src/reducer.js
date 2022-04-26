
import * as actions from './actionsType/newUser'

const initialUser = {
    username: undefined,
    email: undefined,
    token: undefined,
    entry: undefined
}

export function user(state=initialUser, action){
    switch(action.type){
        case actions.SET_USERNAME:
            return Object.assign({}, state, {username: action.username})
        case actions.SET_EMAIL:
            return Object.assign({}, state, {username: action.email})
        case actions.SET_TOKEN:
            return Object.assign({}, state, {username: action.token})
        case actions.SET_ENTRY:
            return Object.assign({}, state, {username: action.entry})
        default:
            return state
    }
}