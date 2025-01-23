import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { BrowserRouter, Route, Routes } from 'react-router';
import { NavbarPage } from './pages/NavbarPage';
import { HeroPage } from './pages/HeroPage';
import { GridPage } from './pages/GridPage';
import { FooterPage } from './pages/FooterPage';
import { HeaderPage } from './pages/HeaderPage';
import { ButtonPage } from './pages/ButtonPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/pages/NavbarPage" element={<NavbarPage />}></Route>
        <Route path="/pages/HeroPage" element={<HeroPage />}></Route>
        <Route path="/pages/GridPage" element={<GridPage />}></Route>
        <Route path="/pages/FooterPage" element={<FooterPage />}></Route>
        <Route path="/pages/HeaderPage" element={<HeaderPage />}></Route>
        <Route path="/pages/ButtonPage" element={<ButtonPage />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
