
// now navigate to ExpenseFormPage.jsx.
import React, { useState } from "react";

import ExpenseList from "../Component/ExpenseList";
import { useNavigate } from "react-router-dom";
import { getExpensesFromLocals, setExpensesInLocals } from "../service/localStorage";
function useForceUpdate(){
    const[, setValues] = useState(0);
    return () => setValues(value => value+1);
}
const ExpenseListPage = ({setEditIndex}) => {
  const expenses = getExpensesFromLocals();
  const forceUpdate = useForceUpdate(); //useForceUpdate is a hook ... and forceUpdate is function.
  const navigate = useNavigate();
  
  const handleEdit = (index) => {
    setEditIndex(index);
    navigate("/add");
  };

  const handleDelete = (index) => {
    const updatedData = expenses;
    updatedData.splice(index, 1);
    setExpensesInLocals(updatedData);
    forceUpdate();
  };

  return (
        <ExpenseList 
        handleEdit={handleEdit}
        handleDelete = {handleDelete}
        expenses = {expenses}>
        </ExpenseList>
  );
};

export default ExpenseListPage;