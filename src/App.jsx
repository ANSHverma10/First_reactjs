import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CustomerReview, Footer, Hero, PopularProducts, Services, SpecialOffers, Subscribe, SuperQuality } from "./sections";
import Nav from "./Components/Nav";
import Loading from './Components/Loading';
import ProductBuying from './sections/ProductBuying';
import './index.css'; // Ensure your Tailwind CSS file is imported

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetching process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <Router>
          <Nav className="opacity-0 animate-blurIn delay-150" />
          <Routes>
            <Route path="/" element={
              <main className="relative bg-black">
                <section className="xl:padding-l wide:padding-r padding-b opacity-0 animate-blurIn delay-200 bg-black text-white">
                  <Hero />
                </section>
                <section className="padding opacity-0 animate-blurIn delay-300">
                  <PopularProducts />
                </section>
                <section className="padding opacity-0 animate-blurIn delay-400">
                  <SuperQuality />
                </section>
                <section className="padding-x opacity-0 animate-blurIn delay-500">
                  <Services />
                </section>
                <section className="padding opacity-0 animate-blurIn delay-600">
                  <SpecialOffers />
                </section>
                <section className="bg-white padding opacity-0 animate-blurIn delay-700">
                  <CustomerReview />
                </section>
                <section className="bg-white padding-x sm:py-32 py-16 w-full opacity-0 animate-blurIn delay-800">
                  <Subscribe />
                </section>
                <section className="padding-x padding-t pb-8 opacity-0 animate-blurIn delay-900 text-black">
                  <Footer />
                </section>
              </main>
            } />
            <Route path="/product/:productId" element={<ProductBuying />} />
          </Routes>
        </Router>
      )}
    </div>
  );
};

export default App;
