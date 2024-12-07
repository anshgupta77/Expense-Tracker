import React from "react";
import ExpenseList from "../Component/ExpenseList";
import { useNavigate } from "react-router-dom";
import ExpenseCard from "../Component/ExpenseCard";

const ExpenseListPage = ({ setEditId, expenses, dispatch, viewCard }) => {
  const navigate = useNavigate();
  console.log("ViewCard", viewCard);
  const handleEdit = (id) => {
    setEditId(id);
    navigate("/add");
  };

  const handleDelete = (id) => {
    dispatch({
      type: "Delete",
      payload: { id },
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
