import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Data from './pages/Data';
import Error from './pages/Error';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import ErrorPage from './components/404Page/404Page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>} />
            <Route path='*' element={<ErrorPage/>} />
            <Route path='/repository/:id' element={<Data/>} />
            <Route path='/error' element={<Error/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
