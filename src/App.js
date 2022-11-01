import { Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/404Page/404Page';
import Login from './components/Authentication/Login';
import RepositoryPage from './components/ProfilePage/RepoPage';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/repositories' element={ <RepositoryPage/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
  </div>
  );
}

export default App;
