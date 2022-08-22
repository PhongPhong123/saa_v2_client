import React, { createContext, useReducer } from "react";
import reducer from './reducer';
import actions from './action';

interface IProps {
    children: React.ReactElement
}

export interface IInitialState {
    appointments: any[];
    setAppointments: (payload: any[]) => void
}

const initialState: IInitialState = {
    appointments: [],
    setAppointments: () => {}
}

export const SearchingContext = createContext<IInitialState>(initialState);

function SearchingProvider({ children }: IProps) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {
        appointments: state.appointments,
        setAppointments: (payload: any[]) => {
            dispatch({ type: actions.SET_APPOINTMENTS, payload})
        }
    }

    return (
        <SearchingContext.Provider value={value}>
            {children}
        </SearchingContext.Provider>
    )
}

export default SearchingProvider;