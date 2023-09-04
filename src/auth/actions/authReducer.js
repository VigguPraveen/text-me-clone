import { MOBILE_NUMBER, PASSWORD, NAME} from "../../constants/typeConstants";

export const loginReducer = (state, action) => {

    switch (action.type) {
        case MOBILE_NUMBER:
            return { ...state, mobileNumber: action.payload, password: state.password }
        case PASSWORD:
            return { ...state, password: action.payload, mobileNumber: state.mobileNumber }
        default:
            return state
    }
}

export const registerReducer = (state, action) => {
    switch (action.type) {
        case NAME:
            return { ...state, name: action.payload, mobileNumber: state.mobileNumber, password: state.password }
        case MOBILE_NUMBER:
            return { ...state, name: state.name, mobileNumber: action.payload, password: state.password }
        case PASSWORD: 
            return { ...state, name: state.name, mobileNumber: state.mobileNumber, password: action.payload }

    }
}