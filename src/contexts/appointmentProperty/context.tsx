import React, { createContext, useReducer } from 'react';
import reducer from './reducer';
import actions from './action';

interface IProps {
    children: React.ReactElement;
}

export interface IInitialState {
    tag: string;
    destination: string;
    date: string;
    setTag: (tagName: string) => void;
    setDestination: (destination: string) => void;
    setDate: (date: string) => void;
}

const initialState: IInitialState = {
    tag: "",
    destination: "",
    date: "",
    setTag: (tagName: string) => {},
    setDestination: (destination: string) => {},
    setDate: (date: string) => {},
}

export const AppointmentPropertyContext = createContext<IInitialState>(initialState);

function AppointmentPropertyProvider({ children }: IProps) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const value = {
        tag: state.tag,
        destination: state.destination,
        date: state.date,
        setTag: (tagName: string) => {
            dispatch({ type: actions.CHOOSE_TAG, payload: tagName});
        },
        setDestination: (destination: string) => {
            dispatch({ type: actions.CHOOSE_DESTINATION, payload: destination});
        },
        setDate: (date: string) => {
            dispatch({ type: actions.CHOOSE_DATE, payload: date});
        }
    }

    return (
        <AppointmentPropertyContext.Provider value={value}>
            {children}
        </AppointmentPropertyContext.Provider>
    )
}

export default AppointmentPropertyProvider;