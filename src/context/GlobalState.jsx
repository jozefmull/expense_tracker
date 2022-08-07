import React, {createContext, useReducer} from 'react' 
import {AppReducer} from './AppReducer'

// initial state
const initialState = {
    transactions:[
        {
        amount: 270,
        category: "Investments",
        date: "2022-08-07",
        id: "1",
        type: "Income"
        },
        {
            amount: 280,
            category: "Investments",
            date: "2022-08-08",
            id: "2",
            type: "Income"
        },
        {
        amount: 290,
        category: "Investments",
        date: "2022-08-06",
        id: "3",
        type: "Income"
        },
        {
            amount: 280,
            category: "Car",
            date: "2022-08-07",
            id: "4",
            type: "Expense"
        },
        {
            amount: 290,
            category: "Car",
            date: "2022-08-08",
            id: "5",
            type: "Expense"
        },
        {
            amount: 270,
            category: "Car",
            date: "2022-08-06",
            id: "6",
            type: "Expense"
        }
    ],
    error: null,
    loading: true
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
    
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}