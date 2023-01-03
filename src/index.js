import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RepositoryPage from './components/RepoPage/RepoPage';
import ErrorPage from './components/404age/ErrorPage';
import RepositoriesList from './components/ReposList/ReposList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
          <Route path='/repository:id' element={ <RepositoryPage/>} />
          <Route path='*' element={<ErrorPage/>} />
        
      </Routes>
      {/* <App/> */}
    </BrowserRouter>
  </React.StrictMode>
);
