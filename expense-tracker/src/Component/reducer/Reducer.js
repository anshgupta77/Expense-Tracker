
function generateID(state){
  const id = state.reduce(reducer, 10);
  return id;

  function reducer(acc, ele){
    const {id} = ele;
    if(id > acc){
      return id;
    }
    return acc;
  }
}

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
      const id = action.payload;
      const ind =state.findIndex(expense => expense.id === id);
      updatedExpense.splice(ind, 1);
      return updatedExpense;
    }
    case "Add": {
      if(checkStateNUll(state, action)){

        return state;
      }
      const updatedExpense = [...state];
      let expense = action.payload.expense;
      expense = {...expense, id: generateID(state)+1};

      updatedExpense.push(expense);
      return updatedExpense;
    }
    case "Edit":{
      if(checkStateNUll(state, action)){
        return state;
      }
      const updatedExpense = [...state];
      const expense = action.payload.expense;
      const id = action.payload.id;
      const ind = state.findIndex(expense => expense.id === id);
      updatedExpense[ind] = expense;
      return updatedExpense;     // filter always create a new array. As it not using the previous array.
    }
    default: {
      return state;
    }

  }
  
}
function checkStateNUll(state, action){
  if(state === null){
    return true;
  }
  return false;
}