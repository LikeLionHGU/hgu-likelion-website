import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ScollProgressBar from './components/ScollProgressBar';
import { Wrapper } from './components/Wrapper';
import Contact from './pages/Contact';
import Main from './pages/Main';
import Recruit from './pages/Recruit';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/recruit" element={<Recruit />} />
          {/* <Route path="/apply" element={<Apply />} />
          <Route path="/faq" element={<FAQ />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Wrapper>
      <ScollProgressBar />
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
