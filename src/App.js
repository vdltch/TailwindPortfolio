import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Stacks from './components/Stacks';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <main>
        <About />
        <Stacks />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
