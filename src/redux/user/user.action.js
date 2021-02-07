import {UserActionTypes} from "./user.action.types";


export const getUsersAC = (users) => {
    return {
        type: UserActionTypes.GET_USERS,
        payload: users
    }
}

export const getUserAC = (user) => {
    return {
        type: UserActionTypes.GET_USER,
        payload: user
    }
}

export const addUserAC = (user) => {
    return {
        type: UserActionTypes.SET_USER,
        payload: user
    }
}

export const isAuthAC =(auth) =>{
    return{
        type:UserActionTypes.IS_AUTH,
        payload:auth
    }
}

export const deleteUsersAC = (user_id) => {
    return {
        type: UserActionTypes.GET_USERS,
        payload: user_id
    }
}