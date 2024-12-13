import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filterExpense",
    initialState: {
        selectedCategoryList : '',
        sortListBy: ""
    },
    reducers:{
        setCategory:  (state, action) =>{
            const {selectCategory} = action.payload;
            state.selectedCategoryList = selectCategory;
        },
        setSortBy:  (state, action) =>{
            const {selectSort} = action.payload;
            state.sortListBy = selectSort;
        },
        clearSortBy: (state) =>{
            state.sortListBy = "";
        }
    }
})
export const {setCategory, setSortBy, clearSortBy} = filterSlice.actions;
export default filterSlice.reducer;
export const RecentCategory = (state) => state.filterExpense.selectedCategoryList;

export const RecentSort = (state) => state.filterExpense.sortListBy;