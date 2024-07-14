import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, SignIn, SignUp } from './pages';
import { ROUTES } from './utils/constants';

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.Home} element={<Home />} />
      <Route path={ROUTES.SignIn} element={<SignIn />} />
      <Route path={ROUTES.SignUp} element={<SignUp />} />
    </Routes>
  </BrowserRouter>);
}

export default App;
