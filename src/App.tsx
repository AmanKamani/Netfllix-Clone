import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { ROUTES } from './utils/constants';

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
    </Routes>
  </BrowserRouter>);
}

export default App;
