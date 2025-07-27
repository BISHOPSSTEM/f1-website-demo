import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Races from './pages/Races';
import Drivers from './pages/Drivers';
import Teams from './pages/Teams';
import Standings from './pages/Standings';
import News from './pages/News';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div className="font-inter">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="races" element={<Races />} />
            <Route path="drivers" element={<Drivers />} />
            <Route path="teams" element={<Teams />} />
            <Route path="standings" element={<Standings />} />
            <Route path="news" element={<News />} />
            <Route path="gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
