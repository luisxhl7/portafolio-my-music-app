import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/pages/App';
import './style/index.scss'
import { axiosInterceptor } from './interceptors/axios.interceptor';

axiosInterceptor();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
