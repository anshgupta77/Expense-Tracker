
import './App.css';
import Form from './Pages/ExpenseFormPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Component/navbar/Navbar';
import ViewExpense from './Pages/ExpenseListPage';
import { useState } from 'react';
import Home from './Pages/Home';
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
        <h1 className='text-center text-xl font-bold mb-4'></h1>
      <Routes>
        <Route path="/" element={<Home path></Home>}></Route>
        <Route path='/add' element={<Form  formdata={formdata} setformdata={setformdata}  />} />
        < Route path='/view' element={<ViewExpense  tableData={tableData} 
                setTableData={setTableData}/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
