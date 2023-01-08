import './App.css';
import DataProvider from './useContext/DataContext';
import Home from './pages/Home';

function App() {
  return (
    <DataProvider>
      <Home/>
    </DataProvider>
  );
}

export default App;
