import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './utils/StateProvider';
import reducer, { initialState } from './utils/reducer';
import {  HashRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';
import ScrollToTop from './utils/ScrollToTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <HashRouter>
        <ScrollToTop/>
      {/* <BrowserRouter > */}
        <StateProvider initialState={initialState} reducer={reducer}>
          <App />
        </StateProvider>
      </HashRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);
