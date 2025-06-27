import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import IngresosBrutos from './pages/IngresosBrutos';
import ImpuestoInmobiliario from './pages/ImpuestoInmobiliario';
import ControlFiscal from './pages/ControlFiscal';
import TasasYAranceles from './pages/TasaYAranceles';
import Vehículos from './pages/Vehiculos';
import Normativas from './pages/Normativas';
import Sellos from './pages/Sellos';
import PadronesProductores from './pages/PadronesProductores';
import Excenciones from './pages/Exenciones';
import BeneficiosATM from './pages/BeneficiosATM';


function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/post/:slug" element={<PostDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tramites/ingresos-brutos" element={<IngresosBrutos />} />
            <Route path="/tramites/inmobiliario" element={<ImpuestoInmobiliario />} />
            <Route path="/tramites/control-fiscal" element={<ControlFiscal/>} />
            <Route path="/tramites/tasas-aranceles" element={<TasasYAranceles/>} />
            <Route path="/tramites/vehiculos" element={<Vehículos/>} />
            <Route path="/informacion-fiscal/normativas" element={<Normativas/>} />
            <Route path="/tramites/sellos" element={<Sellos/>} />
            <Route path="/informacion-fiscal/padrones" element={<PadronesProductores/>} />
            <Route path="/informacion-fiscal/exenciones" element={<Excenciones/>} />
            <Route path="/beneficios" element={<BeneficiosATM />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;