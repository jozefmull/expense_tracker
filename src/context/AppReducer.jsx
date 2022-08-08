import dummyData from '../dummyData'

// Reducer is how we specify application state changes in response to certain actions to our context 
export const AppReducer = (state, action) => {

    switch(action.type) {
        case 'DELETE_TRANSACTION':
            localStorage.setItem('transactions', JSON.stringify(state.transactions.filter(transaction => transaction.id !== action.payload)))

            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            localStorage.setItem('transactions', JSON.stringify([...state.transactions, action.payload]))

            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        case 'LOAD_TRANSACTIONS':
            localStorage.setItem('transactions', JSON.stringify([...state.transactions, ...dummyData]))

            return {
                ...state,
                dataLoaded: true,
                transactions: dummyData
            }
        case 'DELETE_ALL_TRANSACTIONS':
            localStorage.setItem('transactions', JSON.stringify([]))

            return {
                ...state,
                dataLoaded: false,
                transactions: []
            }
        default: 
            return state;
    }
}