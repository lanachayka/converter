import React from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Length from './components/Length/Length';
import Weight from './components/Weight/Weight';
import Temperature from './components/Temperature/Temperature';
import DateField from "./components/DateField/DateField";

const App:React.FC = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <DateField />
            <Menu />
            <Routes>
                <Route path="/converter/length" element={<Length />}>Length</Route>
                <Route path="/converter/weight" element={<Weight />}>Weight</Route>
                <Route path="/converter/temperature" element={<Temperature/>}>Temperature</Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
