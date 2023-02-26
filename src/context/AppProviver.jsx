import React, { useContext, createContext, useReducer } from 'react';
import authReducer from './reducers/authReducer';
import authInitialState from './initialStates/authInitialState';
import contactsInitialState from './initialStates/contactsInitialState';
import contactsReducer from './reducers/contactsReducer';


const GlobalContext = createContext();

const AppProvider = ({ children }) => {
    const [authState, authDispatcher] = useReducer(
        authReducer,
        authInitialState,
      );
    
    const [contactState, contactDispatcher] = useReducer(
        contactsReducer,
        contactsInitialState
    )
    
    const Globals = {
        authState,
        authDispatcher,
        contactState,
        contactDispatcher
    }

    return <GlobalContext.Provider value={Globals}>
        {children}
    </GlobalContext.Provider>
}

const useAppContext = () => {
    return useContext(GlobalContext);
}

export { AppProvider, useAppContext };
