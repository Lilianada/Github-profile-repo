import './App.css';
import RepositoryPage from './components/RepoPage/RepoPage';
import RepositoriesList from './components/ReposList/ReposList';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="mainWrapper">
      <RepositoriesList/>
      {/* <RepositoryPage/> */}
  </div>
  );
}

export default App;
