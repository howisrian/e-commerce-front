import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;