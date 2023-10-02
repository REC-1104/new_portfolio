import React from 'react'
import Navbar from './components/Navbar';
import Prof from './components/pages/Prof';
import Projects from './components/pages/Projects';
import Blogs from './components/pages/Blogs';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div id='MAIN'>
      <Navbar />
      <Prof />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;
