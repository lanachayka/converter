import React from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import {Route, RouteObject, Routes, useRoutes} from 'react-router-dom';
import Length from './components/Length/Length';
import Weight from './components/Weight/Weight';
import Temperature from './components/Temperature/Temperature';

function App() {
  const routes: RouteObject[] = [{
      path: '/convertor',
      element: <Menu />,
      children: [
          {path: '/convertor/length',
          element: <Length/>
          },
          {path: '/convertor/weight',
          element: <Weight/>
          },
          {path: '/convertor/temperature',
              element: <Temperature/>
          },
      ]
    }
  ];

  const element = useRoutes(routes);

  return (
    <div className="App">
        {element}
        <Routes>
            <Route path="/length" element={<Length />}>Length</Route>
            <Route path="/weight" element={<Weight />}>Weight</Route>
            <Route path="/temperature" element={<Temperature/>}>Temperature</Route>
        </Routes>
    </div>
  );
}

export default App;
