import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import Berita from './components/Berita';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Link } from './Pages';
import Action from './Pages/action';
import Alamat from './Pages/alamat';
import Nohp from './Pages/nohp';
import Penawaran from './Pages/penawaran';
import Galeri from './Pages/galeri';
import Testimoni from './Pages/testimoni';


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <NavbarComponent />
        <Berita />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/link*" element={<Link/>} />
          <Route path="/action*" element={<Action/>} />
          <Route path="/alamat*" element={<Alamat/>} />
          <Route path="/nohp*" element={<Nohp/>} />
          <Route path="/penawaran*" element={<Penawaran/>} />
          <Route path="/galeri*" element={<Galeri/>} />
          <Route path="/testimoni*" element={<Testimoni/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
