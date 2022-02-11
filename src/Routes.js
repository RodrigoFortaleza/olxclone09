
import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';
import { RequireAuth } from './helpers/RequireAuth';
import AddAd from './pages/AddAd';
import Ads from './pages/Ads';

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      -
      <Route path="/about" element={
        <RequireAuth>
          <About />
        </RequireAuth>}>
      </Route>

      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/ad/:id" element={<AdPage />}></Route>
      <Route private path="/post-an-ad" element={<AddAd />}></Route>
      <Route path='*' element={<NotFound />}></Route>
      <Route path="/ads" element={<Ads />}></Route>

    </Routes>
  );
}

export default Rotas;
