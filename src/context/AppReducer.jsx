import dummyData from '../dummyData'

// Reducer is how we specify application state changes in response to certain actions to our context 
export const AppReducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        case 'LOAD_TRANSACTIONS':
            return {
                ...state,
                dataLoaded: true,
                transactions: dummyData
            }
        case 'DELETE_ALL_TRANSACTIONS':
            return {
                ...state,
                dataLoaded: false,
                transactions: []
            }
        default: 
            return state;
    }
}