// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './components/Form';
import DataTable from './components/DataTable';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/form" element={<Form />} />
          <Route path="/datatable" element={<DataTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
