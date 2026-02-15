import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Services from './components/Services';
import ProjectRegistration from './components/ProjectRegistration';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Work />
      <Services />
      <ProjectRegistration />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
