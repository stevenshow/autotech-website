import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/services" element={<></>} />
          <Route path="/contact" element={<></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
