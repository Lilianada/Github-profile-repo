import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RepositoryPage from './components/RepoPage/RepoPage';
import ErrorPage from './components/404Page/404Page';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
            <Route path='/repository' element={ <RepositoryPage/>} />
            <Route path='*' element={<ErrorPage/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
