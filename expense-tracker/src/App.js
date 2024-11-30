
import './App.css';
import Form from './Pages/ExpenseFormPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Component/navbar/Navbar';
import ViewExpense from './Pages/ExpenseListPage';
import { useState } from 'react';
import Home from './Pages/Home';
function App() {
  const [editIndex, setEditIndex] = useState(-1);
  return (
    <>
    <Router>
      <Navbar />
        <h1 className='text-center text-xl font-bold mb-4'></h1>
      <Routes>
        <Route path="/" element={<Home path></Home>}></Route>
        <Route path='/add' element={<Form editIndex={editIndex} setEditIndex={setEditIndex} />} />
        < Route path='/view' element={<ViewExpense setEditIndex={setEditIndex}/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
