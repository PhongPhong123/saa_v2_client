import React, { createContext, useReducer } from 'react';
import reducer from './reducer';
import actions from './action';

interface IProps {
    children: React.ReactElement;
}

type TTag = { id: string, name: string };
type TDestination = { codename: string, name: string };

export interface IInitialState {
    tag: TTag;
    destination: TDestination;
    date: string;
    setTag: (payload: TTag) => void;
    setDestination: (payload: TDestination) => void;
    setDate: (date: string) => void;
}

const initialState: IInitialState = {
    tag: {
        id: "",
        name: "",
    },
    destination: {
        codename: "",
        name: "",
    },
    date: "",
    setTag: () => {},
    setDestination: () => {},
    setDate: () => {},
}

export const AppointmentPropertyContext = createContext<IInitialState>(initialState);

function AppointmentPropertyProvider({ children }: IProps) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const value = {
        tag: state.tag,
        destination: state.destination,
        date: state.date,
        setTag: (payload: TTag) => {
            dispatch({ type: actions.CHOOSE_TAG, payload});
        },
        setDestination: (payload: TDestination) => {
            dispatch({ type: actions.CHOOSE_DESTINATION, payload});
        },
        setDate: (payload: string) => {
            dispatch({ type: actions.CHOOSE_DATE, payload});
        }
    }

    return (
        <AppointmentPropertyContext.Provider value={value}>
            {children}
        </AppointmentPropertyContext.Provider>
    )
}

export default AppointmentPropertyProvider;