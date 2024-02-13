import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './utils/StateProvider';
import reducer, { initialState } from './utils/reducer';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <StateProvider initialState={initialState} reducer={reducer}>
          <App />
        </StateProvider>
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);
