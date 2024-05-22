import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from './components/snippets/navbar/Navbar';
import Home from './components/pages/home/Home';
import Services from './components/pages/services/Services';
import SignUp from './components/pages/sign-up/SignUp'; // Corrected import path if needed
import Destination from './components/pages/destination/Destination'; // Corrected import path if needed
import ScrollToTop from './components/snippets/ScrollToTop'; // Updated to be consistent
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <ScrollToTop>
          <main>
            <div>
              <Routes>
                <Route path='/travelRe' element={<Home />} />
                <Route path='/services' element={<Services />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/services/activity' element={<Destination />} />
              </Routes>
            </div>
          </main>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
