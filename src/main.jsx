import React from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RecoveryPage from './routes/RecoveryPage';
import CloudPage from './routes/CloudPage';
import ContactPage from './routes/ContactPage';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/recovery' element={<RecoveryPage />} />
      <Route path='/cloud' element={<CloudPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>
);




{/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
*/}