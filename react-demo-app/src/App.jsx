// import Header from './Header.jsx'
// import Footer from './Footer.jsx'
// import Card from './Card.jsx'

// function App() {
//   return(
//     <>
//     <Header/>
//     <Card/>
//     <Footer/>
//     </>
 
//   );
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Card from './Card'; 
import Projects from './Projects';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Card/>} />
         <Route path="/projects" element={<Projects/>} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;