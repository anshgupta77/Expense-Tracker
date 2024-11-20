import { useState } from "react";
import { Title, Date, Category, Price } from "./Inputs";
const ExpenseForm = ({onSaveExpense}) => {
    const [title, setTitle] = useState("");
    const [price,setPrice] = useState("");
    const [date,setDate] = useState("");
    const [category,setCategory] = useState("");

    const handleSubmit = (e) =>{
      e.preventDefault();
      if(title === "" || price === "" || date === "" || category === ""){
        alert("No field should left empty");
        return ;
      }
      onSaveExpense({title,price,date,category})
      setTitle("");
      setCategory("");
      setDate("");
      setPrice("");
    }
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
        <button
          type="submit"
          className="w-1/4 p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form> 
     );
}
 
export default ExpenseForm;