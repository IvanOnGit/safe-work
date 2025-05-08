import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Privacy from './components/Privacy/Privacy';
import Cookies from './components/Cookies/Cookies';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidad" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
    </Router>
  );
}

export default App;