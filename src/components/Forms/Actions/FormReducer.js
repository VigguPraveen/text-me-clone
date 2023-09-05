import { NAME, MOBILE_NUMBER, CANCEL } from "../../../constants/typeConstants"

export const addContactReducer = (state, action) => {
    switch (action.type) {
        case NAME: 
            return {...state, name: action.payload, mobileNumber: state.mobileNumber}
        case MOBILE_NUMBER:
            return { ...state, name: state.name, mobileNumber: action.payload }
        case CANCEL:
            return { ...state, name: action.payload, mobileNumber: action.payload }
        default:
            return state
    }
}