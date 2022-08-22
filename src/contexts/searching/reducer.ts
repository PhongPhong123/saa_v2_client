import { IInitialState } from "./context";
import { IAction } from "../../types/context.interface";
import actions from "./action";

export default function reducer(state: IInitialState, action: IAction) {
    switch (action.type) {
        case actions.SET_APPOINTMENTS:
            return {
                ...state,
                appointments: [...action.payload]
            };
        default:
            return state;
    }
}