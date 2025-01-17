import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './Components/Portfolio';  // Assuming Portfolio is in Components folder
import Project1 from './Pages/Project1';  // Your Project1 page
import Project2 from './Pages/Project2';  // Your Project2 page
import Project3 from './Pages/Project3';  // Your Project3 page

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Portfolio />} />

        {/* Project Routes */}
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        {/* backto home button */}

      </Routes>
    </Router>
  );
};

export default App;
