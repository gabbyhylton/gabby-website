import logo from './logo.svg';
import './App.test';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/about';
import Contact from './pages/contact';
import { Layout } from './layout';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
