import './App.css';
import './input.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Content from './components/Content';

function App() {
  return (
    <Router>
      <Home>
        <Routes>
          <Route path='/' element={<Content />}></Route>
        </Routes>
      </Home>
    </Router>
  );
}

export default App;
