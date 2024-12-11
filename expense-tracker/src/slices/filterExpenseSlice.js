import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filterExpense",
    initialState: {
        selectedCategoryList : ''
    },
    reducers:{
        setCategory:  (state, action) =>{
            const {selectCategory} = action.payload;
            state.selectedCategoryList = selectCategory;
        }
    }
})
export const {setCategory} = filterSlice.actions;
export default filterSlice.reducer;
export const RecentCategory = (state) => state.filterExpense.selectedCategoryList;