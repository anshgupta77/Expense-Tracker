
function generateID(state){
  const id = state.reduce(reducer, 10);
  console.log(id);
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
        console.log("state is null");
        return state;
      }
      const updatedExpense = [...state];
      let expense = action.payload.expense;
      expense = {...expense, id: generateID(state)+1};
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
      const id = action.payload.id;
      console.log("Edit Component id:" ,id);
      const ind = state.findIndex(expense => expense.id === id);
      console.log("Edit Component ind", ind);
      updatedExpense[ind] = expense;
      return updatedExpense;     // filter always create a new array. As it not using the previous array.
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