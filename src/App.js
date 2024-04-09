import React from 'react';
import { Routes, Route } from "react-router-dom";
// import './App.css';
import Main from './Main';
import DinnerDance from './DinnerDance';

function App() {

  return (
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="dinnerdance2t3" element={<DinnerDance />} />
      </Routes>
  );

}

export default App;
