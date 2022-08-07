import React, {createContext, useReducer} from 'react' 
import {AppReducer} from './AppReducer'

// initial state
const initialState = {
    transactions:[],
    error: null,
    loading: true,
    dataLoaded: false
};

// create global context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState) 
    
    const deleteTransaction = (id) => {
            dispatch({type: 'DELETE_TRANSACTION', payload: id})
    }

    const addTransaction = (transaction) => {
            dispatch({type: 'ADD_TRANSACTION', payload: transaction})
    }

    const loadDummyData = () => {
        dispatch({type: 'LOAD_TRANSACTIONS'})
    }

    const deleteAllData = () => {
        dispatch({type: 'DELETE_ALL_TRANSACTIONS'})
    }
    
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        dataLoaded: state.dataLoaded,
        deleteTransaction,
        addTransaction,
        loadDummyData,
        deleteAllData
    }}>
        {children}
    </GlobalContext.Provider>)
}