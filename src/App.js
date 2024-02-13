import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Veg from './components/Veg';
import Gallery from './components/Gallery';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Veg />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
