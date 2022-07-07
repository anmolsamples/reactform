import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import './Style.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <h3 className='text'>React Form</h3>
    <App />
    
    
  </React.StrictMode>
);



