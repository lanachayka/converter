import React from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import {Route, Routes } from 'react-router-dom';
import Length from './components/Length/Length';
import Weight from './components/Weight/Weight';
import Temperature from './components/Temperature/Temperature';

const App:React.FC = () => {
  return (
    <div className="App">
        <Menu />
        <Routes>
            <Route path="/length" element={<Length />}>Length</Route>
            <Route path="/weight" element={<Weight />}>Weight</Route>
            <Route path="/temperature" element={<Temperature/>}>Temperature</Route>
        </Routes>
    </div>
  );
}

export default App;
