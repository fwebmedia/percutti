import React from 'react';
import reactDom from 'react-dom';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';

import Content from './components/Content';
import Terminos from './components/pages/Terminos';
import Registros from './components/pages/Registros';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
const contenedor = document.getElementById('root');
reactDom.render(
  <div>

    <BrowserRouter>
    <Header />
    <Banner />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="terminos" element={<Terminos />} />
        <Route path="registros" element={<Registros />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>, contenedor
);

