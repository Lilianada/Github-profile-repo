import './App.css';
import DataProvider from './components/ContextApi/DataContext';
import Home from './pages/Home';

function App() {
  return (
    <DataProvider>
      <Home/>
    </DataProvider>
  );
}

export default App;
