import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { Wrapper } from './components/Wrapper';
import Apply from './pages/Apply';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Main from './pages/Main';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Wrapper>
        <Routes>
          <Route index element={<Main />} />
          <Route path="apply" element={<Apply />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Wrapper>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
