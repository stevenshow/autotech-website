import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/App.scss';
import Header from '../components/Header';
import Home from '../pages/Home';
import Services from '../pages/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
