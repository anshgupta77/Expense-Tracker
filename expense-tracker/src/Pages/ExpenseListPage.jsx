import React from "react";
import ExpenseList from "../Component/ExpenseList";
import { useNavigate } from "react-router-dom";
import ExpenseCard from "../Component/ExpenseCard";

const ExpenseListPage = ({ setEditIndex, expenses, dispatch, viewCard }) => {
  const navigate = useNavigate();
  console.log("ViewCard", viewCard);
  const handleEdit = (index) => {
    setEditIndex(index);
    navigate("/add");
  };

  const handleDelete = (ind) => {
    dispatch({
      type: "Delete",
      payload: { ind },
    });
  };

  return (
    <>
      {!viewCard ? (
        <ExpenseList
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          expenses={expenses}
        />
      ) : (
        <ExpenseCard
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          expenses={expenses}
        />
      )}
    </>
  );
};

export default ExpenseListPage;
