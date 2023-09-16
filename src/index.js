import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/pages/App';
import { axiosInterceptor } from './interceptors/axios.interceptor';
import { BrowserRouter } from 'react-router-dom';
import './style/index.scss'
import { Provider } from 'react-redux';
import store from './store/store';


axiosInterceptor();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Provider store={ store }>
        <App />
      </Provider>
    </BrowserRouter>
  // </React.StrictMode>
);
