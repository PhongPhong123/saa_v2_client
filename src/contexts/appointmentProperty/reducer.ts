import actions from './action';
import { IInitialState } from "./context";
import { IAction } from '../../types/context.interface'

export default function(state: IInitialState, action: IAction) {
    switch (action.type) {
        case actions.CHOOSE_TAG:
            return {
                ...state,
                tag: {
                    ...action.payload
                },
            }
        case actions.CHOOSE_DESTINATION:
            return {
                ...state,
                destination: {
                    ...action.payload
                },
            }
        case actions.CHOOSE_DATE:
            return {
                ...state,
                date: action.payload,
            }
        case actions.CLEAR:
            return {
                ...state,
                tag: {
                    id: "",
                    name: "",
                },
                destination: {
                    codename: "",
                    name: "",
                },
                date: "",
            }
        default:
            return state;
    }
}