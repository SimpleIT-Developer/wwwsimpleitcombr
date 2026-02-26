import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage';
import DigitalProductsPage from '@/pages/DigitalProductsPage';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <ScrollToTop />
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/produtos-digitais" element={<DigitalProductsPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
