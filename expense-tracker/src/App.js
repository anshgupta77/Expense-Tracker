
import './App.css';
import Form from './Pages/ExpenseFormPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Component/navbar/Navbar';
import ViewExpense from './Pages/ExpenseListPage';
import { useState, useEffect } from 'react';
import Home from './Pages/Home';
import { getExpensesFromBackend, setExpensesInBackend } from './services/localStorage';
function App() {


  const [editIndex, setEditIndex] = useState(-1);
  const [expenses, setExpenses] = useState([]);
  console.log("Coming from the App",expenses);
  useEffect(()=>{
    getExpensesFromBackend().then(expensesVal => setExpenses(expensesVal))
  },[])     // It will run only one time.
  
  useEffect(() =>{
    setExpensesInBackend(expenses).then(() =>console.log("Expenses is saved in backend"));
  }, [expenses]);   // it will run only when the their is the change in expenses.
  return (
    <>
    <Router>
      <Navbar />
        <h1 className='text-center text-xl font-bold mb-4'></h1>
      <Routes>
        <Route path="/" element={<Home path></Home>}></Route>
        <Route path='/add' element={<Form editIndex={editIndex} setEditIndex={setEditIndex} expenses={expenses} setExpenses={setExpenses} />} />
        < Route path='/view' element={<ViewExpense  setEditIndex={setEditIndex} expenses={expenses} setExpenses={setExpenses}/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
