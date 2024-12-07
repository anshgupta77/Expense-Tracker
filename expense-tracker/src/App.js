
import './App.css';
import Form from './Pages/ExpenseFormPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Component/navbar/Navbar';
import ViewExpense from './Pages/ExpenseListPage';
import { useState, useEffect, useReducer} from 'react';
import Home from './Pages/Home';
import { getExpensesFromBackend, setExpensesInBackend } from './services/localStorage';
import expenseReducer from './Component/reducer/Reducer';

function App() {
  const [editId, setEditId] = useState(-1);
  const [viewCard, setViewCard] = useState(false);
  // const [id, setId] = useState(-1);
  const [expenses, dispatch] = useReducer(expenseReducer,null);
  console.log("Coming from the App",expenses);
  useEffect(()=>{
    getExpensesFromBackend().then(expensesVal => 
      dispatch({
      type: "Fill",
      payload: {expense: expensesVal} // this is the action object..... dispatch dont know how to understand arrow function.
    }
  )).catch(err=>{
      console.warn("Error occured ", err.message);
  })
  },[])     // It will run only one time.
  
  useEffect(() =>{
    if(expenses === null){
      return;
    }
    setExpensesInBackend(expenses).then(() =>console.log("Expenses is saved in backend"));
  }, [expenses]);   // it will run only when the their is the change in expenses.
  return (
    <>
    <Router>
      <Navbar viewCard={viewCard} setViewCard={setViewCard}/>
        <h1 className='text-center text-xl font-bold mb-4'></h1>
      <Routes>
        <Route path="/" element={<Home path></Home>}></Route>
        <Route path='/add' element={<Form editId={editId} setEditId={setEditId} expenses={expenses} dispatch={dispatch} />} />
        < Route path='/view' element={<ViewExpense  setEditId={setEditId} expenses={expenses} dispatch={dispatch}  viewCard={viewCard} /> } />
        {/* < Route path='/viewcard' element={<ExpenseListCardPage  setEditIndex={setEditIndex} expenses={expenses} dispatch={dispatch}/>} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
