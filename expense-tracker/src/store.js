import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./slices/expenseSlice";

export default configureStore({
    reducer: {
        expense: expenseReducer
    },
});

// globalState = {
//     expense: expenseReducerState
// }

// store = { globalState, dispatch}