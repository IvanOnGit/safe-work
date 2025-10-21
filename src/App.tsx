import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Privacy from './components/Privacy/Privacy';
import Cookies from './components/Cookies/Cookies';
import Legal from './components/Legal/Legal';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ThankYou from './components/ThankYou/ThankYou';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidad" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/legal" element={<Legal />} />
        <Route path ="/gracias" element={<ThankYou />} /> 
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;