import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Error from './component/Error/Error';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import About from './component/About/About';
import DetailAppartment from './component/DetailAppartment/DetailAppartment';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<DetailAppartment />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
