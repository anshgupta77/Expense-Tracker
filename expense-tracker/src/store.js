import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./slices/expenseSlice";
import filterReducer from "./slices/filterExpenseSlice";
export default configureStore({
    reducer: {
        expense: expenseReducer,
        filterExpense: filterReducer
    },
});

// globalState = {
//     expense: expenseReducerState
// }

// store = { globalState, dispatch}