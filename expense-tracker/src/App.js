
import './App.css';
import Form from './Component/Form';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Component/Navbar';
import ViewExpense from './Component/ViewExpense';
import { useState } from 'react';
function App() {
  const [formdata, setformdata] = useState({
    price: "",
    date: "",
    title: "",
    category: "",
  });

  const [tableData, setTableData] = useState([]);
  return (
    <>
    <Router>
      <Navbar />
        <h1 className='text-center text-xl font-bold mb-4'>Expense Tracker App</h1>
      <Routes>
        <Route path='/' element={<Form  formdata={formdata} setformdata={setformdata}  />} />
        < Route path='/view' element={<ViewExpense  tableData={tableData} 
                setTableData={setTableData}/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
