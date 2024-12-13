
import './App.css';
import Form from './Pages/ExpenseFormPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Component/navbar/Navbar';
import ViewExpense from './Pages/ExpenseListPage';
import { useState, useEffect, useReducer} from 'react';
import Home from './Pages/Home';
import { getExpensesFromBackend, setExpensesInBackend } from './services/localStorage';
import { selectAllExpense } from './slices/expenseSlice';
// import expenseReducer from './Component/reducer/Reducer';
import { fillExpense } from './slices/expenseSlice';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const [editId, setEditId] = useState(-1);
  const [viewCard, setViewCard] = useState(false);
  const [reverseOrdering, setReverseOrdering] = useState(false);
  const dispatch = useDispatch();
  const expenses = useSelector(selectAllExpense)
 
  return (
    <>
    <Router>
      <Navbar viewCard={viewCard} setViewCard={setViewCard}/>
        <h1 className='text-center text-xl font-bold mb-4'></h1>
      <Routes>
        <Route path="/" element={<Home path></Home>}></Route>
        <Route path='/add' element={<Form editId={editId} setEditId={setEditId} expenses={expenses} dispatch={dispatch} />} />
        < Route path='/view' element={<ViewExpense  reverseOrdering= {reverseOrdering} setReverseOrdering={setReverseOrdering} setEditId={setEditId} expenses={expenses}  viewCard={viewCard} setViewCard={setViewCard} /> } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
