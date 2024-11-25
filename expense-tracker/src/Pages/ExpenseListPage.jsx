
// now navigate to ExpenseFormPage.jsx.
import React, { useState } from "react";

import ExpenseList from "../Component/ExpenseList";
import { useNavigate } from "react-router-dom";
const ExpenseListPage = ({setEditIndex}) => {
  const [tableData, setTableData] = useState(
    JSON.parse(localStorage.getItem("data") || "[]")
  );

  const navigate = useNavigate();
  
  const handleEdit = (index) => {
    setEditIndex(index);
    navigate("/add");
  };

  const handleDelete = (index) => {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    if(updatedData.length === 0){
      localStorage.clear()
    }
    else{
      localStorage.setItem("data", JSON.stringify(updatedData));
    }
    setTableData(updatedData);
  };

  return (
        <ExpenseList 
        handleEdit={handleEdit}
        handleDelete = {handleDelete}
        tableData = {tableData}>
        </ExpenseList>
  );
};

export default ExpenseListPage;