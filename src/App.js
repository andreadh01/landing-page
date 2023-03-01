import { Routes, Route } from "react-router-dom";
import Form from "./pages/Form"
import Success from "./pages/Success"
import React from 'react';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="success" element={<Success />} />
    </Routes>
  );
}

export default App;
