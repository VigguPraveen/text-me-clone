import { MOBILE_NUMBER, PASSWORD } from "../../constants/typeConstants";

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