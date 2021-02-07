import {UserActionTypes} from "./user.action.types";
import {addUserAC, getUsersAC, isAuthAC} from "./user.action";
import Api from "../../api/Api";


const INITIAL_STATE = {
    users: [],
    user: {
        name: '',
        email: '',
        password: '',
        role: ['USER_ROLE'],
    },
    authUser: false

}

let userReducer = (state = INITIAL_STATE, action) => {
    console.log('action', action.payload);
    switch (action.type) {
        case UserActionTypes.SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case UserActionTypes.GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case UserActionTypes.IS_AUTH:
            console.log('is auth', action);
            return {
                ...state,
                authUser: action.payload
            }

    }

    return state;
}

export const getUsers = () => {
    return async (dispatch) => {
        let users = await Api.getAll('users');
        dispatch(getUsersAC(users))
    }
}

export const registerUser = (user) => {
    return async (dispatch) => {
        await Api.registerUser(user);
        await dispatch(addUserAC(user));
        await is_Auth();
    }
}


export const loginUser = (userData) => {
    return async (dispatch) => {
        await Api.loginUser.getJwtToken(userData);
        await is_Auth();
    }

}

export const is_Auth = () => {
    return async (dispatch) => {
        let auth = await Api.is_Longin.getJwtToken();
        dispatch(isAuthAC(auth))
    }
}


export default userReducer;