import { setExpensesInBackend } from "../../services/localStorage";
export default function expenseReducer(state, action){
  switch(action.type){
    case "Fill" : {
      if(!checkStateNUll(state, action)){
        return state;
      }

      return action.payload.expense;
    }
    case "Delete": {
      if(checkStateNUll(state, action)){
        return state;
      }
      const updatedExpense = [...state];
      const ind = action.payload;
      updatedExpense.splice(ind, 1);
      return updatedExpense;
    }
    case "Add": {
      if(checkStateNUll(state, action)){
        console.log("state is null");
        return state;
      }
      const updatedExpense = [...state];
      const expense = action.payload.expense;
      console.log(expense);
      updatedExpense.push(expense);
      return updatedExpense;
    }
    case "Edit":{
      if(checkStateNUll(state, action)){
        return state;
      }
      const updatedExpense = [...state];
      const expense = action.payload.expense;
      const ind = action.payload.editIndex;
      updatedExpense[ind] = expense;
      return updatedExpense;
    }
    default: {
      return state;
    }

  }
  
}
function checkStateNUll(state, action){
  console.log(action.type);
  if(state === null){
    console.log("Data is not loaded yet!");
    return true;
  }
  return false;
}