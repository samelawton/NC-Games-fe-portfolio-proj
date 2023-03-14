import './App.css';
import HomePage from './Pages/HomePage';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>

    </div>
  );
}

export default App;
