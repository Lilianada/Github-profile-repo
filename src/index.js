import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RepositoryPage from './components/RepoPage/RepoPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import RepositoriesList from './components/ReposList/ReposList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path='/repository' element={ <RepositoryPage/>} />
          <Route path='*' element={<ErrorPage/>} />
        </Route>
      </Routes>
      {/* <App/> */}
    </BrowserRouter>
  </React.StrictMode>
);
