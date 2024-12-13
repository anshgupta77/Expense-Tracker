import { createSlice } from "@reduxjs/toolkit";
// import { selectAllExpense } from "./expenseSlice";
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
export const getFilteredExpenseFromList = (selectedCategory) =>(state) => {

    const expense = [...state.expense.list];
    if(selectedCategory === "") return expense;  

    return state.expense.list.filter(expense => expense.category === selectedCategory);
}

export const getSortedExpenseFromList = (filteredExpenses,sortBy) => (state) =>{
    const expense = [...filteredExpenses];
    
    if(sortBy === "date"){
        return expense.sort((a,b) =>{
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA - dateB;
        })
    }
    if(sortBy === "price"){
        return expense.sort((a,b) =>{
            const priceA = a.price;
            const priceB = b.price;
            return priceA-priceB  
        })
    }
    if(sortBy === "title"){
        const updatedExpense =  expense.sort((a,b) =>{
            return a.title.localeCompare(b.title);
        })
        return updatedExpense;
    }
    return expense;

}