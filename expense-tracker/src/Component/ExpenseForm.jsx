import { useState , useEffect} from "react";

import { Title, Date, Category, Price } from "./Inputs";
import { getExpensesFromBackend } from "../services/localStorage";


function emptyForm(){
  return {
    price:"",
    title:"",
    category:"",
    date:""
  }        //Object
}
function forValuesFromLocalStorage(id,expenses){
  
  const ind = expenses.findIndex(expense => expense.id === id);
  const expense = expenses[ind];

  return expense;
}
const ExpenseForm = ({onSaveExpense , editId, setEditId, expenses}) => {
  const prefilledForm = editId > -1 ? forValuesFromLocalStorage(editId, expenses)  : emptyForm();

  const [formValues,setFormValues] = useState(prefilledForm);
  const handleSubmit = (e) =>{
  e.preventDefault();
    if(title === "" || price === "" || date === "" || category === ""){
      alert("No field should left empty");
      return ;
    }
    const expense = formValues;
    onSaveExpense(expense)
    setFormValues(emptyForm());
  }
  const [date, setDate] = [formValues.date, (val) =>
    {
      return setFormValues((preState) => ({...preState, date: val}))
    }]
  const [price,setPrice] = [formValues.price, (val) => setFormValues(preState => ({...preState, price: val}))];
  const [title,setTitle] = [formValues.title, (val) => setFormValues((preState) =>({...preState , title: val }))]
  const [category,setCategory] = [formValues.category, (val) => setFormValues((preState) =>({...preState, category: val}))];
    return ( 
        <form
        className="w-full max-w-md flex flex-col justify-center items-center border border-blue-300 p-8 rounded-lg shadow-xl bg-blue-700 text-white mb-8"
        onSubmit={handleSubmit}
      >
        <h3 className="text-2xl font-bold text-white-400 mb-6">Your Expenses</h3>


        <Title value={title} onChange={setTitle}></Title>
        <Date value={date} onChange={setDate}></Date>
        <Price value={price} onChange={setPrice}></Price>
        <Category value={category} onChange={setCategory}></Category>

        {editId > -1 ?<button
          type="submit"
          className="w-1/4 p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
        >
          Edit
        </button> : <button
          type="submit"
          className="w-1/4 p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>}
        
      </form> 
     );
}
 
export default ExpenseForm;