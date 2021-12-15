import React from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import {Route, RouteObject, Routes, useRoutes} from 'react-router-dom';
import Length from './components/Length/Length';
import Weight from './components/Weight/Weight';
import Temperature from './components/Temperature/Temperature';

function App() {
  const routes: RouteObject[] = [{
      path: '/',
      element: <Menu />,
      children: [
          {path: '/length',
          element: <Length/>
          },
          {path: '/weight',
          element: <Weight/>
          },
          {path: '/temperature',
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
