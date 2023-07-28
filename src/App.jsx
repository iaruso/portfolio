import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ScrollToTop from "./components/ScrollToTop";
import Main from './pages/Main';
import CircuitRush from './pages/CircuitRush';
import Movera from './pages/Movera';
import Expns from './pages/Expns';

const router = [
  { path: '/', element: <Main/> },
  { path: '/work/circuit-rush', element: <CircuitRush/> },
  { path: '/work/movera', element: <Movera/>},
  { path: '/work/expns', element: <Expns/> },
	{ path: '*', element: <Main/> },
];

function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToTop>
					<Routes>
          {router.map(({ path, element }) => (
            <Route key={path} exact path={path} element={element} />
          ))}
					</Routes>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
