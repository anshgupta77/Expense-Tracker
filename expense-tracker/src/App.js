
import './App.css';
import Form from './Form';
import {browserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Component/Navbar';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Form />} />
    </Router>
    <h1 className='text-center text-xl font-bold mb-4'>Expense Tracker App</h1>
    <Form />
    </>
  );
}

export default App;
