import { createSlice } from "@reduxjs/toolkit";
const generateID = (expenses) => {
    console.log("Expenses in the slices", typeof expenses);
    let newId = -1;
    expenses.forEach(ele => {
        newId = Math.max(newId, ele.id);
    });
    return newId + 1;
}
const expenseSlice = createSlice({
    name: "expense",
    initialState: {
        currency : "Rupee",
        list: [{
            id: "1",
            title: "Jawan",
            price: "12110",
            category: "Movie",
            date: "2024-01-11"
        },
        {
            id: "2",
            title: "PushPa",
            price: "100",
            category: "Movie",
            date: "2024-10-11"
        },
        {
            id: "1",
            title: "Skin Care",
            price: "120",
            category: "Personal",
            date: "2024-02-11"
        },
        {
            id: "1",
            title: "War",
            price: "1280",
            category: "Movie",
            date: "2024-09-11"
        }],
    },
    reducers:{
        fillExpense :  (state, action) =>{
            state.list = action.payload;
        },
        addExpense : (state, action) =>{
            const newExpense = {
                ...action.payload.expense,
                id: generateID(state.list)+1
            }
            state.list.push(newExpense);
        },
        editExpense : (state, action) =>{

            console.log("before the edit",state.list);
            const {editId, expense} = action.payload;
            console.log(expense);
            const ind = state.list.findIndex(expense => expense.id === editId);
            state.list[ind]=expense;
            console.log("after the edit",state.list);
        },
        deleteExpense: (state, action) =>{
            const {id} = action.payload;
            state.list  = state.list.filter(ele => ele.id !== id);
        },
        reverseExpense: (state, action) =>{
            state.list.reverse();
        }
    }
})
export const {addExpense, editExpense, deleteExpense, fillExpense, reverseExpense} = expenseSlice.actions; // reducers automatically create the action creater.
export default expenseSlice.reducer;
export const selectAllExpense = (state) => state.expense.list;