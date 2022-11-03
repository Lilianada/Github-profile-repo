import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import RepositoryPage from './components/RepoPage/RepoPage';
import ErrorPage from './components/ErrorPage/ErrorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Routes>
        <Route path="*" element={<App />} >
          <Route index path='home' element={<Home/>} />
          <Route path='repositories' element={ <RepositoryPage/>} />
          <Route path='' element={<ErrorPage/>} />
        </Route>
      </Routes> */}
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
